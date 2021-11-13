function check() {
    var c=0;
    var q1=document.quiz.question1.value;
    var q2=document.quiz.question2.value;
    var q3=document.quiz.question3.value;
    var q4=document.quiz.question4.value;
    var q5=document.quiz.question5.value;
    var res=document.getElementById('results');
    var quiz=document.getElementById("quiz");
    if (q1=="design and manufacturing") {c++}
    if (q2=="implementation process") {c++}
    if (q3=="CAD and CAM") {c++}
    if (q4=="software package") {c++}
    if (q5=="both central processing and storage devices") {c++}
    quiz.style.display="none";

    if (c<=1) {
      res.textContent=`Your Result is ${c}. No`
    } else if (c==2 || c==3) {
      res.textContent=`Your Result is ${c}. Maybe`
    } else {
      res.textContent=`Your Result is ${c}. Yes`
    }
}