// global variables
var questions; // objects containing the quiz questions
var count, score, scorePercentage, answer; // tracking variables
var correctAnswer, prevFlag; // flags
var choices, question, resultsPara, choicesPara; // elements being updated
var resetButton, prevButton; // buttons
var progress, progressPercentage; // progress bar
var scoreupdate;

questions = [
    {
        number: 0,
        question: '1.Who has won the most champions league?',
        choices: ['Leo Messi', 'Cristiano Ronaldo', 'Neymar', 'Kaka'],
        answer: 1
    },
    {
        number: 1,
        question: '2.Where club does Leo Messi play for?',
        choices: ['Barcelona', 'Juventus', 'Real Madrid', 'Ac Milan'],
        answer: 0
    },
    {
        number: 2,
        question: '3.Who is the winner of Champions league 2020?',
        choices: ['Real Madrid', 'Juventus', 'Bayern Munich', 'PSG'],
        answer: 2
    },
    {
        number: 3,
        question: '4.Who has won the most number of world cups?',
        choices: ['Ronaldo Nazario', 'Ronaldinho', 'Maradona', 'Pele'],
        answer: 3
    },
    {
        number: 4,
        question: '5.Which Club won the most number of Champions League?',
        choices: ['Barcelona', 'Real Madrid', 'AC Milan', 'Liverpool'],
        answer: 1
    },
    {
        number: 5,
        question: "6.Who has won the most ballon d'ors?",
        choices: ['Leo Messi','Cristiano Ronaldo','Neymar','Modric'],
        answer: 0
    },
    {
        number: 6,
        question: '7.Which country has won the most FIFA world cup?',
        choices: ['Argentina', 'France', 'Brazil', 'Italy'],
        answer: 2
    },
    {
        number: 7,
        question: '8.Who is the club president of Real Madrid?',
        choices: ['Perez', 'Bartemou', 'Agnelli', 'Ivanovich'],
        answer: 0
    },
    {
        number: 8,
        question: '9.Who is the all time leading goal scorer?',
        choices: ['Cristiano Ronaldo', 'Leo Messi', 'Pele', 'Maradona'],
        answer: 0
    },
    {
        number: 9,
        question: '10.Which Eglish club has won the most league titles?',
        choices: ['Liverpool', 'Manchester City', 'Manchester United', 'Chelsea'],
        answer: 2
    },
  
    
];



// set tracking variables
count = 0;
score = 0;
correctAnswer = false;
prevFlag = false;



// grab html elements
choices = document.querySelectorAll('.choices');
question = document.getElementById('questions');
resultsPara = document.getElementsByTagName('p')[0];
choicesPara = document.getElementsByTagName('p')[1];

resetButton = document.getElementsByClassName('reset')[0];
prevButton = document.getElementsByClassName('prev')[0];
progress = document.getElementsByClassName('progress-bar')[0];
scoreupdate=document.getElementById('score-update')



// add the event listeners
window.onload = renderQuestion();

prevButton.addEventListener('click', prevQuestion);
resetButton.addEventListener('click', resetQuiz);
choices.forEach(function(choice) {
    choice.addEventListener('click', scoring);
});



// functions used
function scoring() {
    // grab the answer of the current question
    answer = questions[count].answer;
    // prevButton is visible when a choice is selected
    prevFlag = true;
    
    // THIS is the span.choice that the user clicked
    if (this.innerText === questions[count].choices[answer]) {
        // correctAnswer waves for prevButton use
        correctAnswer = true;
        score++;
    } else {
        correctAnswer = false;
    }
    
    // then render next question
    nextQuestion();
}



function nextQuestion() {
    // count goes up
    count++;
    
    if (count > 10) {
        count = 10;
    } else if (count !== 10) {
        // numbers between 0 and 20 have questions that can be rendered
        renderQuestion();
    } else if (count === 10) {
        // quiz is over when count reaches 20
        renderCompletion();
    }
}



// the prevButton will only be available to go back one question
function prevQuestion() {
    // when the previous question renders, remove the prevButton
    prevFlag = false;
    
    // if the user originally clicked the correctAnswer, remove score
    if (correctAnswer) {
        correctAnswer = false;
        score--;
    }
    
    // then go back and render the old question
    count--;
    renderQuestion();
}




function renderQuestion() {
    
    // prevButton is hidden on the first page
    // and if the user attempts to go back more than one question
    if (!prevFlag) {
        prevButton.classList.add('hide');
    } else if (prevButton.classList.contains('hide')) {
        prevButton.classList.remove('hide');
    }
    
    // update question div with current question
    question.innerText = questions[count].question;
    
    // update each choice with the choices available in current question
    choices.forEach(function(choice, i) {
        choice.innerText = questions[count].choices[i];
    });
    
    updateProgress();
}

function renderCompletion() {
    updateProgress();
    scorePercentage = Math.round(score/10 * 100) + '%';
    
    // update with a thank you note and the user's percentage
    question.innerText = 'Thank you for Completing the Quiz!';
    resultsPara.innerText = 'Your score is: ' + scorePercentage;
    console.log(scorePercentage);
    scorePercentage= Math.round(score/10 * 100)
    if(scorePercentage==100){
        question.innerText="You are a Pro!"
    }
    else if(scorePercentage<100 && scorePercentage>=70){
        question.innerText="You are smart!"
    }
    else if(scorePercentage<=50){
        question.innerText="You need to try agin!"
    }
    
    // reset avail, prevButton and choicesPara are removed
    choicesPara.classList.add('hide');
    prevButton.classList.add('hide');
    resetButton.classList.remove('hide');
}



function updateProgress() {
    // progress bar will be updated as count goes up
    progressPercentage = Math.round((count/10) * 100);
    // progress.style.width = progressPercentage + '%';
    scoreupdate.innerText=score+'0 %'
    scoreupdate.classList.add('score')
}


function resetQuiz() {
    // reset tracking variables
    count = 0;
    score = 0;
    correctAnswer = false;
    prevFlag = false;
    
    // resultsPara is hidden
    resultsPara.innerText = '';
    
    // choicesPara displays while resetButton is hidden
    choicesPara.classList.remove('hide');
    resetButton.classList.add('hide');
    
    renderQuestion();
}