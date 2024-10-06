let result = document.querySelector('.js-result');
let calc;

result.innerHTML = 0;

const clearButton = document.querySelector('.js-clear-button');
const delButton = document.querySelector('.js-del-button');
const equalButton = document.querySelector('.js-equal-button');
const minusButton = document.querySelector('.js-minus-button');
const divButton = document.querySelector('.js-div-button');
const timesButton = document.querySelector('.js-times-button');
const percentButton = document.querySelector('.js-percent-button');

const numButton = document.querySelectorAll('.js-num-button');

numButton.forEach(function(button, i){
  button.addEventListener('click', () =>{

    if(result.innerHTML == 0)
    {
      result.innerHTML = '';
    }

    result.innerHTML += button.textContent.trim();
  });
});

clearButton.addEventListener('click', () =>{
  clear();
});

equalButton.addEventListener('click', () =>{
  calculate();
});

minusButton.addEventListener('click', () =>{
  operation('-');
});

divButton.addEventListener('click', () =>{
  operation('/');
});

timesButton.addEventListener('click', () =>{
  operation('*');
});

percentButton.addEventListener('click', () =>{
  percentage();
});

delButton.addEventListener('click', ()=>{
  del();
});

function del()
{
  let str = result.innerHTML;

  if(str.length > 0)
  {
    str = str.slice(0, -1);
  
    console.log(str);
  
    result.innerHTML = str;
  }
}

function percentage()
{
  result.innerHTML /= 100;
}

function operation(operation)
{
  result.innerHTML += operation;
}

function calculate()
{
  let temp = result.innerHTML;

  calc = eval(temp);

  console.log(typeof eval(temp));
  
  result.innerHTML = calc;
}

function clear()
{
  result.innerHTML = 0;
}