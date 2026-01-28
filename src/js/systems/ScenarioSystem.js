// ============ SISTEMA DE CENÁRIOS ============
import { SCENARIOS, getScenario } from '../data/scenarios.js';
import screenManager from '../managers/ScreenManager.js';

class ScenarioSystem {
    constructor() {
        this.currentScenario = null;
        this.backgroundElement = null;
    }

    init() {
        this.backgroundElement = document.getElementById('background');
    }

    loadScenario(scenarioId) {
        const scenario = getScenario(scenarioId);
        if (!scenario) {
            console.warn(`Cenário não encontrado: ${scenarioId}`);
            return;
        }

        this.currentScenario = scenario;
        this.applyScenario(scenario);
        
        console.log(`🎬 Cenário carregado: ${scenario.name}`);
    }

    applyScenario(scenario) {
        if (!this.backgroundElement) return;

        // Aplicar cores do cenário
        this.backgroundElement.style.setProperty('--sky-color', scenario.colors.sky);
        this.backgroundElement.style.setProperty('--ground-color', scenario.colors.ground);
        this.backgroundElement.style.setProperty('--accent-color', scenario.colors.accent);

        // Aplicar classe do cenário
        this.backgroundElement.className = `scenario-${scenario.id}`;

        // Gerar elementos do cenário
        this.generateElements(scenario.elements, scenario.id);
    }

    generateElements(elements, scenarioId) {
        // Limpar elementos anteriores
        const dynamicElements = this.backgroundElement.querySelectorAll('.dynamic-element');
        dynamicElements.forEach(el => el.remove());

        // Criar novos elementos baseado no cenário
        elements.forEach(elementType => {
            this.createElement(elementType, scenarioId);
        });
    }

    createElement(type, scenarioId) {
        switch(type) {
            // VOID (Prólogo)
            case 'floating_data':
                this.createFloatingData();
                break;
            case 'glitch_particles':
                this.createGlitchParticles();
                break;
            case 'distant_frames':
                this.createDistantFrames();
                break;

            // TEMPLE (Cap 1)
            case 'oni_statues':
                this.createOniStatues();
                break;
            case 'stone_bridge':
                this.createStoneBridge();
                break;
            case 'purple_sky':
                // Handled by CSS
                break;
            case 'distant_temple':
                this.createDistantTemple();
                break;

            // ARCHIVES (Cap 2)
            case 'floating_scrolls':
                this.createFloatingScrolls();
                break;
            case 'shadow_pillars':
                this.createShadowPillars();
                break;
            case 'memory_orbs':
                this.createMemoryOrbs();
                break;
            case 'hidden_passages':
                // Visual hint only
                break;

            // DIGITAL (Cap 3)
            case 'data_streams':
                this.createDataStreams();
                break;
            case 'holographic_displays':
                this.createHoloDisplays();
                break;
            case 'iteration_counter':
                this.createIterationCounter();
                break;
            case 'system_alerts':
                this.createSystemAlerts();
                break;

            // FRAME ZERO (Cap 4)
            case 'reality_cracks':
                this.createRealityCracks();
                break;
            case 'all_masks_floating':
                this.createFloatingMasks();
                break;
            case 'the_architects':
                this.createArchitects();
                break;
            case 'reset_button':
                this.createResetButton();
                break;

            // NEW DAWN (Epílogo)
            case 'sunrise':
                // Handled by CSS
                break;
            case 'broken_masks':
                this.createBrokenMasks();
                break;
            case 'peaceful_world':
                this.createPeacefulWorld();
                break;
        }
    }

    // ═══════════════════════════════════════════════════
    // VOID ELEMENTS
    // ═══════════════════════════════════════════════════
    createFloatingData() {
        for (let i = 0; i < 30; i++) {
            const particle = document.createElement('div');
            particle.className = 'dynamic-element data-particle';
            particle.style.left = `${Math.random() * 100}%`;
            particle.style.top = `${Math.random() * 100}%`;
            particle.style.animationDelay = `${Math.random() * 8}s`;
            particle.style.animationDuration = `${6 + Math.random() * 4}s`;
            this.backgroundElement.appendChild(particle);
        }
    }

    createGlitchParticles() {
        for (let i = 0; i < 15; i++) {
            const glitch = document.createElement('div');
            glitch.className = 'dynamic-element glitch-particle';
            glitch.style.left = `${Math.random() * 100}%`;
            glitch.style.top = `${Math.random() * 100}%`;
            glitch.style.animationDelay = `${Math.random() * 3}s`;
            this.backgroundElement.appendChild(glitch);
        }
    }

    createDistantFrames() {
        for (let i = 0; i < 8; i++) {
            const frame = document.createElement('div');
            frame.className = 'dynamic-element distant-frame';
            frame.style.left = `${10 + Math.random() * 80}%`;
            frame.style.top = `${10 + Math.random() * 60}%`;
            frame.style.animationDelay = `${Math.random() * 15}s`;
            frame.style.opacity = 0.1 + Math.random() * 0.3;
            this.backgroundElement.appendChild(frame);
        }
    }

    // ═══════════════════════════════════════════════════
    // TEMPLE ELEMENTS
    // ═══════════════════════════════════════════════════
    createOniStatues() {
        ['left', 'right'].forEach(side => {
            const statue = document.createElement('div');
            statue.className = `dynamic-element oni-statue ${side}`;
            this.backgroundElement.appendChild(statue);
        });
    }

    createStoneBridge() {
        const bridge = document.createElement('div');
        bridge.className = 'dynamic-element temple-bridge-structure';
        this.backgroundElement.appendChild(bridge);

        // Névoa do abismo
        const fog = document.createElement('div');
        fog.className = 'dynamic-element abyss-fog';
        this.backgroundElement.appendChild(fog);
    }

    createDistantTemple() {
        // Lanternas flutuantes
        for (let i = 0; i < 6; i++) {
            const lantern = document.createElement('div');
            lantern.className = 'dynamic-element floating-lantern';
            lantern.style.left = `${15 + Math.random() * 70}%`;
            lantern.style.top = `${10 + Math.random() * 40}%`;
            lantern.style.animationDelay = `${Math.random() * 6}s`;
            lantern.style.opacity = 0.4 + Math.random() * 0.4;
            this.backgroundElement.appendChild(lantern);
        }
    }

    // ═══════════════════════════════════════════════════
    // ARCHIVES ELEMENTS
    // ═══════════════════════════════════════════════════
    createFloatingScrolls() {
        for (let i = 0; i < 10; i++) {
            const scroll = document.createElement('div');
            scroll.className = 'dynamic-element floating-scroll';
            scroll.style.left = `${15 + Math.random() * 70}%`;
            scroll.style.top = `${20 + Math.random() * 50}%`;
            scroll.style.animationDelay = `${Math.random() * 5}s`;
            this.backgroundElement.appendChild(scroll);
        }
    }

    createShadowPillars() {
        const positions = [80, 200, 1000, 1120];
        positions.forEach((x, i) => {
            const pillar = document.createElement('div');
            pillar.className = 'dynamic-element shadow-pillar';
            pillar.style.left = `${x}px`;
            pillar.style.height = `${200 + Math.random() * 100}px`;
            this.backgroundElement.appendChild(pillar);
        });
    }

    createMemoryOrbs() {
        for (let i = 0; i < 8; i++) {
            const orb = document.createElement('div');
            orb.className = 'dynamic-element memory-orb';
            orb.style.left = `${10 + Math.random() * 80}%`;
            orb.style.top = `${15 + Math.random() * 50}%`;
            orb.style.animationDelay = `${Math.random() * 3}s`;
            this.backgroundElement.appendChild(orb);
        }
    }

    // ═══════════════════════════════════════════════════
    // DIGITAL/CORE ELEMENTS
    // ═══════════════════════════════════════════════════
    createDataStreams() {
        for (let i = 0; i < 12; i++) {
            const stream = document.createElement('div');
            stream.className = 'dynamic-element data-stream';
            stream.style.left = `${5 + i * 8}%`;
            stream.style.animationDelay = `${Math.random() * 2}s`;
            stream.style.opacity = 0.3 + Math.random() * 0.4;
            this.backgroundElement.appendChild(stream);
        }
    }

    createHoloDisplays() {
        const positions = [
            { x: 50, y: 80 },
            { x: 1080, y: 120 },
            { x: 150, y: 350 },
            { x: 980, y: 380 }
        ];
        positions.forEach(pos => {
            const display = document.createElement('div');
            display.className = 'dynamic-element holo-display';
            display.style.left = `${pos.x}px`;
            display.style.top = `${pos.y}px`;
            this.backgroundElement.appendChild(display);
        });
    }

    createIterationCounter() {
        const counter = document.createElement('div');
        counter.className = 'dynamic-element iteration-counter';
        this.backgroundElement.appendChild(counter);
    }

    createSystemAlerts() {
        const alerts = [
            { text: '⚠ ANOMALY DETECTED', x: 100, y: 50 },
            { text: '⚠ MASK SYNC: 47%', x: 1050, y: 60 }
        ];
        alerts.forEach(alert => {
            const el = document.createElement('div');
            el.className = 'dynamic-element system-alert';
            el.textContent = alert.text;
            el.style.left = `${alert.x}px`;
            el.style.top = `${alert.y}px`;
            this.backgroundElement.appendChild(el);
        });
    }

    // ═══════════════════════════════════════════════════
    // FRAME ZERO ELEMENTS
    // ═══════════════════════════════════════════════════
    createRealityCracks() {
        for (let i = 0; i < 8; i++) {
            const crack = document.createElement('div');
            crack.className = 'dynamic-element reality-crack';
            crack.style.left = `${Math.random() * 100}%`;
            crack.style.top = `${Math.random() * 100}%`;
            crack.style.transform = `rotate(${-30 + Math.random() * 60}deg)`;
            crack.style.animationDelay = `${Math.random() * 4}s`;
            this.backgroundElement.appendChild(crack);
        }
    }

    createFloatingMasks() {
        const masks = ['scarlet', 'veil', 'oracle', 'forbidden'];
        masks.forEach((mask, i) => {
            const el = document.createElement('div');
            el.className = `dynamic-element floating-mask ${mask}`;
            el.style.left = '50%';
            el.style.top = '50%';
            el.style.animationDelay = `${-i * 2.5}s`;
            this.backgroundElement.appendChild(el);
        });
    }

    createArchitects() {
        const positions = [200, 500, 800, 1000];
        positions.forEach((x, i) => {
            const architect = document.createElement('div');
            architect.className = 'dynamic-element architect-silhouette';
            architect.style.left = `${x}px`;
            architect.style.bottom = '100px';
            architect.style.animationDelay = `${i * 0.5}s`;
            this.backgroundElement.appendChild(architect);
        });
    }

    createResetButton() {
        const btn = document.createElement('div');
        btn.className = 'dynamic-element reset-button-visual';
        this.backgroundElement.appendChild(btn);
    }

    // ═══════════════════════════════════════════════════
    // NEW DAWN ELEMENTS
    // ═══════════════════════════════════════════════════
    createBrokenMasks() {
        for (let i = 0; i < 6; i++) {
            const fragment = document.createElement('div');
            fragment.className = 'dynamic-element broken-mask-fragment';
            fragment.style.left = `${10 + Math.random() * 80}%`;
            fragment.style.bottom = `${5 + Math.random() * 20}%`;
            fragment.style.transform = `rotate(${Math.random() * 360}deg)`;
            this.backgroundElement.appendChild(fragment);
        }
    }

    createPeacefulWorld() {
        // Pássaros
        for (let i = 0; i < 4; i++) {
            const bird = document.createElement('div');
            bird.className = 'dynamic-element distant-bird';
            bird.style.top = `${10 + Math.random() * 30}%`;
            bird.style.animationDelay = `${i * 2}s`;
            this.backgroundElement.appendChild(bird);
        }
    }

    // Transição entre cenários
    transitionTo(newScenarioId, duration = 1000) {
        return new Promise(resolve => {
            // Fade out
            this.backgroundElement.style.transition = `opacity ${duration/2}ms`;
            this.backgroundElement.style.opacity = '0';

            setTimeout(() => {
                // Trocar cenário
                this.loadScenario(newScenarioId);
                
                // Fade in
                this.backgroundElement.style.opacity = '1';
                
                setTimeout(resolve, duration/2);
            }, duration/2);
        });
    }

    getCurrentScenario() {
        return this.currentScenario;
    }
}

export const scenarioSystem = new ScenarioSystem();
export default scenarioSystem;
