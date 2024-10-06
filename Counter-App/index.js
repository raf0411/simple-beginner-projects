const counter = document.querySelector('.js-count');
const decreaseButton = document.querySelector('.js-decrease');
const resetButton = document.querySelector('.js-reset');
const increaseButton = document.querySelector('.js-increase');

let count = JSON.parse(localStorage.getItem('count')) || 0;

displayCount();

increaseButton.addEventListener('click', () => {
  increase();
});

decreaseButton.addEventListener('click', () => {
  decrease();
});

resetButton.addEventListener('click', () => {
  reset();
});

function displayCount() {
  counter.textContent = count; 
}

function increase() {
  count++;;
  displayCount();
  saveLocal();
}

function decrease() {
  count--;

  if (count < 0) {
    reset();
  }

  displayCount();
  saveLocal();
}

function reset() {
  count = 0;
  displayCount();
  saveLocal();
}

function saveLocal() {
  localStorage.setItem('count', JSON.stringify(count));
}