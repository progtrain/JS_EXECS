
var checkButton = document.getElementById("checkPalindrome");

function isPalindrome(str) {
 //code
}

checkButton.addEventListener("click", function() {
  'use strict';
  
  var value = document.getElementById("inputPalindrome").value;
  var notification = document.getElementById("notification");
  
  if(isPalindrome(value)) {
    notification.innerHTML = "Oui c'est un palindrome";
  } else {
    notification.innerHTML = "Non ce n'est pas un palindrom";
  }
});