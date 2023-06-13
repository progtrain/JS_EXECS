 
  var notification = document.getElementById("notification");
  var chaine="";
  for(var i=0;i<100;i++){
    var str="";
    if(i%3==0) str+="Fizz"
    if(i%5==0) str+="Buzz"
    str=str||i;
    console.log(str);
  }
 // notification.innerHTML = chaine;
;