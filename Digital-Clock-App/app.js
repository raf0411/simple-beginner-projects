const showButton = document.querySelector('.js-show-button');
const p = document.querySelector('p');
let clock;

showButton.addEventListener('click', () => {
  showClock();
});

function showClock() {
  p.classList.add('clock-time', 'js-clock-time');
  clock = document.querySelector('.js-clock-time');
  getTime();
  setInterval(getTime, 1000);
}

function getTime() {
  const date = new Date();
  let hour = date.getHours();
  let mins = date.getMinutes();
  let sec = date.getSeconds();
  let curr = 'AM';

  if (hour >= 12) {
    curr = 'PM';
  }

  hour = String(hour).padStart(2, '0');
  mins = String(mins).padStart(2, '0');
  sec = String(sec).padStart(2, '0');

  clock.innerHTML = `${hour} : ${mins} : ${sec} ${curr}`;
}

