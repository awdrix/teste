/**
 * Inicialização da página quando o DOM estiver carregado
 */
document.addEventListener('DOMContentLoaded', function () {
    // Inicializa biblioteca de animações AOS (Animate On Scroll)
    AOS.init({
        duration: 800, // Duração das animações em ms
        once: true, // Anima apenas uma vez
    });

    // Substitui elementos <i data-feather="..."> por ícones SVG
    feather.replace();

    // Inicializa background 3D animado com Vanta.js
    VANTA.GLOBE({
        el: '#vanta-globe',
        mouseControls: true,
        touchControls: true,
        gyroControls: false,
        minHeight: 200.0,
        minWidth: 200.0,
        scale: 1.0,
        scaleMobile: 1.0,
        color: 0xdc2626, // Cor vermelha em hex
        backgroundColor: 0x0a0e12, // Cor de fundo escura
        size: 0.8,
    });
});

/**
 * Função para alternar o menu mobile
 * Mostra/esconde o menu de navegação em dispositivos móveis
 */
function toggleMenu() {
    const menu = document.getElementById('mobile-nav');
    menu.classList.toggle('hidden');
}

/**
 * Função para alternar entre os dias da agenda
 * @param {string} day - 'day1' ou 'day2'
 */
function showDay(day) {
    const day1Schedule = document.getElementById('day1-schedule');
    const day2Schedule = document.getElementById('day2-schedule');
    const day1Tab = document.getElementById('day1-tab');
    const day2Tab = document.getElementById('day2-tab');

    if (day === 'day1') {
        // Mostra agenda do dia 1
        day1Schedule.classList.remove('hidden');
        day2Schedule.classList.add('hidden');
        // Atualiza estilos das abas
        day1Tab.classList.add('bg-hacker-green', 'text-terminal-black');
        day1Tab.classList.remove(
            'bg-terminal-black',
            'text-gray-300',
            'border',
            'border-gray-600'
        );
        day2Tab.classList.remove('bg-hacker-green', 'text-terminal-black');
        day2Tab.classList.add(
            'bg-terminal-black',
            'text-gray-300',
            'border',
            'border-gray-600'
        );
    } else {
        // Mostra agenda do dia 2
        day1Schedule.classList.add('hidden');
        day2Schedule.classList.remove('hidden');
        // Atualiza estilos das abas
        day2Tab.classList.add('bg-hacker-green', 'text-terminal-black');
        day2Tab.classList.remove(
            'bg-terminal-black',
            'text-gray-300',
            'border',
            'border-gray-600'
        );
        day1Tab.classList.remove('bg-hacker-green', 'text-terminal-black');
        day1Tab.classList.add(
            'bg-terminal-black',
            'text-gray-300',
            'border',
            'border-gray-600'
        );
    }
}
/**
 * Função para alternar a exibição de todos os palestrantes
 * Mostra/esconde a seção com palestrantes adicionais
 */
function toggleAllSpeakers() {
    const allSpeakers = document.getElementById('all-speakers');
    const toggleButton = document.getElementById('toggle-speakers');

    if (allSpeakers.classList.contains('hidden')) {
        // Mostra todos os palestrantes
        allSpeakers.classList.remove('hidden');
        toggleButton.textContent = 'Ver Menos Palestrantes';
    } else {
        // Esconde palestrantes adicionais
        allSpeakers.classList.add('hidden');
        toggleButton.textContent = 'Ver Todos os Palestrantes';
    }
}
