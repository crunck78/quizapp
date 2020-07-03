//alert("Let the games Begin!!");

var quizes = [];
var questions = [ 'How has invented HTML?' ];
var answers = [ 'Robbie Williams', 'Lady Gaga', 'Tim Berners-Lee', 'Justin Bieber' ];

function init(n){
	for( var i = 0; i < n; i++)
	{
		quizes.push( createQuiz() );
	}
}

function createQuizList() {
	var quize = document.createElement('div');
	var question = document.createElement('div');
	var answerContainer = document.createElement('div');
	quize.classList.add('card');
	question.classList.add('card-body');
	answerContainer.classList.add('mt-4');
}

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
