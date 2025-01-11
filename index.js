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

const question = document.getElementById("question");
const option1 = document.getElementById("option1");
const option2 = document.getElementById("option2");
const option3 = document.getElementById("option3");
const option4 = document.getElementById("option4");
const questioncount = document.getElementById("question-counter");

let currentQuestionIndex = 0;
let score = 0;

function displayQuestion(index) {
  const currentQuestion = quizData[index];
  question.innerHTML = quizData[index].question;
  option1.innerHTML = quizData[index].options[0];
  option2.innerHTML = quizData[index].options[1];
  option3.innerHTML = quizData[index].options[2];
  option4.innerHTML = quizData[index].options[3];
  questioncount.innerHTML = `Question ${index + 1} of ${quizData.length}`;
}

function checkAnswer(answerIndex) {
  if (answerIndex === quizData[currentQuestionIndex].answer) {
    score++;
  }
  currentQuestionIndex++;
  displayQuestion(currentQuestionIndex);
  if (currentQuestionIndex < quizData.length) {
    displayQuestion(currentQuestionIndex);
  } else {
    alert(`Game Over! Your final score is ${score}/${quizData.length}`);
  }
}

displayQuestion(currentQuestionIndex);
