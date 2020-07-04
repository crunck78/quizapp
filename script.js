//alert('LET THE GAME BEGIN');
var question_1 = 'How has invented HTML?';
var question_1_answer_1 = 'Robbie Williams';
var question_1_answer_2 = 'Lady Gaga';
var question_1_answer_3 = 'Tim Berners-Lee';
var question_1_answer_4 = 'Justin Bieber';


var question_2 = 'What stands for HTML Tag &lta&gt?'
var question_2_answer_1 = 'Text Bold';
var question_2_answer_2 = 'Container';
var question_2_answer_3 = 'Link';
var question_2_answer_4 = 'Cursive';

var question_3 = 'How to bind a Website inside a Website?'
var question_3_answer_1 = '&lt;iframe&gt;, &lt;frame&gt; and &lt;frameset&gt;';
var question_3_answer_2 = '&lt;iframe&gt;';
var question_3_answer_3 = '&lt;frame&gt;';
var question_3_answer_4 = '&lt;frameset&gt;';

var right_answer = 0;
var question_number = 0;
var progress = 0;

function hideElements() {
    document.getElementById('right-answer').classList.add('d-none');
    document.getElementById('next-btn').classList.add('d-none');
}

function nextQuestion() {
    
    hideElements();
    
    question_number = question_number + 1;
    progress = question_number * 10;
    document.getElementById('progress-bar').innerHTML = progress + '%';
    document.getElementById('progress-bar').style.width = progress + '%';

    if(question_number == 1) {
       loadQuestion1();
    }
    if(question_number == 2) {
        loadQuestion2();
    }

    if(question_number == 3) {
        loadQuestion3();
    }
}

function loadQuestion1() {
    document.getElementById("question").innerHTML = question_1;
    document.getElementById("answer1").innerHTML = question_1_answer_1;
    document.getElementById("answer2").innerHTML = question_1_answer_2;
    document.getElementById("answer3").innerHTML = question_1_answer_3;
    document.getElementById("answer4").innerHTML = question_1_answer_4;
    right_answer = 3;
}

function loadQuestion2() {
    document.getElementById("question").innerHTML = question_2;
    document.getElementById("answer1").innerHTML = question_2_answer_1;
    document.getElementById("answer2").innerHTML = question_2_answer_2;
    document.getElementById("answer3").innerHTML = question_2_answer_3;
    document.getElementById("answer4").innerHTML = question_2_answer_4;
    right_answer = 3;
}

function loadQuestion3() {
    document.getElementById("question").innerHTML = question_3;
    document.getElementById("answer1").innerHTML = question_3_answer_1;
    document.getElementById("answer2").innerHTML = question_3_answer_2;
    document.getElementById("answer3").innerHTML = question_3_answer_3;
    document.getElementById("answer4").innerHTML = question_3_answer_4;
    right_answer = 2;
}

function answer(a) {
    //alert('You answerd ' + selected_answer );
    if(a == right_answer) { // right answer
        document.getElementById('wrong-answer').classList.add('d-none');
        document.getElementById('right-answer').classList.remove('d-none');
        //Show next button
        document.getElementById('next-btn').classList.remove('d-none');
    } else {
        document.getElementById('wrong-answer').classList.remove('d-none');
        document.getElementById('right-answer').classList.add('d-none');
    }
}
