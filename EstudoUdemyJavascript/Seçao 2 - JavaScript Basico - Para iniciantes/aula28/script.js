const numero = Number(prompt('Digite seu numero: '));
const numeroTitulo = document.getElementById('numero-titulo');
const raizQ = document.getElementById('raizQ');
const numInt = document.getElementById('numInt');
const NaNa= document.getElementById('NaNa');
const arrenBaixo = document.getElementById('arrenBaixo');
const arrenCima = document.getElementById('arrenCima');
const casaDecima = document.getElementById('casaDecima');	

numeroTitulo.innerHTML = numero;
raizQ.innerHTML = `<p> Sua Raiz é: ${Math.sqrt(numero)}.</p>`;

if(Number.isInteger(numero)) {
    numInt.innerHTML = `<p> Seu numero é inteiro: TRUE.</p>`;
} else {
    numInt.innerHTML = `<p> Seu numero não é inteiro: FALSE.</p>`;
}
if(isNaN(numero)) {
    NaNa.innerHTML = `<p> Seu numero é NaN: TRUE.</p>`;
} else {
    NaNa.innerHTML = `<p> Seu numero não é NaN: FALSE.</p>`;
}

arrenBaixo.innerHTML = `<p>Arredondando para baixo: ${Math.floor(numero)}.</p>`;
arrenCima.innerHTML = `<p>Arredondando para cima: ${Math.ceil(numero)}.</p>`;
casaDecima.innerHTML = `<p>Com duas casas decimais: ${numero.toFixed(2)}.</p>`;