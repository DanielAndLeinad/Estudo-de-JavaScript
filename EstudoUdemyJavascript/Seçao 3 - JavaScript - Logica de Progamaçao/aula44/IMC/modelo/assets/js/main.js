const form = document.querySelector('#form');
form.addEventListener('submit', function(e){
    e.preventDefault();
    const inputPeso = e.target.querySelector('#peso')
    const inputAltura = e.target.querySelector('#altura')

    const peso = Number(inputPeso.value);
    const altura = Number(inputAltura.value);

    if(!peso || !altura){
        setResultado('Error', false)
        return
    }

const imc = getIMC( peso, altura);
const nivelIMC = getNivelIMC( imc);

const msg = `seu IMC  é ${imc} ${nivelIMC}`;

setResultado(msg, true)

});

function getNivelIMC(imc){
    const nivel = ['abaixo do peso', 'peso normal', 'sobrepeso','obesidade grau 1', 'obesidade grau 2', 'obesidade grau 3'];

    if(imc >= 39.9)     return nivel[5];
    if(imc >= 34.9)     return nivel[4];
    if(imc >= 29.9)     return nivel[3];
    if(imc >= 24.9)     return nivel[2];
    if(imc >= 18.9)     return nivel[1];
    if(imc <= 18.5)     return nivel[0];  
}

function getIMC( peso, altura){
    const imc = peso / (altura ** 2);
    return imc.toFixed(2);
}


function criaP(){
    const p = document.createElement('p');
    return p;
}

function setResultado(msg, isValid){
    const resultado = document.querySelector('#result');
  resultado.innerHTML = '';

    const p = criaP();

    if (isValid) {
        p.classList.add('pp-resultado');
    }else{
        p.classList.add('pp-resultado-error');
    }
    
    p.innerHTML = msg;
    resultado.appendChild(p);
}