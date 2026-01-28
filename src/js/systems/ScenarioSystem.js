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
        this.generateElements(scenario.elements);
    }

    generateElements(elements) {
        // Limpar elementos anteriores
        const dynamicElements = this.backgroundElement.querySelectorAll('.dynamic-element');
        dynamicElements.forEach(el => el.remove());

        // Criar novos elementos baseado no cenário
        elements.forEach(elementType => {
            this.createElement(elementType);
        });
    }

    createElement(type) {
        const element = document.createElement('div');
        element.className = `dynamic-element scenario-element ${type}`;
        
        switch(type) {
            case 'floating_data':
                this.createFloatingData(element);
                break;
            case 'glitch_particles':
                this.createGlitchParticles(element);
                break;
            case 'oni_statues':
                // Já existe no HTML base
                break;
            case 'floating_scrolls':
                this.createFloatingScrolls(element);
                break;
            case 'data_streams':
                this.createDataStreams(element);
                break;
            case 'reality_cracks':
                this.createRealityCracks(element);
                break;
            default:
                element.classList.add(type);
        }

        this.backgroundElement.appendChild(element);
    }

    createFloatingData(container) {
        for (let i = 0; i < 20; i++) {
            const particle = document.createElement('div');
            particle.className = 'data-particle';
            particle.style.left = `${Math.random() * 100}%`;
            particle.style.animationDelay = `${Math.random() * 5}s`;
            particle.style.animationDuration = `${3 + Math.random() * 4}s`;
            container.appendChild(particle);
        }
    }

    createGlitchParticles(container) {
        for (let i = 0; i < 10; i++) {
            const glitch = document.createElement('div');
            glitch.className = 'glitch-particle';
            glitch.style.left = `${Math.random() * 100}%`;
            glitch.style.top = `${Math.random() * 100}%`;
            glitch.style.animationDelay = `${Math.random() * 2}s`;
            container.appendChild(glitch);
        }
    }

    createFloatingScrolls(container) {
        for (let i = 0; i < 8; i++) {
            const scroll = document.createElement('div');
            scroll.className = 'floating-scroll';
            scroll.style.left = `${10 + Math.random() * 80}%`;
            scroll.style.animationDelay = `${Math.random() * 3}s`;
            container.appendChild(scroll);
        }
    }

    createDataStreams(container) {
        for (let i = 0; i < 5; i++) {
            const stream = document.createElement('div');
            stream.className = 'data-stream';
            stream.style.left = `${i * 20 + 10}%`;
            stream.style.animationDelay = `${i * 0.5}s`;
            container.appendChild(stream);
        }
    }

    createRealityCracks(container) {
        for (let i = 0; i < 6; i++) {
            const crack = document.createElement('div');
            crack.className = 'reality-crack';
            crack.style.left = `${Math.random() * 100}%`;
            crack.style.top = `${Math.random() * 100}%`;
            crack.style.transform = `rotate(${Math.random() * 360}deg)`;
            container.appendChild(crack);
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
