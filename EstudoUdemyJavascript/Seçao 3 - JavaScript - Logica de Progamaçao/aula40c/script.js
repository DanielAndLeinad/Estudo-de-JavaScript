//VARIVEIS PRINCIPAIS
let randomNumber = Math.floor(Math.random() * 100) + 1;
let attempts = 0;

// SELECION DE ELEMENTOS NO DOM
const guessInput = document.getElementById("guessInput");
const submitGuess = document.getElementById("submitGuess");
const restarGame = document.getElementById("restarGame");
const feedback = document.getElementById("feedback");
const attemptsDisplay = document.getElementById("attempts");

//VERIFICAR O PALPITE
function checkGuess() {
    const userGuess = Number(guessInput.value);
    attempts++;

    if(userGuess === randomNumber) {
        feedback.textContent = "PARABENS!";
        feedback.style.color = "green";
}else if(userGuess > randomNumber) {
    feedback.textContent = "Tente um numero menor..."
    feedback.style.color = "orange";
}else{
    feedback.textContent = "Tente um numero maior..."
    feedback.style.color = "red";
}

    attemptsDisplay.textContent = `Tentativas: ${attempts}`;
    guessInput.value = ""; // limpa input
}

function restart(){
    randomNumber = Math.floor(Math.random() * 100) + 1;
    attempts = 0;
    guessInput.value = "";
    feedback.textContent = "";
    attemptsDisplay.textContent = `Tentativas: ${attempts}`;
 
}

submitGuess.addEventListener("click", checkGuess);
restarGame.addEventListener("click", restart);

restart(); // inicia o jogo automaticamente quando a página é carregada.