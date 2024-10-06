const palindromeInput = document.querySelector('.js-palindrome-input');
const checkButton = document.querySelector('.js-check-button');
const palindromeInfo = document.querySelector('.js-palindrome-info');

checkButton.addEventListener('click', () =>{
  displayPalindrome();
});

function checkPalindrome(str) {
  const revStr = str.split('').reverse().join('');

  if (revStr.toLowerCase() === str.toLowerCase()) {
    return true;
  }
  else {
    return false;
  }
}

function displayPalindrome() {
  const palindrome = palindromeInput.value;

  if (checkPalindrome(palindrome) === true) {
    palindromeInfo.textContent = `Yes! It's a palindrome.`;
  }
  else {
    palindromeInfo.textContent = `No! It's not a palindrome.`;
  }
}