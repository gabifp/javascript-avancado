function getRandom(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

let array = [];
let value = 1;
let inicio = 0;

// Criando uma lista
for (let i=0; i<10; i++) {
  array.push(getRandom(1, 10));
}

array.sort();

let med = (array.length / 2) - 1;
let fim = array.length - 1

while (inicio <= array.length - 1) {

}

if (array[med] = value) {
  return console.log('índice: ', med, 'array: ', array);
} else if (array[med] < value) {
    array.splice(0, med);
    console.log('array medio', array);
}

console.log(array);


