
let celToFar = document.getElementById("convertToFaren");
let farToCel = document.getElementById("convertToCelsius");

function toFahrenheit(celsius) {
    //code
}

function toCelsius(fahrenheit) {
    //code
}


celToFar.addEventListener("click", function() {
  'use strict';
  let value = document.getElementById("celsiusToFar").value;
  let notification = document.getElementById("notification");
  notification.innerHTML = toFahrenheit(value);
});

farToCel.addEventListener("click", function() {
  'use strict';
  
  let value = document.getElementById("farToCelsius").value;
  let notification = document.getElementById("notification");
  notification.innerHTML = Math.round(toCelsius(value));
});