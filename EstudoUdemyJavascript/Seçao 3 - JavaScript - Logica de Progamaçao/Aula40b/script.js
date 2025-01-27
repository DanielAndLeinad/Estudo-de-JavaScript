// Variaveis principais
let randomNumber = Math.floor(Math.random() * 100) + 1;
let attempts = 0;   

// Seleçao de elementos no DOM

const guessInput = document.getElementById("guessInput");
const submitGuess = document.getElementById("submitGuess");
const restartGame = document.getElementById("restarGame");
const feedback = document.getElementById("feedback");
const attemptsDisplay = document.getElementById("attempts");

// função para verificar o palpite
 function checkGuess(){
    const userGuess = Number(guessInput.value);
    attempts++;

    if(userGuess === randomNumber){
        feedback.textContent = "Parabéns! Você acertou!";
        feedback.style.color = "green";
    }else if(userGuess > randomNumber){
        feedback.textContent = "Tente um numero menor..."
        feedback.style.color = "orange";
    }else{
        feedback.textContent = "Tente um numero maior..."
        feedback.style.color = "red";
    }
    
        attemptsDisplay.textContent = `Tentativas: ${attempts}`;
        guessInput.value = ""; // limpa 
 }

 // função para reiniciar o jogo
 function restart(){
    randomNumber = Math.floor(Math.random() * 100) + 1;
    attempts = 0;
    feedback.textContent = "";
    attemptsDisplay.textContent = "Tentativas: 0";
    guessInput.value = "";
 }

 // Eventos

 submitGuess.addEventListener("click", checkGuess);
 restartGame.addEventListener("click", restart);

 // Inicializando o jogo
 restart();