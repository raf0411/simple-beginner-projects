let hexText = document.querySelector('.hex-text')
let clickMeButton = document.querySelector('.click-me-button')

let body = document.body

function generateClr() {
  let val1 = Math.floor(Math.random() * 255) + 1
  let val2 = Math.floor(Math.random() * 255) + 1
  let val3 = Math.floor(Math.random() * 255) + 1

  body.style.backgroundColor = `rgb(${val1},${val2},${val3})`

  let hex = rgbToHex(val1, val2, val3)

  hexText.innerHTML = `The hex code of the color is ${hex}`
}

function rgbToHex(r, g, b) {

  var hexR = r.toString(16).padStart(2, '0');
  var hexG = g.toString(16).padStart(2, '0');
  var hexB = b.toString(16).padStart(2, '0');

  var hexColor = '#' + hexR + hexG + hexB;

  return hexColor.toUpperCase();
}

clickMeButton.addEventListener('click', generateClr)