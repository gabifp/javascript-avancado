let varA = 'A'; // B
let varB = 'B'; // C
let varC = 'C'; // A

/*
let varD = varB;
let varE = varC;
let varF = varA;

varA = varD;
varB = varE;
varC = varF;
*/

[varA, varB, varC] = [varB, varC, varA]

console.log(varA, varB, varC)
