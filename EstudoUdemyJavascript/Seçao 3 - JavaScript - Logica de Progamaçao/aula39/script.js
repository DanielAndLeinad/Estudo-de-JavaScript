/*
OPERADORES LOGICOS
&& -> AND -> E 
|| -> OR -> OU  
! -> NOT -> NAO

FALSY
false
0
'' "" ``
null / undefined
NaN
*/

const a = 0;
const b = null;
const c = 'false'; // STRING, LOGO, VERDADEIRO;
const d = false;
const e = NaN; // RETORNARIA ISSO CASO FOSSE TUDO FALSO, POIS PEGA O ULTIMO FALSO A SER;;

console.log(a || b || c || d || e);


