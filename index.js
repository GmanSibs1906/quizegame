////////// define counter //////////
let correctAnswersCount = 0;


////////// DOM elements ////////
  const questionText = document.getElementById("question-text");
  const answerA = document.getElementById("answer-a");
  const answerB = document.getElementById("answer-b");
  const answerC = document.getElementById("answer-c");
  const answerD = document.getElementById("answer-d");
  const nextButton = document.getElementById("checkbtn");
  const yesImage = document.querySelector(".yes");
  const noImage = document.querySelector(".no");
  const questionImage = document.querySelector(".question");
  const checkbtn = document.querySelector("checkbtn");
  const counter = document.getElementById("counter")
  const modalClose = document.getElementById("modalClose");
  modalClose.addEventListener("click", () => {
    closeModal();
  });


////////// handle questions and answers //////////
class Question {
    constructor(question, answers) {
      this.question = question;
      this.answers = answers;
    }
  
    display = () => {
      // display question
      questionText.textContent = this.question;
      // display answers
      this.answers.forEach((answer, index) => {
        // DOM elements for answers
        const answerElement1 = document.getElementById(`answer-a`);
        const answerElement2 = document.getElementById(`answer-b`);
        const answerElement3 = document.getElementById(`answer-c`);
        const answerElement4 = document.getElementById(`answer-d`);
        if (index == 0) {
            answerElement1.textContent = answer.text;
        } else if (index == 1 ){
            answerElement2.textContent = answer.text;
        } else if (index == 2 ){
            answerElement3.textContent = answer.text;
        }
        else {
            answerElement4.textContent = answer.text;
        }
        });
        };
  }
  

  ////////// Array for Questions and answers //////////
  const questions = [
    new Question("1. Which of the below returns false?", [
      {
        text: "a) Boolean(0)",
        correct: true,
      },
      {
        text: "b) Boolean(1)",
        correct: false,
      },
      {
        text: "c) Boolean('false')",
        correct: false,
      },
      { text: "d) Boolean([])", correct: false },
    ]),
    new Question("2. What do we call values passed into a function?", [
      { text: "a) Parameters;", correct: true },
      { text: "b) Arguments;", correct: false },
      { text: "c) Variables;", correct: false },
      { text: "d) Functions", correct: false },
    ]),
    new Question("3. Which is NOT a basic data type in JavaScript below?", [
      {
        text: "a) Object",
        correct: false,
      },
      {
        text: "b) Array",
        correct: true,
      },
      {
        text: "c) Boolean",
        correct: false,
      },
      { text: "d) Null", correct: false },
    ]),
    // New questions start here
    new Question("4. Which of the following is not JavaScript data types?", [
      {
        text: "a) Null type",
        correct: false,
      },
      {
        text: "b) Undefined type",
        correct: false,
      },
      {
        text: "c) Number type",
        correct: false,
      },
      { text: "d) All of the mentioned", correct: true },
    ]),
    new Question("5. What is an Array?", [
      {
        text: "a)  A sequence of values",
        correct: true,
      },
      {
        text: "b) A single value",
        correct: false,
      },
      {
        text: "c) A function",
        correct: false,
      },
      {
        text: "d) An object",
        correct: false,
      },
    ]),
    new Question("6. What does the splice() method do?", [
      {
        text: "a) Reverses the order of elements in an array",
        correct: false,
      },
      {
        text: "b) Adds or removes elements from an array",
        correct: true,
      },
      {
        text: "c) Joins two or more arrays",
        correct: false,
      },
      {
        text: "d) Splits a string into an array",
        correct: false,
      },
    ]),
    new Question("7. What is the purpose of the break statement in a loop?", [
      {
        text: "a) To immediately exit the loop",
        correct: true,
      },
      {
        text: "b) To skip the current iteration of the loop",
        correct: false,
      },
      {
        text: "c) To pause the loop for a specified duration",
        correct: false,
      },
      {
        text: "d) To continue the loop from the beginning",
        correct: false,
      },
    ]),
    new Question("8. What does the map() method do?", [
      {
        text: "a) Adds elements to an array",
        correct: false,
      },
      {
        text: "b) Removes elements from an array",
        correct: false,
      },
      {
        text: "c) Filters elements from an array based on a condition",
        correct: false,
      },
      {
        text: "d) Creates new array by calling a function for every array element",
        correct: true,
      },
    ]),
    new Question("9. What does the reduce() method do? ", [
      {
        text: "a) Reduces an array to a single value",
        correct: false,
      },
      {
        text: "b) Filters elements from an array based on a condition",
        correct: true,
      },
      {
        text: "c) Reverses the order of elements in an array",
        correct: false,
      },
      {
        text: "d) None of the above",
        correct: false,
      },
    ]),
    new Question("10. What is a nested array?", [
        {
          text: "a) An array that can only store numbers",
          correct: false,
        },
        {
          text: "b)  An array that contains another array as an element",
          correct: true,
        },
        {
          text: "c)  An array that can only store strings",
          correct: false,
        },
        {
          text: "d) An array with a single element",
          correct: false,
        },
      ]),
    
  ];
  
  
  
  ////////// display current question ///////////
  let currentQuestionIndex = 0;
  const displayQuestion = () => {
    const currentQuestion = questions[currentQuestionIndex];
    currentQuestion.display();
  };

  ////////// Check answers //////////
const checkAnswer = () => {
    // check for selected answer
    const selectedAnswer = document.querySelector('input[name="answer"]:checked');
    if (!selectedAnswer) {
      questionText.textContent = "Please select an answer!!!!";
      return;
    }
  
    // correct answer
    const correctAnswer = questions[currentQuestionIndex].answers.find((answer) => answer.correct);
  
    // if correct answer display corresponding image and text
    if (selectedAnswer.value == correctAnswer.text.split(")", 1)) {
      questionImage.style.display = "none";
      yesImage.style.display = "block";
      yesImage.style.paddingTop = "10%";
      questionText.style.top = "8%";
      questionText.textContent = `Well done...you got it right!!!`;
      // increment count
      correctAnswersCount ++
      console.log(correctAnswersCount)
      // if wrong answer display corresponding image and correct answer
    } else {
      questionText.textContent = `Wrong Answer. Correct answer is ${correctAnswer.text}`;
      questionImage.style.display = "none";
      noImage.style.display = "block";
      questionText.style.top = "5%";
    }

    // display counter / score
    const displayCounter= () => {
        counter.textContent = correctAnswersCount;
      }
    
      displayCounter()
  
    // show the "Next" button after checking the answer
    const nextButton = document.getElementById("next-button2");
    nextButton.style.display = "block";
  
    // hide the "Check" button after checking the answer
    const checkButton = document.getElementById("checkbtn");
    checkButton.style.display = "none";
  };

  
// pop up modal to display final score and message
  const showModal = (message, buttonText, buttonCallback) => {
    // modal DOM elements
    const modal = document.getElementById("myModal");
    const modalMessage = document.getElementById("modalMessage");
    const modalButton = document.getElementById("modalButton");
    const passImage = document.getElementById("passImage")
    const failImage = document.getElementById("failImage")
  
    // display message
    modalMessage.textContent = message;
    // button to be displayed "Retake" or "Close"
    modalButton.textContent = buttonText;
  
    // close modal x
    modalButton.onclick = () => {
      modal.style.display = "none";
      buttonCallback();
    };
  
    modal.style.display = "block";
  };
  
  const closeModal = () => {
    const modal = document.getElementById("myModal");
    modal.style.display = "none";
  };
  
  const nextQuestion = () => {
     // show the "Check" button after clicking next
     const checkButton = document.getElementById("checkbtn");
     checkButton.style.display = "block";

    // hide the result images
    yesImage.style.display = "none";
    noImage.style.display = "none";
  
    // display question image
    questionImage.style.display = "block";
    
    // next button DOM element - set to hidden by default
    const nextButton = document.getElementById("next-button2");
    nextButton.style.display = "none";
  
    currentQuestionIndex++;
  
    // if next clicked and there are more questions display them
    if (currentQuestionIndex < questions.length) {
        displayQuestion();
      } else {
        // if questions are finished and user got less than 5/10
        // display score, hide pass image and prompt user to retake quiz
        if (correctAnswersCount < 5) {
            passImage.style.display = "none";
          showModal(`You got ${correctAnswersCount * 10}%, Please Retake Quiz`, "Retake", () => {
            
            // Reload the page to retake the quiz
            location.reload();
          });
          // if user passed display hide fail image and display score
        } else {
            failImage.style.display = "none";
          showModal(`You passed and got ${correctAnswersCount * 10}%`, "Close", () => {
            
            // on click of close redirect to index.html
            window.location.href = "index.html";
          });
        }
      }
  };
  


  

  
  



  displayQuestion();
  