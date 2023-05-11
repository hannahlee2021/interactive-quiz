function Question1(){
  let question1 = document.getElementById('textbox').value;
  let correct = 0;
  if (question1 == "\uD55C\uAD6D") { //unicode = 한국
   correct++;
   localStorage.setItem("q1",correct);
   console.log(localStorage);
   
  } else {
    localStorage.setItem("q1",correct);
    console.log(localStorage);
  }
}







