function zeroEsquerda(num){
    return num >= 10 ? num : `0${num}`;
}

function FormDatas() {
  const dias = [
    "Domingo",
    "Segunda-Feira",
    "Terça-Feira",
    "Quarta-Feira",
    "Quinta-Feira",
    "Sexta-Feira",
    "Sabado",
  ];
  const meses = [
    "Janeiro",
    "Fevereiro",
    "Março",
    "Abril",
    "Maio",
    "Junho",
    "Julho",
    "Agosto",
    "Setembro",
    "Outubro",
    "Novembro",
    "Dezembro",
  ];

  const datas = new Date();

  let diaSemana = (dias[datas.getDay()]);
  let diaDia = zeroEsquerda(datas.getDate());
  //
  let diaMes = (meses[datas.getMonth()]);
  let diaAno = datas.getFullYear();
  //
  let diaHora = zeroEsquerda(datas.getHours());
  let diaMinutos = zeroEsquerda(datas.getMinutes());

return `${diaSemana}, ${diaDia} de ${diaMes} de ${diaAno} - ${diaHora}:${diaMinutos}`;

}

document.addEventListener("DOMContentLoaded", () => {
    const titulo = document.querySelector("h1");
    titulo.innerText = FormDatas();
  });