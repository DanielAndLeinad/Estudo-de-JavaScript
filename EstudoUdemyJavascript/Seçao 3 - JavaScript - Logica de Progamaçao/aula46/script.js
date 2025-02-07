/*
const data = new Date('2019-04-20 20:25:59');
console.log('Dia', data.getDate());
console.log('Mes', data.getMonth() + 1);
console.log('Ano', data.getFullYear());
console.log('Hora', data.getHours());
console.log('Min', data.getMinutes());
console.log('Seg', data.getSeconds());
console.log('Ms', data.getMilliseconds());
console.log('Dia Semana', data.getDay());
console.log(data.toString());
*/


function zeroE(num){
    return num >= 10 ? num : `0${num}`;
}

function formataData(data) {
  const dia = zeroE(data.getDate());
  const mes = zeroE(data.getMonth() + 1);
  const Ano = zeroE(data.getFullYear());
  const Hora = zeroE(data.getHours());
  const min = zeroE(data.getMinutes());
  const seg = zeroE(data.getSeconds());
 
  return `${dia} / ${mes} / ${Ano} / ${Hora}:${min}:${seg}`;

}

const data = new Date();
const dataBrasil = formataData(data);
console.log(dataBrasil);
