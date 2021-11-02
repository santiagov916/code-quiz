const quizQ = [
    {
        question: "Commmonly used database types DO NOT include:",
        a: "strings",
        b: "booleans",
        c: "alerts",
        d: "numbers",
        correctAnswer: 'c',
    },
    {
        question: "the condition of an if/else statement is enclosed with ________.",
        a: "quotes",
        b: "curly brackets",
        c: "parenthesis",
        d: "square brackets",
        correctAnswer: 'b',
    },
    {
        question: "Arrays in javascript can be used to store _______.",
        a: "numbers and strings",
        b: "other arrays",
        c: "booleans",
        d: "all of the above",
        correctAnswer: 'd',
    },
    {
        question: "What year was Javascript finally opene to the public?",
        a: "1995",
        b: "1998",
        c: "1994",
        d: "2001",
        correctAnswer: 'a',
    },
    {
        question: "HTML is an acronym for:",
        a: "How To Make Language",
        b: "Hyper Text Mastery Language",
        c: "HyperText Markup Language",
        d: "Hyper Tone Markup Language",
        correctAnswer: 'c',
    },
    {
        question: "What does CSS stand for?",
        a: "Cascading Style Series",
        b: "Central Series of Sheets",
        c: "Creative Stylistic Strategies",
        d: "Cascading Style Sheets",
        correctAnswer: 'd',
    }
];

const start = document.getElementsByClassName('start')
const answerChoice = document.querySelectorAll('#answer')
const quizFront = document.getElementById('quiz-front')
const questionBody = document.getElementById('quiz-frame')
const questionText = document.getElementsByClassName("question")
const aText = document.getElementsByClassName('a-text')
const bText = document.getElementsByClassName('b-text')
const cText = document.getElementsByClassName('c-text')
const dText = document.getElementsByClassName('d-text')
const submit = document.getElementById('final-answer')
const clock = document.getElementsByClassName('clock')
const leaderBoard = document.getElementsByClassName('high-score')
const highScore = document.getElementsByClassName('card')
let currentQuiz = 0
let score = 0
const currentQuizSrc = quizQ[currentQuiz]
var currentTime = 60;

 // code for the timer
function timer() {
    $(clock).removeClass("show");
    $(clock).addClass("text-large");
    $('.stop-watch').removeClass("show");
    $(clock).text(currentTime);
    var minus = parseInt(currentTime - 1);
     
    var countDown = setInterval(function() {
        $(clock).text(minus);
        if(minus === 0) {
        clearInterval(countDown);
        } else {
            minus--
        }}, 1000);
}
// loops quiz
function quizRun() {
        
    $(questionText).html(currentQuizSrc.question);
    $(aText).html(currentQuizSrc.a);
    $(bText).html(currentQuizSrc.b);
    $(cText).html(currentQuizSrc.c);
    $(dText).html(currentQuizSrc.d);

}
// code for submit button
function finalAnswer() {
            
        currentQuiz++;
        quizRun();
};
//function loadLeaderBoard
function loadLeaderBoard() {
    console.log("yes")
    $(highScore).removeClass("show");
    $(quizFront).addClass("show");
    $(questionBody).addClass("show");
};
// display quiz
function startQuiz() {

     $(quizFront).addClass("show");
     $(questionBody).removeClass("show");
     
     // code for the timer
    timer();
 
     // code for the quiz question and array 
     quizRun()
 
    }
// quiz performance
// $(start).on('click', startQuiz());
// $(leaderBoard).on('click', loadLeaderBoard());
    // if($(leaderBoard).on('click', loadLeaderBoard())) {
    //     loadLeaderBoard();
    // }} if ($(start).on('click', startQuiz())) {
    //     startQuiz();
    // };
    
    
    //     $(submit).on('click', finalAnswer());
//  quizLoop();