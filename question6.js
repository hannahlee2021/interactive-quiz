function Question6(){
  let question6 = document.getElementById('textbox').value;
  let correct = 0;
  if (question6 == "\uB7EC") { //unicode = 러
   correct++;
   localStorage.setItem("q6",correct);
   console.log(localStorage);
   
  } else {
    localStorage.setItem("q6",correct);
    console.log(localStorage);
  }
}