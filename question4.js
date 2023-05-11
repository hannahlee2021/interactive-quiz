function Question4(){
  let question4 = document.getElementById('textbox').value;
  let correct = 0;
  if (question4 == "\uC138\uC885\uB300\uC655") { //unicode = 세종대왕
   correct++;
   localStorage.setItem("q4",correct);
   console.log(localStorage);
   
  } else {
    localStorage.setItem("q4",correct);
    console.log(localStorage);
  }
}