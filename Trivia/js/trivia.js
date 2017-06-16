
var currentQuestion = 0;


var allQuestions = [{
	    question: 'What is the worlds longest river?',
	    choices: ['Mississippi','Nile','Amazon', 'Yangtze' ],
	    correctAnswer: 2
	},
	{
	    question: 'what nba team has won the most titles?',
	    choices: ['Boston Celtics', 'Los Angeles Lakers', 'New York Knicks', 'Chicago Bulls'],
	    correctAnswer: 1
	 },
	{
	    question: 'What is the richest city in the world',
	    choices: ['Tokyo', 'New York', 'Los Angeles', 'London'],
	    correctAnswer: 1
	},
	
	{   question: 'What color flower is orange blossom?',
	    choices: ['White', 'Orange', 'Red', 'Blue'],
	    correctAnswer: 0
	},
	{
	    question: 'How many people were in the band The Thompson Twins?',
	    choices: ['3', '4', '2', '5'],
	    correctAnswer: 2
	},
	{
	    question: 'In what continent did camels first evolve?',
	    choices: ['North America', 'Europe', 'Africa', 'South America'],
	    correctAnswer: 2
	},
	{
	    question: 'What color is the black box on a plane?',
	    choices: ['Orange', 'White', 'Red', 'Black'],
	    correctAnswer: 3
	},
	{
	    question: 'What country invented baseball?',
	    choices: ['England', 'USA', 'Spain', 'Cuba'],
	    correctAnswer: 0
	},
	{
	    question: 'What is Chandlers middle name in the sitcom Friends?',
	    choices: ['Muriel', 'Bing', 'You dont K now', 'Doesnt have a middle name'],
	    correctAnswer: 1
	},
	{
	    question: 'The average person does what thirteen times a day?',
	    choices: ['Laughs', 'Opens the fridge', 'Eating', 'Sneezes'],
	    correctAnswer: 0
	}];

	




var questionBox = document.getElementsByClassName("Question")[0];

var question1 = allQuestions[0].question;

var h2 = document.createElement('h2');

h2.innerHTML = question1;

questionBox.innerHTML = ""	

questionBox.appendChild(h2);


var choicesBoxA = document.getElementById("theFirstChoice");

var choices1 = allQuestions[0].choices[0];

var h2 = document.createElement('h2');

h2.innerHTML = choices1;

choicesBoxA.innerHTML = ""	
	
choicesBoxA.appendChild(h2);

var answer1 = document.getElementById('theFirstChoice')
	answer1.addEventListener('click', function(){
		document.getElementById("theFirstChoice").innerHTML = "Incorrect";
	})

var choicesBoxB = document.getElementById("theSecondChoice");

var choices2 = allQuestions[0].choices[1];

var h2 = document.createElement('h2');
 
h2.innerHTML = choices2;

choicesBoxB.innerHTML = ""	
	
choicesBoxB.appendChild(h2);

var answer2 = document.getElementById('theSecondChoice')
	answer2.addEventListener('click', function(){
	document.getElementById("theSecondChoice").innerHTML = "Incorrect";
	
	})


var choicesBoxC = document.getElementById("theThirdChoice");

var choices3 = allQuestions[0].choices[2];

var h2 = document.createElement('h2');

h2.innerHTML = choices3;

choicesBoxC.innerHTML = ""	
	
choicesBoxC.appendChild(h2);

var answer3 = document.getElementById('theThirdChoice')
	answer3.addEventListener('click', function(){
	document.getElementById("theThirdChoice").innerHTML = "Correct";
})


var choicesBoxD = document.getElementById("theFourthChoice");

var choices4 = allQuestions[0].choices[3];

var h2 = document.createElement('h2');

h2.innerHTML = choices4;

choicesBoxD.innerHTML = ""	
	
choicesBoxD.appendChild(h2);

var answer4 = document.getElementById('theFourthChoice')
	answer4.addEventListener('click', function(){
	document.getElementById('theFourthChoice').innerHTML = "Incorrect";
})



var theanswer = document.getElementById('Reset')
	theanswer.addEventListener('click', function(){
		document.getElementById('Reset')
		currentQuestion++
	function add1() {
    alert("Adding +5 to your score!");
    score = score + 5;
    alert(score);

    };



// WHAT NBA TEAM WON THE MOST TITLES 

var questionBox = document.getElementsByClassName("Question")[0];

var question2 = allQuestions[currentQuestion].question;

var h2 = document.createElement('h2');

h2.innerHTML = question2;

questionBox.innerHTML = ""	

questionBox.appendChild(h2);


var choicesBoxA = document.getElementById("theFirstChoice");

var choices1 = allQuestions[currentQuestion].choices[0];

var h2 = document.createElement('h2');

h2.innerHTML = choices1;

choicesBoxA.innerHTML = ""	

choicesBoxA.appendChild(h2);

var answer5 = document.getElementById('theFirstChoice')
	answer5.addEventListener('click', function(){
		document.getElementById("theFirstChoice").innerHTML = "Correct";
	})

var choicesBoxB = document.getElementById("theSecondChoice");

var choices2 = allQuestions[currentQuestion].choices[1];

var h2 = document.createElement('h2');
 
h2.innerHTML = choices2;

choicesBoxB.innerHTML = ""
	
choicesBoxB.appendChild(h2);

var answer6 = document.getElementById('theSecondChoice')
	answer6.addEventListener('click', function(){
	document.getElementById("theSecondChoice").innerHTML = "Incorrect";
})


var choicesBoxC = document.getElementById("theThirdChoice");

var choices3 = allQuestions[currentQuestion].choices[2];

var h2 = document.createElement('h2');

h2.innerHTML = choices3;

choicesBoxC.innerHTML = ""
	
choicesBoxC.appendChild(h2);

var answer7 = document.getElementById('theThirdChoice')
	answer7.addEventListener('click', function(){
	document.getElementById("theThirdChoice").innerHTML = "Inorrect";
})

var choicesBoxD = document.getElementById("theFourthChoice");

var choices4 = allQuestions[currentQuestion].choices[3];

var h2 = document.createElement('h2');

h2.innerHTML = choices4;

choicesBoxD.innerHTML = ""
	
choicesBoxD.appendChild(h2);

var answer8 = document.getElementById('theFourthChoice')
	answer8.addEventListener('click', function(){
	document.getElementById("theFourthChoice").innerHTML = "Incorrect";
})
	})


// WHAT COLOR FLOWER IS ORANGE BLOSSOM


var questionBox = document.getElementsByClassName("Question")[0];

var question3 = allQuestions[currentQuestion].question;

var h2 = document.createElement('h2');

h2.innerHTML = question2;

questionBox.innerHTML = ""	

questionBox.appendChild(h2);


var choicesBoxA = document.getElementById("theFirstChoice");

var choices1 = allQuestions[currentQuestion].choices[0];

var h2 = document.createElement('h2');

h2.innerHTML = choices1;

choicesBoxA.innerHTML = ""	

choicesBoxA.appendChild(h2);

var answer5 = document.getElementById('theFirstChoice')
	answer5.addEventListener('click', function(){
		document.getElementById("theFirstChoice").innerHTML = "Incorrect";
	})

var choicesBoxB = document.getElementById("theSecondChoice");

var choices2 = allQuestions[currentQuestion].choices[1];

var h2 = document.createElement('h2');
 
h2.innerHTML = choices2;

choicesBoxB.innerHTML = ""
	
choicesBoxB.appendChild(h2);

var answer6 = document.getElementById('theSecondChoice')
	answer6.addEventListener('click', function(){
	document.getElementById("theSecondChoice").innerHTML = "Correct";
})


var choicesBoxC = document.getElementById("theThirdChoice");

var choices3 = allQuestions[currentQuestion].choices[2];

var h2 = document.createElement('h2');

h2.innerHTML = choices3;

choicesBoxC.innerHTML = ""
	
choicesBoxC.appendChild(h2);

var answer7 = document.getElementById('theThirdChoice')
	answer7.addEventListener('click', function(){
	document.getElementById("theThirdChoice").innerHTML = "Inorrect";
})

var choicesBoxD = document.getElementById("theFourthChoice");

var choices4 = allQuestions[currentQuestion].choices[3];

var h2 = document.createElement('h2');

h2.innerHTML = choices4;

choicesBoxD.innerHTML = ""
	
choicesBoxD.appendChild(h2);

var answer8 = document.getElementById('theFourthChoice')
	answer8.addEventListener('click', function(){
	document.getElementById("theFourthChoice").innerHTML = "Incorrect";
})













	



