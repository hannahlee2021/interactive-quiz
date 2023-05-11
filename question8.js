function Question8(){
  let question8 = document.getElementById('textbox').value;
  let correct = 0;
  if (question8 == "\uAC00\uC704") { //unicode = 가위
   correct++;
   localStorage.setItem("q8",correct);
   console.log(localStorage);
   
  } else {
    localStorage.setItem("q8",correct);
    console.log(localStorage);
  }
}