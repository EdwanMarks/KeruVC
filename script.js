// Seleciona elementos do DOM
const movingButton = document.getElementById('movingButton');
const buttonsContainer = document.querySelector('.buttons-container');

// Configuração inicial
let containerRect;
const buttonMargin = 20; // Margem de segurança

function initializeButton() {
    // Obtém as dimensões do container pai
    containerRect = buttonsContainer.getBoundingClientRect();
    
    // Configura posicionamento absoluto inicial
    movingButton.style.position = 'absolute';
    movingButton.style.transition = 'transform 0.3s ease';
}

function getRandomPosition() {
    // Calcula posições máximas considerando o container pai
    const maxX = containerRect.width - movingButton.offsetWidth - buttonMargin;
    const maxY = containerRect.height - movingButton.offsetHeight - buttonMargin;

    // Gera posições aleatórias dentro dos limites
    return {
        x: Math.floor(Math.random() * maxX) + buttonMargin,
        y: Math.floor(Math.random() * maxY) + buttonMargin
    };
}

function moveButton() {
    const newPosition = getRandomPosition();
    
    // Usa transform para melhor performance (não causa reflow)
    movingButton.style.transform = `translate(
        ${newPosition.x}px, 
        ${newPosition.y}px
    )`;
}

// Event Listeners
function addEventListeners() {
    // Mouse
    movingButton.addEventListener('mouseenter', moveButton);
    
    // Touch (para dispositivos móveis)
    movingButton.addEventListener('touchstart', (e) => {
        e.preventDefault();
        moveButton();
    });

    // Redimensionamento da janela
    window.addEventListener('resize', initializeButton);
}

// Inicialização
initializeButton();
addEventListeners();
