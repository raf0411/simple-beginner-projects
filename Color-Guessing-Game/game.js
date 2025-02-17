const rgbColor = document.querySelector('.js-rgb-color');
const answerInfo = document.querySelector('.js-answer-info');
const background = document.getElementById('bg');
const newColorButton = document.querySelector('.js-new-color-button');

let color1 = document.getElementById('color-1');
let color2 = document.getElementById('color-2');
let color3 = document.getElementById('color-3');
let color4 = document.getElementById('color-4');
let color5 = document.getElementById('color-5');
let color6 = document.getElementById('color-6');

let red;
let green;
let blue;

let guessColor;
let answer;
let guess;
let min = 1;
let max = 6;
let difficulty = 'hard';
let state;

eventHandler();
generateRandomGuesses();
displayRGB();

function setAnswer() {
  let guess;
  answer = `rgb(${red}, ${green}, ${blue})`;
  guess = Math.floor(Math.random() * (max - min + 1) + min);
  const guessesColor = document.getElementById(`color-${guess}`);
  guessesColor.style.backgroundColor = answer;
}

function generateRandomRGB() {
  red = Math.floor(Math.random() * 255);
  blue = Math.floor(Math.random() * 255);
  green = Math.floor(Math.random() * 255);
}

function generateRandomGuesses() {
  let guessesColor;

  for (let i = 1; i <= max; i++){
    guessesColor = document.getElementById(`color-${i}`);
    generateRandomRGB();
    guessesColor.style.backgroundColor = `rgb(${red}, ${green}, ${blue})`;
  }
}

function displayRGB() {
  generateRandomRGB();
  rgbColor.textContent = `rgb(${red}, ${green}, ${blue})`;
  setAnswer();
}

function eventHandler() {
  newColorButton.addEventListener('click', () => {
    generateRandomGuesses();
    displayRGB();
    reset();
  });

  color1.addEventListener('click', () => {
    if (color1.style.backgroundColor === answer) {
      answerInfo.textContent = 'You Win!';
      newColorButton.textContent = 'PLAY AGAIN';
      changeColor();
    }
    else {
      answerInfo.textContent = 'Try Again!';
      color1.style.backgroundColor = `rgba(0, 0, 0, 0)`;  
    }
  });

  color2.addEventListener('click', () => {
    if (color2.style.backgroundColor === answer) {
      answerInfo.textContent = 'You Win!';
      newColorButton.textContent = 'PLAY AGAIN';
      changeColor();

    }
    else {
      answerInfo.textContent = 'Try Again!';
      color2.style.backgroundColor = `rgba(0, 0, 0, 0)`;  
    }
  });

  color3.addEventListener('click', () => {
    if (color3.style.backgroundColor === answer) {
      answerInfo.textContent = 'You Win!';
      newColorButton.textContent = 'PLAY AGAIN';
      changeColor();

    }
    else {
      answerInfo.textContent = 'Try Again!';
      color3.style.backgroundColor = `rgba(0, 0, 0, 0)`;  
    }
  });

  color4.addEventListener('click', () => {
    if (color4.style.backgroundColor === answer) {
      answerInfo.textContent = 'You Win!';
      newColorButton.textContent = 'PLAY AGAIN';
      changeColor();

    }
    else {
      answerInfo.textContent = 'Try Again!';
      color4.style.backgroundColor = `rgba(0, 0, 0, 0)`;  
    }
  });

  color5.addEventListener('click', () => {
    if (color5.style.backgroundColor === answer) {
      answerInfo.textContent = 'You Win!';
      newColorButton.textContent = 'PLAY AGAIN';
      changeColor();

    }
    else {
      answerInfo.textContent = 'Try Again!';
      color5.style.backgroundColor = `rgba(0, 0, 0, 0)`;  
    }
  });

  color6.addEventListener('click', () => {
    if (color6.style.backgroundColor === answer) {
      answerInfo.textContent = 'You Win!';
      newColorButton.textContent = 'PLAY AGAIN';
      changeColor();
    }
    else {
      answerInfo.textContent = 'Try Again!';
      color6.style.backgroundColor = `rgba(0, 0, 0, 0)`;
    }
  });
  
}

function changeColor() {
  background.style.backgroundColor = answer;
}

function reset() {
  answerInfo.textContent = '';
  newColorButton.textContent = 'NEW COLORS';
  background.style.backgroundColor = '#2c8e99';
}

handleDifficulties();

function handleDifficulties() {
  const easyButton = document.querySelector('.js-easy-button');
  const hardButton = document.querySelector('.js-hard-button');

  easyButton.addEventListener('click', (e) => {
    e.preventDefault();
    if (difficulty === 'hard') {
      max = 3;
      removeColors();
      generateRandomGuesses();
      displayRGB();
      reset();
      hardButton.classList.remove('active');
      easyButton.classList.add('active');
      difficulty = 'easy';
    }
  });

  hardButton.addEventListener('click', (e) => {
    e.preventDefault();
    if (difficulty === 'easy') {
      restartPage();
      generateRandomGuesses();
      displayRGB();
      reset();
      easyButton.classList.remove('active');
      hardButton.classList.add('active');
      difficulty = 'hard';
    }
  });
}

function removeColors() {
  color4.remove();
  color5.remove();
  color6.remove();
}

function restartPage() {
  location.reload(true);
}
