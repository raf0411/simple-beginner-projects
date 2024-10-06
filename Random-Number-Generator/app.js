const numberInput = document.querySelector('.number-input')
const submitBtn = document.querySelector('.submit-btn')
const randomizeBtn = document.querySelector('.randomize-btn')

const boxGrid = document.getElementById('box-grid')
const result = document.getElementById('result')

let numCollection = []

submitBtn.addEventListener('click', () => {
  addNumber(numberInput.value)
})

randomizeBtn.addEventListener('click', () => {
  randomizeNumber()
})

function addNumber(num) {
  let newElm = document.createElement('p')
  numCollection.push(num)
  newElm.textContent = num
  newElm.classList.add('box')
  boxGrid.appendChild(newElm)
  numberInput.value = 0
}

function randomizeNumber(){
  let num = 0
  let idx = Math.floor(Math.random() * numCollection.length)
  num = numCollection[idx]
  result.style.display = 'block'
  result.textContent = `Result: ${num}`
}