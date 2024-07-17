// Palabras para el juego (puedes agregar más palabras aquí)
const palabras = ['javascript', 'html', 'css', 'python', 'react', 'angular', 'nodejs'];

let palabra;
let palabraOculta;
let letrasUsadas;
let intentosRestantes;

const hangmanImg = document.getElementById('hangman-img');
const wordElement = document.getElementById('word');
const lettersUsedElement = document.getElementById('letters-used');
const messageElement = document.getElementById('message');
const guessInput = document.getElementById('guessInput');

// Función para iniciar el juego
function iniciarJuego() {
    // Escoge una palabra aleatoria de la lista de palabras
    palabra = palabras[Math.floor(Math.random() * palabras.length)];
    palabraOculta = '_'.repeat(palabra.length);
    letrasUsadas = [];
    intentosRestantes = 6;

    // Actualiza la interfaz
    actualizarInterfaz();
}

// Función para actualizar la interfaz del juego
function actualizarInterfaz() {
    wordElement.textContent = palabraOculta.split('').join(' ');
    lettersUsedElement.textContent = letrasUsadas.join(', ');
    hangmanImg.src = `hangman${6 - intentosRestantes}.png`;

    if (intentosRestantes === 0) {
        messageElement.textContent = `¡Perdiste! La palabra era "${palabra}".`;
        guessInput.disabled = true;
    }

    if (palabra === palabraOculta) {
        messageElement.textContent = '¡Ganaste! Has adivinado la palabra.';
        guessInput.disabled = true;
    }
}

// Función para verificar si la letra ingresada es correcta
function checkGuess(event) {
    if (event.keyCode === 13) { // Verifica si se presionó la tecla Enter
        let letra = guessInput.value.toLowerCase();
        if (!letrasUsadas.includes(letra)) {
            letrasUsadas.push(letra);

            if (palabra.includes(letra)) {
                // Actualiza la palabra oculta con la letra correcta
                let nuevaPalabraOculta = '';
                for (let i = 0; i < palabra.length; i++) {
                    if (palabra[i] === letra) {
                        nuevaPalabraOculta += letra;
                    } else {
                        nuevaPalabraOculta += palabraOculta[i];
                    }
                }
                palabraOculta = nuevaPalabraOculta;
            } else {
                // Reduce el número de intentos restantes si la letra no está en la palabra
                intentosRestantes--;
            }

            // Actualiza la interfaz
            actualizarInterfaz();
        }
        guessInput.value = ''; // Limpia el input después de cada intento
    }
}

// Función para reiniciar el juego
function resetGame() {
    messageElement.textContent = '';
    guessInput.disabled = false;
    guessInput.value = '';
    iniciarJuego();
}

// Inicia el juego al cargar la página
window.onload = iniciarJuego;
