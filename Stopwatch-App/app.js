const startButton = document.querySelector('.js-start-button');
const stopButton = document.querySelector('.js-stop-button');
const resetButton = document.querySelector('.js-reset-button');
const time = document.querySelector('.js-time');

let left = 0;
let right = 0;
let leftKey;
let rightKey;

startButton.addEventListener('click', () => {
  start()
});

stopButton.addEventListener('click', () => {
  stopTime();
});

resetButton.addEventListener('click', () => {
  reset();
});

function start() {
  leftKey = setInterval(updateLeft, 1000);
  rightKey = setInterval(updateRight, 10);
}

function updateLeft() {
  left++;

  if (left > 60) {
    reset();
  }

  time.innerHTML = `${left}:${right}`;
}

function updateRight() {
  right++;

  if (right > 99) {
    right = 0;
  }

  time.innerHTML = `${left}:${right}`;
}

function updateTime() {
  updateLeft();
  updateRight();
}

function stopTime() {
  clearInterval(leftKey);
  clearInterval(rightKey);
}

function reset() {
  stopTime();
  left = 0;
  right = 0;
  time.innerHTML = `${left}:${right}${right}`; 
}