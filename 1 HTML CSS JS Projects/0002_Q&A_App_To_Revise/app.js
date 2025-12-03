
// QUESTION AND ANSWER - ARRAY OF OBJECTS 

const qa = [
  {
    question: "What is the difference between DELETE, TRUNCATE, and DROP?",
    answer: "DELETE removes rows with WHERE support next point TRUNCATE removes all rows and resets auto-increment next point DROP removes the entire table structure."
  },
  {
    question: "What is a primary key in MySQL?",
    answer: "A primary key uniquely identifies each row in a table and cannot contain NULL values."
  },
  {
    question: "What is the difference between WHERE and HAVING?",
    answer: "WHERE filters rows before grouping next point HAVING filters groups after the GROUP BY clause."
  },
  {
    question: "What is an index and why is it used?",
    answer: "An index speeds up data retrieval by creating quick lookup data structures at the cost of extra storage and slower write operations."
  },
  {
    question: "What is normalization?",
    answer: "Normalization is the process of organizing data to reduce redundancy and improve data integrity."
  },
  {
    question: "Explain ACID properties.",
    answer: "ACID stands for Atomicity, Consistency, Isolation, Durability — ensuring reliable and safe transactions."
  },
  {
    question: "What is the difference between INNER JOIN and LEFT JOIN?",
    answer: "INNER JOIN returns matching records from both tables next point LEFT JOIN returns all records from the left table and matching ones from the right."
  },
  {
    question: "What is a foreign key?",
    answer: "A foreign key is a field that links one table to another by referencing the primary key of the related table."
  },
  {
    question: "What is a stored procedure?",
    answer: "A stored procedure is a reusable SQL block stored on the server, used to perform operations and reduce repetitive queries."
  },
  {
    question: "What is the use of GROUP BY?",
    answer: "GROUP BY groups rows with the same values and is often used with aggregate functions like COUNT, SUM, and AVG."
  }
];

console.log(qa);


// TARGETING THE ELEMENTS
let scoreValue = document.querySelector("#scoreValue")
let outOfValue = document.querySelector("#outOfValue")
let start = document.querySelector("#start")
let reset = document.querySelector("#reset")
let skip = document.querySelector("#skip")
let show = document.querySelector("#show")
let next = document.querySelector("#next")
let question = document.querySelector(".question")
let answer = document.querySelector(".answer")

// VARIABLES

let score = 0
let outOf = 0
let num = 0
let flag = false
let showAns = true

// EVENT LISTNERS

start.addEventListener("click", ()=>{
    num = 1
    score = 0
    outOf = 0
    display()
})

next.addEventListener("click", ()=>{
    if(num>=1){
        num+=1
        flag = false
        score+=1
        outOf++
        checkForOutOfRange()
        display()
        displayAnswerNone()
        showAns = true
    }
})

skip.addEventListener("click", ()=>{
    num+=1
    outOf++
    flag = false
    checkForOutOfRange()
    display()
})

show.addEventListener("click", ()=>{
    flag = true
    display()
    if(showAns){
        displayAnswer()
    }
})

reset.addEventListener("click",resetFun)


// TIMING FUNCTION

let scoreTime = setInterval(()=>{
    scoreValue.innerHTML = `${score}`
    outOfValue.innerHTML = `${outOf}`
}, 100)

// FUNCTIONS

function display(){
    console.log(num);
    question.innerHTML = `<h1>${num}. ${qa[num-1].question}</h1>`
    console.log(qa[num-1]);
}

function displayAnswer(){
    showAns = false
    const ansPoints = qa[num-1].answer.split("next point")
    const ul = document.createElement("ul")
    answer.appendChild(ul)
    console.log(ansPoints);
    ansPoints.forEach((e)=>{
        const li = document.createElement("li")
        ul.appendChild(li)
        const p = document.createElement("p")
        li.appendChild(p)
        p.innerText = e
        console.log(p);
        console.log(answer);
    })
}

function displayAnswerNone(){
    answer.innerHTML = ``
}

function resetFun(){
    num = 0
    score = 0
    outOf = 0
    question.innerHTML = ``
    answer.innerHTML = ``
}

function checkForOutOfRange() {
    if(num==qa.length+1){
        alert(`Your score is ${score} out of ${outOf}.\n\nKeep playing to test Your knowledge`)
        resetFun()
    }
}