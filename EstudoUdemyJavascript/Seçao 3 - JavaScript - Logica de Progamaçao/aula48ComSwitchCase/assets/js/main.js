function zeroEsquerda(num) {
  return num >= 10 ? num : `0${num}`;
}

function FormDatas() {
  const datas = new Date();
  
  let diaSemana;
  switch (datas.getDay()) {
    case 0: diaSemana = "Domingo"; break;
    case 1: diaSemana = "Segunda-Feira"; break;
    case 2: diaSemana = "Terça-Feira"; break;
    case 3: diaSemana = "Quarta-Feira"; break;
    case 4: diaSemana = "Quinta-Feira"; break;
    case 5: diaSemana = "Sexta-Feira"; break;
    case 6: diaSemana = "Sábado"; break;
  }

  let diaMes;
  switch (datas.getMonth()) {
    case 0: diaMes = "Janeiro"; break;
    case 1: diaMes = "Fevereiro"; break;
    case 2: diaMes = "Março"; break;
    case 3: diaMes = "Abril"; break;
    case 4: diaMes = "Maio"; break;
    case 5: diaMes = "Junho"; break;
    case 6: diaMes = "Julho"; break;
    case 7: diaMes = "Agosto"; break;
    case 8: diaMes = "Setembro"; break;
    case 9: diaMes = "Outubro"; break;
    case 10: diaMes = "Novembro"; break;
    case 11: diaMes = "Dezembro"; break;
  }

  let diaDia = zeroEsquerda(datas.getDate());
  let diaAno = datas.getFullYear();
  let diaHora = zeroEsquerda(datas.getHours());
  let diaMinutos = zeroEsquerda(datas.getMinutes());

  return `${diaSemana}, ${diaDia} de ${diaMes} de ${diaAno} - ${diaHora}:${diaMinutos}`;
}

document.addEventListener("DOMContentLoaded", () => {
  const titulo = document.querySelector("h1");
  titulo.innerText = FormDatas();
});
