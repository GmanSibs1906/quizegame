// Define your questions and answers
const questions = [
  {
    question: "1. What is JavaScript?",
    answers: [
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
    ],
  },
  {
    question: "2. Which of the following is correct about JavaScript?",
    answers: [
      { text: "a) JavaScript is an Object-Based language", correct: true },
      { text: "b) JavaScript is Assembly-language", correct: false },
      { text: "c) JavaScript is an Object-Oriented language", correct: false },
      { text: "d) JavaScript is a High-level language", correct: false },
    ],
  },
  {
    question:
      "3. Among the given statements, which statement defines closures in JavaScript?",
    answers: [
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
    ],
  },
];

let currentQuestionIndex = 0;

// Get DOM elements
const questionText = document.getElementById("question-text");
const answerBox = document.getElementById("answer-box");
const answerA = document.getElementById("answer-a");
const answerB = document.getElementById("answer-b");
const answerC = document.getElementById("answer-c");
const answerD = document.getElementById("answer-d");
const nextButton = document.getElementById("next-button");
const yesImage = document.querySelector(".yes");
const noImage = document.querySelector(".no");
const wrongImage = document.querySelector(".wrong");
const questionImage = document.querySelector(".question-person");

// Function to display the current question
function displayQuestion() {
  const currentQuestion = questions[currentQuestionIndex];
  questionText.textContent = currentQuestion.question;
  answerA.textContent = currentQuestion.answers[0].text;
  answerB.textContent = currentQuestion.answers[1].text;
  answerC.textContent = currentQuestion.answers[2].text;
  answerD.textContent = currentQuestion.answers[3].text;
}

// Function to check the selected answer
function checkAnswer() {
  const selectedAnswer = document.querySelector('input[name="answer"]:checked');
  if (!selectedAnswer) {
    questionText.textContent = "Please select an answer!!!!";
    return;
  }

  const currentQuestion = questions[currentQuestionIndex];
  const correctAnswer = currentQuestion.answers.find(
    (answer) => answer.correct
  );

  if (selectedAnswer.value === correctAnswer.correct.toString()) {
    questionImage.style.display = "none";
    yesImage.style.display = "block";
  } else {
    questionText.textContent = `Wrong Answer. Correct answer is ${correctAnswer.text}`;
    // Change the image source to a "wrong" image
    questionImage.style.display = "none";
    noImage.style.display = "block";
  }
}

function nextQuestion() {
  // Check the selected answer

  // Reset answer images
  yesImage.style.display = "none";
  noImage.style.display = "none";
  questionImage.style.display = "block";

  // Move to the next question
  currentQuestionIndex++;

  if (currentQuestionIndex < questions.length) {
    displayQuestion();
  } else {
    alert("Quiz completed!"); // You can add your logic for what to do when the quiz is completed.
    // Optionally, you can reset the quiz by setting currentQuestionIndex back to 0.
    // currentQuestionIndex = 0;
  }
}

// Initial display
displayQuestion();
