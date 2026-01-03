# README :)

I'm have created the Quiz Game app using HTML, CSS and Javascript by the watching the youtube tutorial.

**live link** -> **[click here]()**




### About this Quiz App
- It contains the three containers
  - **start screen**
    - It has the start quiz button
  - **quiz screen**
    - It consist of Question, answer options, question no. and score
  - **result screen**
    - It has score and restart quiz button


<hr>


### Additionally I have made updates on the code : 
- I have Just used the loop and Math.random function to shuffle the order of option(choice)
``` javascript
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
```


<hr>

### OUTCOME :
- Got a idea on how to 
  - Give proper names to the class and id
  - use **eventlistners and functions** effectively
- I have learnt 2 new thing
  - what is dataset?
    -  it is property of the button element that allow us to store the custom data
  - Here Array.from()
    - It is used to convert the NodeList returned by answerContainer.children into an array, this is just because NodeList is not an array and we need to use the forEach method