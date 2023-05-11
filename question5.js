function Question5(){
  let question5 = document.getElementById('textbox').value;
  let correct = 0;
  if (question5 == "\uC721") { //unicode = 육
   correct++;
   localStorage.setItem("q3",correct);
   console.log(localStorage);
   
  } else {
    localStorage.setItem("q3",correct);
    console.log(localStorage);
  }
}