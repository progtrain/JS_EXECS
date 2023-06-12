let randomNum = Math.floor(Math.random() * 100) + 1;
let i = 5;
let guessNumber = document.getElementById("guessNumber");
guessNumber.addEventListener("click", function() {
  'use strict';
  let value = document.getElementById("yourNumber").value;
  let notification = document.getElementById("notification");
  if(value == randomNum) 
  {
    notification.innerHTML = `Bravo tu as gagné!`;
    randomNum = Math.floor(Math.random() * 100) + 1;
    i = 5;
  }
  else if (i <= 0)
  {
    notification.innerHTML = `Désolé tu as perdu!`;
  } 
  else
  {
    if (value > randomNum)
      notification.innerHTML = `Désolé ton nombre est supérieur au mien, il te reste ${i} essais`;
    else if (value < randomNum)
      notification.innerHTML = `Désolé ton nombre est inférieur au mien, il te reste ${i} essais`;

    i--;
  }
});