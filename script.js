var allQuestions = [
	{
		'question' : 'How has invented HTML?',
		'answer_1' : 'Robbie Williams',
		'answer_2' : 'Lady Gaga',
		'answer_3' : 'Tim Berners-Lee',
		'answer_4' : 'Justin Bieber',
		'right_answer' : 3
	},
	{
		'question' : 'What stands for HTML Tag &lta&gt?',
		'answer_1' : 'Text Bold',
		'answer_2' : 'Container',
		'answer_3' : 'Link',
		'answer_4' : 'Cursive',
		'right_answer' : 3
	},
	{
		'question' : 'How to bind a Website inside a Website?',
		'answer_1' : '&lt;iframe&gt;, &lt;frame&gt; and &lt;frameset&gt;',
		'answer_2' : '&lt;iframe&gt;',
		'answer_3' : '&lt;frame&gt;',
		'answer_4' : '&lt;frameset&gt;',
		'right_answer' : 2
	}
];

var right_answer = 0;
var question_number = 0;
var progress = 0;

function hideElements() {
    document.getElementById('right-answer').classList.add('d-none');
    document.getElementById('next-btn').classList.add('d-none');
}

function nextQuestion() {
    hideElements();
	
	if(question_number == allQuestions.length) {
		finishQuiz();
	}
	else {
		question_number = question_number + 1;
   		loadQuestion();
	}
}

function finishQuiz() {
	//alert('Quiz Finished.');
	document.getElementById('quiz-container').classList.add('d-none');
	document.getElementById('quiz-finished-container').classList.remove('d-none');
}

function loadQuestion() {
    document.getElementById("question").innerHTML = allQuestions[question_number - 1]['question'];
    document.getElementById("answer1").innerHTML = allQuestions[question_number - 1]['answer_1'];;
    document.getElementById("answer2").innerHTML = allQuestions[question_number - 1]['answer_2'];;
    document.getElementById("answer3").innerHTML = allQuestions[question_number - 1]['answer_3'];;
    document.getElementById("answer4").innerHTML = allQuestions[question_number - 1]['answer_4'];;
    right_answer = allQuestions[question_number - 1]['right_answer'];
}

function answer(a) {
    //alert('You answerd ' + selected_answer );
    if(a == right_answer) { // right answer
        document.getElementById('wrong-answer').classList.add('d-none');
        document.getElementById('right-answer').classList.remove('d-none');
        //Show next button
        document.getElementById('next-btn').classList.remove('d-none');
		//Calculate and Show Progress 
		progress = Math.round(question_number / allQuestions.length * 100);
		document.getElementById('progress-bar').innerHTML = progress + '%';
    	document.getElementById('progress-bar').style.width = progress + '%';
		
    } else {
        document.getElementById('wrong-answer').classList.remove('d-none');
        document.getElementById('right-answer').classList.add('d-none');
    }
}
