let quotesText = document.querySelector('.quotes-text')
let quotesFrom = document.querySelector('.quotes-from')
let generateButton = document.querySelector('.generate-button')

let generateQuotes = () => {
  let index;

  let quotes = [
    "The only way to do great work is to love what you do.",
    "The future belongs to those who believe in the beauty of their dreams.",
    "Be the change that you wish to see in the world.",
    "You miss 100% of the shots you don't take."
  ]
  
  let from = [
    "- Steve Jobs",
    "- Eleanor Roosevelt",
    "- Mahatma Gandhi",
    "- Wayne Gretzky"
  ]

  index = Math.round(Math.random() * 3)

  quotesText.innerHTML = quotes[index]
  quotesFrom.innerHTML = from[index]
}

// On Ready Quotes
generateQuotes()

generateButton.addEventListener('click', generateQuotes)