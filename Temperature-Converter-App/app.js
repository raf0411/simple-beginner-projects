const degreeInput = document.querySelector('.js-degree-input');
const tempInput = document.querySelector('.js-temp-input');
const convertButton = document.querySelector('.js-convert-button');
const tempResult = document.querySelector('.js-tmp-result');

convertButton.addEventListener('click', () =>{
  displayTemp();
});

convertButton.addEventListener('keydown', (event) =>{
  if(event.key === 'Enter')
  {
    displayTemp();
  }
});

function calculateTemp(degree)
{
  let res;

  if(tempInput.value === 'celcius')
  {
    res = (degree * 9/5) + 32;
  }
  else if(tempInput.value === 'fahrenheit')
  {
    res = (degree - 32) * 5/9;
  }

  return res;
}

function displayTemp()
{
  let symbol = '';
  const res = calculateTemp(degreeInput.value);

  if(tempInput.value === 'celcius')
  {
    symbol = 'F';
    tempResult.innerHTML = 
    `
    ${res} &deg;${symbol}
    `;
  }
  else if(tempInput.value === 'fahrenheit')
  {
    symbol = 'C';
    tempResult.innerHTML = 
    `
    ${res} &deg;${symbol}
    `;
  }
}