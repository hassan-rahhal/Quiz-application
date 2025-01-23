const quizData = [
  {
    question: "What is the capital of France?",
    options: ["Paris", "London", "Berlin", "Madrid"],
    answer: 0,
  },
  {
    question: "What is the largest country in the world?",
    options: ["Canada", "China", "Russia", "USA"],
    answer: 2,
  },
  {
    question: "What is the currency of Japan?",
    options: ["Yuan", "Yen", "Dollar", "Euro"],
    answer: 1,
  },
  {
    question: "What is the highest mountain in the world?",
    options: ["K2", "Mount Everest", "Makalu", "Dhaulagiri"],
    answer: 1,
  },
  {
    question: "What is the largest ocean in the world?",
    options: [
      "Atlantic Ocean",
      "Indian Ocean",
      "Arctic Ocean",
      "Pacific Ocean",
    ],
    answer: 3,
  },
];

const questionElement = document.querySelector("#question");
const optionElements = document.querySelectorAll(".option-container button");
const scoreElement = document.querySelector("#score");
const timerElement = document.querySelector("#timer");
const feedbackElement = document.querySelector("#feedback");

let questionIndex = 0;
let score = 0;
let timer;
let timeLeft = 15;

function setQuestion() {
  const currentQuestion = quizData[questionIndex];
  questionElement.innerHTML = currentQuestion.question;
  optionElements.forEach((optionElement, index) => {
    optionElement.innerHTML = currentQuestion.options[index];
  });
  feedbackElement.style.display = "none"; // Hide feedback for next question
  startTimer();
}

function startTimer() {
  timeLeft = 15;
  timerElement.innerHTML = `Time left: ${timeLeft}s`;
  timer = setInterval(() => {
    timeLeft--;
    timerElement.innerHTML = `Time left: ${timeLeft}s`;
    if (timeLeft <= 0) {
      clearInterval(timer);
      checkAnswer(-1); // If time runs out, move to the next question
    }
  }, 1000);
}

function checkAnswer(optionIndex) {
  const currentQuestion = quizData[questionIndex];
  if (optionIndex === currentQuestion.answer) {
    score++;
    feedbackElement.innerHTML = "Correct!";
  } else {
    feedbackElement.innerHTML = "Incorrect!";
  }
  feedbackElement.style.display = "block";
  clearInterval(timer);

  questionIndex++;

  if (questionIndex < quizData.length) {
    setTimeout(() => {
      setQuestion();
    }, 1000); // Wait for feedback to show before moving to the next question
  } else {
    setTimeout(showResults, 1000); // Show results after the last question
  }
}

function showResults() {
  questionElement.style.display = "none";
  optionElements.forEach((optionElement) => {
    optionElement.style.display = "none";
  });
  timerElement.style.display = "none";
  feedbackElement.style.display = "none";
  scoreElement.innerHTML = `You scored ${score} out of ${quizData.length}`;
  scoreElement.style.display = "block";
}

setQuestion(); // Start quiz automatically when page loads

optionElements.forEach((optionElement, index) => {
  optionElement.addEventListener("click", () => {
    checkAnswer(index);
  });
});
