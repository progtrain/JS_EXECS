
var checkButton = document.getElementById("reverseStr");

function reverseString(str) {
    return str.split("").reverse().join("");
}

checkButton.addEventListener("click", function() {
  'use strict';
  
  var value = document.getElementById("myStr").value;
  var notification = document.getElementById("notification");
  
  notification.innerHTML = reverseString(value);

});