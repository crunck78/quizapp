//alert('LET THE GAME BEGIN');

function nextQuestion() {
    document.getElementById("question").innerHTML = 'How has invented HTML?';
    document.getElementById("answer1").innerHTML = 'Robbie Williams';
    document.getElementById("answer2").innerHTML = 'Lady Gaga';
    document.getElementById("answer3").innerHTML = 'Tim Berners-Lee';
    document.getElementById("answer4").innerHTML = 'Justin Bieber';
}

function answer(a) {
    //alert('Your Answer was' + a);
    if(a == 'Tim Berners-Lee') {
        alert('RIGHT!!');
    } else {
        alert('WRONG!');
    }
}
