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
  
  const displayQuestion = () => {
    const currentQuestion = questions[currentQuestionIndex];
    currentQuestion.display();
  };
  
  const checkAnswer = () => {
    const currentQuestion = questions[currentQuestionIndex];
    currentQuestion.checkAnswer();
    checkbtn.style.display = "none";
  };


  const nextQuestion = () => {
    // Hide the result images
    yesImage.style.display = "none";
    noImage.style.display = "none";
  
    // Display only the question-person image
    questionImage.style.display = "block";
  
    currentQuestionIndex++;
  
    if (currentQuestionIndex < questions.length) {
      displayQuestion();
    } else {
      alert("Quiz completed!");
    }
  };
  
  
  
  

  
  displayQuestion();
  