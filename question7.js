function Question7(){
  let question7 = document.getElementById('textbox').value;
  let correct = 0;
  if (question7 == "\uC218\uB2A5") { //unicode = 수능
   correct++;
   localStorage.setItem("q7",correct);
   console.log(localStorage);
   
  } else {
    localStorage.setItem("q7",correct);
    console.log(localStorage);
  }
}