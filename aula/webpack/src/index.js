const name = 'Hajj';

const array = [1,2,3,4,5,6,78,73,5,4,59];

array.map(numero => numero%2 == 0)
  .reduce((acc, cur) => acc + cur, 0);