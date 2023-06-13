
var checkButton = document.getElementById("checkPalindrome");

function isPalindrome(str) {
  str=str.toLowerCase();
  var str2=str.split("").reverse().join("");
  return str===str2;
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