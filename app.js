function done() {
    var c = 0;
    var q1 = document.quiz.question1.value;
    var q2 = document.quiz.question2.value;
    var q3 = document.quiz.question3.value;
    var q4 = document.quiz.question4.value;
    var result = document.getElementById('result')
    var quiz = document.getElementById('quiz')
    if (q1=="HyperText Markup Language") {c++}
    if (q2=="p") {c++}
    if (q3=="h1") {c++}
    if (q4=="Html") {c++}
    quiz.style.display="none";
    if (c<=3) {
        result.textContent=`Your result is ${c}. Its not so good you need to work on yourself.`
    } else {
        result.textContent=`Your result is ${c}. It is awesome. Keep it up.`
    }
}