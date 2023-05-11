document.addEventListener("DOMContentLoaded", function() {
    
    let score1, score2, score3, score4, score5, score6, score7, score8, finalAnswer;
    let score1_int, score2_int, score3_int, score4_int, score5_int, score6_int, score7_int, score8_int;
    
    document.querySelector("#answer1").innerHTML = localStorage.getItem("q1");
    score1 = localStorage.getItem("q1");
    //let score1_number = parseItem(score1);
    score1_int = parseInt(score1);

    document.querySelector("#answer2").innerHTML = localStorage.getItem("q2");
    score2 = localStorage.getItem("q2");
    score2_int = parseInt(score2);

    document.querySelector("#answer3").innerHTML = localStorage.getItem("q3");
    score3 = localStorage.getItem("q3");
    score3_int = parseInt(score3);
 
    document.querySelector("#answer4").innerHTML = localStorage.getItem("q4");
    score4 = localStorage.getItem("q4");
    score4_int = parseInt(score4);

    document.querySelector("#answer5").innerHTML = localStorage.getItem("q5");
    score5 = localStorage.getItem("q5");
    score5_int = parseInt(score5);

    document.querySelector("#answer6").innerHTML = localStorage.getItem("q6");
    score6 = localStorage.getItem("q6");
    score6_int = parseInt(score6);

    document.querySelector("#answer7").innerHTML = localStorage.getItem("q7");
    score7 = localStorage.getItem("q7");
    score7_int = parseInt(score7);

    document.querySelector("#answer8").innerHTML = localStorage.getItem("q8");
    score8 = localStorage.getItem("q8");
    score8_int = parseInt(score8);

    // score5 = localStorage.getItem("q5");
    // score5_int = parseInt(score5);

    // score6 = localStorage.getItem("q6");
    // score6_int = parseInt(score6);

    // score7 = localStorage.getItem("q7");
    // score7_int = parseInt(score7);

    // score8 = localStorage.getItem("q8");
    // score8_int = parseInt(score8);
    

    // finalAnswer = score1_int + score2_int + score3_int + score4_int + score5_int + score6_int + score7_int + score8_int;
    finalAnswer = score1_int + score2_int + score3_int + score4_int + score5_int + score6_int + score7_int + score8_int;
    document.querySelector("#finalAnswer").innerHTML = finalAnswer;

    if (finalAnswer <= 3 || score1_int == 0) {
        window.location.href = "./fail.html";
    } else {
        window.location.href = "./pass.html";
    }

    //window.location.href = "http://yahoo.com";
    //finalAnswer2 = finalAnswer + score3_int;

    //if ()

    // document.querySelector("#finalAnswer").innerHTML = finalAnswer;
    
    
})
