const clrButton = document.querySelector('.clr-button')

let body = document.body
let clrText = document.querySelector('.clr-text')

let color;
let red = 0;
let green = 0;
let blue = 0;

function changeBackgroundClr() {
  red = Math.floor(Math.random() * 255) + 1;
  green = Math.floor(Math.random() * 255) + 1;
  blue = Math.floor(Math.random() * 255) + 1;
  
  body.style.backgroundColor = `rgb(${red}, ${green}, ${blue})`;
  clrText.innerHTML = `RGB (${red}, ${green}, ${blue})`
}

clrButton.addEventListener('click', changeBackgroundClr)