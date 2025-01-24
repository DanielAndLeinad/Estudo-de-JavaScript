  let varA = 'A'; // B
  let varB = 'B'; // C
  let varC = 'C'; // A

// meu jeito
/*
const valorA = 'A'
const valorB = 'B'
const ValorC = 'C'

varA = valorB
varB = ValorC
varC = valorA
*/

// professor 

[ varA, varB, varC ] = [ varB, varC, varA]

  console.log(varA, varB, varC);