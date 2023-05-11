function Question2(){
   let question2 = document.getElementById('textbox').value;
   let correct = 0;
   if (question2 == "\uC2DC\uD5D8") { //unicode = 한국
    correct++;
    localStorage.setItem("q2",correct);
    console.log(localStorage);
    
   } else {
     localStorage.setItem("q2",correct);
     console.log(localStorage);
   }
 }