let correctAnswersCount = 0;

class Question {
    constructor(question, answers) {
      this.question = question;
      this.answers = answers;
    }
  
    display = () => {
      questionText.textContent = this.question;
      this.answers.forEach((answer, index) => {
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


  
    checkAnswer = () => {
      const selectedAnswer = document.querySelector('input[name="answer"]:checked');
      console.log(`selected answer is ${selectedAnswer.value}`);
      if (!selectedAnswer) {
        questionText.textContent = "Please select an answer!!!!";
        return;
      }
  
      const correctAnswer = this.answers.find((answer) => answer.correct);
      console.log(`correct answer is ${correctAnswer.text.split(")", 1)}`);
  
      if (selectedAnswer.value == correctAnswer.text.split(")", 1)) {
        questionImage.style.display = "none";
        yesImage.style.display = "block";
        yesImage.style.paddingTop = "10%";
        questionText.style.top = "8%";
        questionText.textContent = `Well done...you got it right!!!`;

        // Increment the correct answers count
        correctAnswersCount++;
        
      } else {
        questionText.textContent = `Wrong Answer. Correct answer is ${correctAnswer.text}`;
        questionImage.style.display = "none";
        noImage.style.display = "block";
        questionText.style.top = "5%";
      }
    };
  }
  
  const questions = [
    new Question("1. What is JavaScript?", [
      {
        text: "a) JavaScript is a scripting language used to make the website interactive",
        correct: true,
      },
      {
        text: "b) JavaScript is an assembly language used to make the website interactive",
        correct: false,
      },
      {
        text: "c) JavaScript is a compiled language used to make the website interactive",
        correct: false,
      },
      { text: "d) None of the mentioned", correct: false },
    ]),
    new Question("2. Which of the following is correct about JavaScript?", [
      { text: "a) JavaScript is an Object-Based language", correct: true },
      { text: "b) JavaScript is Assembly-language", correct: false },
      { text: "c) JavaScript is an Object-Oriented language", correct: false },
      { text: "d) JavaScript is a High-level language", correct: false },
    ]),
    new Question("3. Among the given statements, which statement defines closures in JavaScript?", [
      {
        text: "a) JavaScript is a function that is enclosed with references to its inner function scope",
        correct: false,
      },
      {
        text: "b) JavaScript is a function that is enclosed with references to its lexical environment",
        correct: true,
      },
      {
        text: "c) JavaScript is a function that is enclosed with the object to its inner function scope",
        correct: false,
      },
      { text: "d) None of the mentioned", correct: false },
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
    new Question("5. Arrays in JavaScript are defined by which of the following statements?", [
      {
        text: "a) It is an ordered list of values",
        correct: true,
      },
      {
        text: "b) It is an ordered list of objects",
        correct: false,
      },
      {
        text: "c) It is an ordered list of string",
        correct: false,
      },
      {
        text: "d) It is an ordered list of functions",
        correct: false,
      },
    ]),
    new Question("6. Which of the following object is the main entry point to all client-side JavaScript features and APIs?", [
      {
        text: "a) Position",
        correct: false,
      },
      {
        text: "b) Window",
        correct: true,
      },
      {
        text: "c) Standard",
        correct: false,
      },
      {
        text: "d) Location",
        correct: false,
      },
    ]),
    new Question("7. Which of the following can be used to call a JavaScript Code Snippet?", [
      {
        text: "a) Function/Method",
        correct: true,
      },
      {
        text: "b) Preprocessor",
        correct: false,
      },
      {
        text: "c) Triggering Event",
        correct: false,
      },
      {
        text: "d) RMI",
        correct: false,
      },
    ]),
    new Question("8. Which of the following methods/operation does JavaScript use instead of == and !=?", [
      {
        text: "a) JavaScript uses equalto()",
        correct: false,
      },
      {
        text: "b) JavaScript uses equals() and notequals() instead",
        correct: false,
      },
      {
        text: "c) JavaScript uses bitwise checking",
        correct: false,
      },
      {
        text: "d) JavaScript uses === and !== instead",
        correct: true,
      },
    ]),
    new Question("9. Which of the following is the property that is triggered in response to JS errors?", [
      {
        text: "a) onclick",
        correct: false,
      },
      {
        text: "b) onerror",
        correct: true,
      },
      {
        text: "c) onmessage",
        correct: false,
      },
      {
        text: "d) onexception",
        correct: false,
      },
    ]),
    new Question("10. Which of the following is the property that is triggered in response to JS errors?", [
        {
          text: "a) onclick",
          correct: false,
        },
        {
          text: "b) onerror",
          correct: true,
        },
        {
          text: "c) onmessage",
          correct: false,
        },
        {
          text: "d) onexception",
          correct: false,
        },
      ]),
    
  ];
  
  
  let currentQuestionIndex = 0;
  
  const questionText = document.getElementById("question-text");
  const answerA = document.getElementById("answer-a");
  const answerB = document.getElementById("answer-b");
  const answerC = document.getElementById("answer-c");
  const answerD = document.getElementById("answer-d");
  const nextButton = document.getElementById("next-button");
  const yesImage = document.querySelector(".yes");
  const noImage = document.querySelector(".no");
  const questionImage = document.querySelector(".question");
  const checkbtn = document.querySelector("checkbtn");
  const counter = document.getElementById("counter")
  const modalClose = document.getElementById("modalClose");
modalClose.addEventListener("click", () => {
  closeModal();
});


  
  const displayQuestion = () => {
    const currentQuestion = questions[currentQuestionIndex];
    currentQuestion.display();
  };

const checkAnswer = () => {
    const selectedAnswer = document.querySelector('input[name="answer"]:checked');
    if (!selectedAnswer) {
      questionText.textContent = "Please select an answer!!!!";
      return;
    }
  
    const correctAnswer = questions[currentQuestionIndex].answers.find((answer) => answer.correct);
  
    if (selectedAnswer.value == correctAnswer.text.split(")", 1)) {
      questionImage.style.display = "none";
      yesImage.style.display = "block";
      yesImage.style.paddingTop = "10%";
      questionText.style.top = "8%";
      questionText.textContent = `Well done...you got it right!!!`;
      correctAnswersCount ++
      console.log(correctAnswersCount)
    } else {
      questionText.textContent = `Wrong Answer. Correct answer is ${correctAnswer.text}`;
      questionImage.style.display = "none";
      noImage.style.display = "block";
      questionText.style.top = "5%";
    }

    const displayCounter= () => {
        counter.textContent = correctAnswersCount;
      }
    
      displayCounter()
  
    // Show the "Next" button after checking the answer
    const nextButton = document.getElementById("next-button2");
    nextButton.style.display = "block";
  
    // Hide the "Check" button after checking the answer
    const checkButton = document.getElementById("next-button");
    checkButton.style.display = "none";
  };

  





  const showModal = (message, buttonText, buttonCallback) => {
    const modal = document.getElementById("myModal");
    const modalMessage = document.getElementById("modalMessage");
    const modalButton = document.getElementById("modalButton");
  
    modalMessage.textContent = message;
    modalButton.textContent = buttonText;
  
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
    // Hide the result images
    yesImage.style.display = "none";
    noImage.style.display = "none";
  
    // Display only the question-person image
    questionImage.style.display = "block";
    
    const nextButton = document.getElementById("next-button2");
    nextButton.style.display = "none";
  
    currentQuestionIndex++;
  
    if (currentQuestionIndex < questions.length) {
        displayQuestion();
      } else {
        if (correctAnswersCount < 5) {
          showModal("Please Retake Quiz", "Retake", () => {
            // Reload the page to retake the quiz
            location.reload();
          });
        } else {
          showModal(`You passed and got ${correctAnswersCount * 10}%`, "Close", () => {
            // Redirect to index.html
            window.location.href = "index.html";
          });
        }
      }
  };
  


  

  
  



  displayQuestion();
  