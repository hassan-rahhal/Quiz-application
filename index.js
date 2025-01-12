// Define the questions and answers
//حدد الأسئلة والأجوبة
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

// Get the HTML elements
//احصل على عناصر HTML
const questionElement = document.querySelector("#question");
const optionElements = document.querySelectorAll(".option-container button");
const scoreElement = document.querySelector("#score");

let questionIndex = 0;
let score = 0;

// Set the initial question and options
//حدد السؤال المبدئي والخيارات
function setQuestion() {
  const currentQuestion = quizData[questionIndex];
  questionElement.innerHTML = currentQuestion.question;
  optionElements.forEach((optionElement, index) => {
    optionElement.innerHTML = currentQuestion.options[index];
  });
}

// Check the answer and update the score
// تحقق من الإجابة وقم بتحديث النتيجة
function checkAnswer(optionIndex) {
  const currentQuestion = quizData[questionIndex];
  if (optionIndex === currentQuestion.answer) {
    score++;
  }
  questionIndex++;

  if (questionIndex < quizData.length) {
    setQuestion();
  } else {
    showResults();
  }
}

// Show the quiz results
// إظهار نتائج الاختبار
function showResults() {
  questionElement.style.display = "none";
  optionElements.forEach((optionElement) => {
    optionElement.style.display = "none";
  });
  scoreElement.innerHTML = `You scored ${score} out of ${quizData.length}`;
  scoreElement.style.display = "block";
}

// Add event listeners to the option buttons
//أضف مستمعين للأحداث إلى أزرار الخيارات
optionElements.forEach((optionElement, index) => {
  optionElement.addEventListener("click", () => {
    checkAnswer(index);
  });
});

// Set the initial question
// تعيين السؤال الأولي
setQuestion();
