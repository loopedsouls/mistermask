# ADR 0001 — Correções de vulnerabilidades altas nas dependências

- Data: 2026-10-25, America/Manaus.
- Estado: aceito (implementado no PR que fecha a issue #1).

## Contexto

A revisão de segurança diária automatizada identificou 5 vulnerabilidades de severidade **alta** nas dependências do projeto (issue #1):

| Pacote | Versão usada | Correção | Referência |
|---|---|---|---|
| vite | 5.4.21 | ≥ 6.4.4 (linha 5.x sem correção) | CVE-2026-39365, CVE-2026-112942, CVE-2026-112943, CVE-2026-112945, CVE-2026-53571, CVE-2026-112944, CVE-2026-112946, CVE-2026-53632 |
| postcss | 8.5.6 | ≥ 8.5.23 | GHSA-r28c-9q8g-f849 (CVE-2026-73646) |
| nanoid | 3.3.11 | ≥ 3.3.18 | GHSA-2v37-7h3g-55p8 |
| source-map-js | 1.2.1 | 1.2.2 | GHSA-68fv-2mgg-jv7q |

A única dependência direta é `vite` (devDependencies); `postcss`, `nanoid` e `source-map-js` são transitivas de `vite` (via `postcss`). O repositório mantém dois lockfiles — `package-lock.json` (npm) e `pnpm-lock.yaml` (pnpm) — e o Dockerfile builda com pnpm, portanto ambos precisavam ser corrigidos.

## Decisão

1. **vite `^5.0.0` → `^6.4.4`** (resolvido em **6.4.5** nos lockfiles). A linha 5.x não possui versão corrigida; 6.4.4 é o bump mínimo da linha 6 (alternativas: 7.3.7 ou 8.3.3). O projeto é HTML/CSS/JS vanilla, sem plugins de build, o que reduz o risco do major bump; o vite 6 exige Node `^18 || ^20 || >=22`, compatível com o `node:18-alpine` do Dockerfile.
2. **Lockfiles regenerados com as ferramentas oficiais**, não editados à mão: `npm install --package-lock-only` e `npx pnpm@9 install --lockfile-only`. Detalhe operacional: o pnpm reaproveita versões já travadas que ainda satisfazem os ranges novos — na primeira passada isso manteve postcss 8.5.6 / nanoid 3.3.11 / source-map-js 1.2.1 no lockfile. Foi necessário remover `pnpm-lock.yaml` e `node_modules` e regenerar do zero para forçar a resolução atualizada.
3. **Manter os dois lockfiles** (npm para desenvolvimento local, pnpm porque o Dockerfile o usa).
4. **Sem mudanças de código** no jogo — apenas `package.json` e os dois lockfiles.

## Consequências e validação

- `npm audit`: **0 vulnerabilidades**. `pnpm audit`: **nenhuma vulnerabilidade conhecida**.
- Build de produção validado com o lockfile final: `pnpm install && pnpm run build` → `vite v6.4.5` construiu com sucesso (23 módulos transformados, ~722 ms; `dist/` com index.html, JS, CSS e splashscreen).
- Versões finais nos dois lockfiles (paridade total): vite 6.4.5, postcss 8.5.31, nanoid 3.3.20, source-map-js 1.2.2, rollup 4.65.0, esbuild 0.25.12, fdir 6.5.0, tinyglobby 0.2.17, picomatch 4.0.7.
- A issue #1 é fechada automaticamente pelo merge do PR ("Fixes #1").
- Recomendação (fora do escopo desta correção): habilitar atualizações automáticas de segurança do Dependabot no repositório, conforme sugerido na issue #1, para reduzir a janela de exposição a novas vulnerabilidades.
