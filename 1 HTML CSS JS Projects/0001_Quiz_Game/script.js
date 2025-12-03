// DOM ELEMENTS

const startScreen = document.getElementById("start-screen");
const quizScreen = document.getElementById("quiz-screen");
const resultScreen = document.getElementById("result-screen");
const startButton = document.getElementById("start-btn");
const questionText = document.getElementById("question-text");
const answersContainer = document.getElementById("answers-container");
const currentQuestionSpan = document.getElementById("current-question");
const totalQuestionsSpan = document.getElementById("total-questions");
const scoreSpan = document.getElementById("score");
const finalScoreSpan = document.getElementById("final-score");
const maxScoreSpan = document.getElementById("max-score");
const resultMessage = document.getElementById("result-message");
const restartButton = document.getElementById("restart-btn");
const progressBar = document.getElementById("progress");




// Quiz questions
const quizQuestions = [
  {
    question: "What is the capital of France?",
    answers: [
      { text: "London", correct: false },
      { text: "Berlin", correct: false },
      { text: "Paris", correct: true },
      { text: "Madrid", correct: false },
    ],
  },
  {
    question: "Which planet is known as the Red Planet?",
    answers: [
      { text: "Venus", correct: false },
      { text: "Mars", correct: true },
      { text: "Jupiter", correct: false },
      { text: "Saturn", correct: false },
    ],
  },
  {
    question: "What is the largest ocean on Earth?",
    answers: [
      { text: "Atlantic Ocean", correct: false },
      { text: "Indian Ocean", correct: false },
      { text: "Arctic Ocean", correct: false },
      { text: "Pacific Ocean", correct: true },
    ],
  },
  {
    question: "Which of these is NOT a programming language?",
    answers: [
      { text: "Java", correct: false },
      { text: "Python", correct: false },
      { text: "Banana", correct: true },
      { text: "JavaScript", correct: false },
    ],
    
  },
  {
    question: "What is the chemical symbol for gold?",
    answers: [
      { text: "Go", correct: false },
      { text: "Gd", correct: false },
      { text: "Au", correct: true },
      { text: "Ag", correct: false },
    ],
  },
];

// QUIZ STATE VARIABLES

let currentQuestionIndex = 0
let score = 0
let answersDisabled = false

totalQuestionsSpan.textContent = quizQuestions.length
maxScoreSpan.textContent = quizQuestions.length

// Event Listners

startButton.addEventListener("click", startQuiz)
restartButton.addEventListener("click", restartQuiz)

function startQuiz(){
    console.log("start quiz")
    // reset vars
    score = 0
    currentQuestionIndex = 0
    scoreSpan.textContent = 0

    startScreen.classList.remove("active")
    quizScreen.classList.add("active")

    showQuestion()
}

function showQuestion(){
    // reset state
    answersDisabled = false
    const currentQuestion = quizQuestions[currentQuestionIndex]
    console.log(currentQuestion.question);
    
    

    currentQuestionSpan.textContent = currentQuestionIndex+1

    const progressBarPercent = ((currentQuestionIndex) / quizQuestions.length) * 100
    progressBar.style.width = progressBarPercent + "%"
    questionText.textContent = currentQuestion.question
    

    // todo: explain this in a second
    answersContainer.innerHTML = "";
    let arrNum = []
    let n = 4
    while(n>0){
        let randNum = Math.floor(Math.random()*4)
        if(!(arrNum.includes(randNum))){
            arrNum.push(randNum)
            n--;
        }
    }
    console.log(arrNum);
    let tempAnswers = []
    tempAnswers.push(currentQuestion.answers[arrNum[0]])
    tempAnswers.push(currentQuestion.answers[arrNum[1]])
    tempAnswers.push(currentQuestion.answers[arrNum[2]])
    tempAnswers.push(currentQuestion.answers[arrNum[3]])

    tempAnswers.forEach(answer =>{
        const button = document.createElement("button")
        button.textContent = answer.text
        button.classList.add("answer-btn")

        // what is dataset? it is property of the button element that allow us to store the custom data
        button.dataset.correct = answer.correct

        
        answersContainer.appendChild(button)
        button.addEventListener("click", selectAnswer)
    })
}

// whenever the function is called at the eventListner then by default the function will get argument which is "event"
function selectAnswer(event){
    // optimization check
    if(answersDisabled) return

    answersDisabled = true

    const selectedButton = event.target
    const isCorrect = selectedButton.dataset.correct === "true"


    // Here Array.from() is used to convert the NodeList returned by answerContainer.children into an array, this is just because NodeList is not an array and we need to use the forEach method
    Array.from(answersContainer.children).forEach(button =>{
        if(button.dataset.correct === "true"){
            button.classList.add("correct")
        } else if(button === selectedButton){
            button.classList.add("incorrect")
        } 
    });

    if(isCorrect){
    score++
    scoreSpan.textContent = score
}
    
        setTimeout(() => {
            currentQuestionIndex++
            console.log(currentQuestionIndex)
            // check if there are more questions or if the quiz is over
            if(currentQuestionIndex<quizQuestions.length){
                console.log("hello");
                showQuestion()
            } else{
                showResult()
            }
        }, 1000);
}

function showResult(){
    quizScreen.classList.remove("active")
    resultScreen.classList.add("active")

    finalScoreSpan.textContent = score
    const percentage = (score/quizQuestions.length) * 100
    if(percentage == 100){
        resultMessage.textContent = "Perfect you are a genius!"
    } else if(percentage >= 80){
        resultMessage.textContent = "Great job you know your stuff!"
    } else if(percentage >= 60){
        resultMessage.textContent = "Good effort Keep learning!"
    } else if(percentage >= 40){
        resultMessage.textContent = "Not bad, try again to improve!"
    } else{
        resultMessage.textContent = "Keep study you will get better!"
    } 
}

function restartQuiz(){
    console.log("restart quiz")
    resultScreen.classList.remove("active")
    quizScreen.classList.add("active")
    startQuiz()
}