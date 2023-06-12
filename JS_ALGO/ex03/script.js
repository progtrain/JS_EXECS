
let celToFar = document.getElementById("convertToFaren");
let farToCel = document.getElementById("convertToCelsius");

function toFahrenheit(celsius) {
    return celsius * 9/5 + 32;
}

function toCelsius(fahrenheit) {
    return (fahrenheit - 32) * 5/9;
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