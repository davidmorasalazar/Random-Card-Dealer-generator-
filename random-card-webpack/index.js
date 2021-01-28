let number = document.getElementById("span");  // llama a la funcion div del html
let symbol = document.getElementById("span1") ; // llama a la funcion div del html

window.onload = function() { 
 let symbolarray = ["&diams;","&spades;","&hearts;","&clubs;"] ;
 let numberarray = ["2","3","4","5","6","7","8","9","10","a","j","q","k"];
 var randomsymbol = Math.floor(Math.random()*symbolarray.length);
 var randomnumber = Math.floor(Math.random()*numberarray.length);
 number.innerHTML = numberarray[randomnumber];
 symbol.innerHTML = symbolarray[randomsymbol];    
    // alert("hola")
    // let max = 10;
    // let min = 2;
    // var number = Math.floor(Math.random()*(max - min))+min;
    // let indexsymbol = Math.floor(Math.random()*symbol.length);
    // var simbolo = symbol[indexsymbol];
 };
