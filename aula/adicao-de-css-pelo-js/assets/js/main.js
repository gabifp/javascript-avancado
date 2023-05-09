const parag = document.querySelector('.parag');
const ps = parag.querySelectorAll('p');

console.log(ps);

const bodyStyle = getComputedStyle(document.body);
const backgroundBody = bodyStyle.backgroundColor;

console.log(backgroundBody);


for (let p of ps) {
    p.style.backgroundColor = backgroundBody;
    p.style.color = 'white';
    console.log(p);
}

