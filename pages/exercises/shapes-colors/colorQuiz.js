const start = document.getElementById("start");
const quizScreen = document.getElementById("quizScreen");
const quizContainer = document.getElementById('quiz-container');
const answersList = document.getElementById('answers');
const next = document.getElementById('nextButton');

const quizData = {
    questions: [
        {
            question: "Druk op de blauwe auto?",
            answers: [
                {option: "/pages/assets/auto-1/blauw-auto.png", isCorrect: true},
                {option: "/pages/assets/auto-1/bruin-auto.png", isCorrect: false},
                {option: "/pages/assets/auto-1/geel-auto.png", isCorrect: false},
            ]
        },
        {
            question: "Druk op de gele auto?",
            answers: [
                {option: "/pages/assets/auto-1/rood-auto.png", isCorrect: false},
                {option: "/pages/assets/auto-1/oranje-auto.png", isCorrect: false},
                {option: "/pages/assets/auto-1/geel-auto.png", isCorrect: true},
            ]
        },
        {
            question: "Druk op de paarse auto?",
            answers: [
                {option: "/pages/assets/auto-1/oranje-auto.png", isCorrect: false},
                {option: "/pages/assets/auto-1/paars-auto.png", isCorrect: true},
                {option: "/pages/assets/auto-1/zwart-auto.png", isCorrect: false},
            ]
        },
        {
            question: "Druk op de groene auto?",
            answers: [
                {option: "/pages/assets/auto-1/groen-auto.png", isCorrect: true},
                {option: "/pages/assets/auto-1/grijs-auto.png", isCorrect: false},
                {option: "/pages/assets/auto-1/rood-auto.png", isCorrect: false},
            ]
        },
        {
            question: "Druk op de zwarte auto?",
            answers: [
                {option: "/pages/assets/auto-1/grijs-auto.png", isCorrect: false},
                {option: "/pages/assets/auto-1/zwart-auto.png", isCorrect: true},
                {option: "/pages/assets/auto-1/paars-auto.png", isCorrect: false},
            ]
        },
        {
            question: "Druk op de rode auto?",
            answers: [
                {option: "/pages/assets/auto-1/groen-auto.png", isCorrect: false},
                {option: "/pages/assets/auto-1/blauw-auto.png", isCorrect: false},
                {option: "/pages/assets/auto-1/rood-auto.png", isCorrect: true},
            ]
        },
        {
            question: "Druk op de oranje auto?",
            answers: [
                {option: "/pages/assets/auto-1/oranje-auto.png", isCorrect: true},
                {option: "/pages/assets/auto-1/geel-auto.png", isCorrect: false},
                {option: "/pages/assets/auto-1/bruin-auto.png", isCorrect: false},
            ]
        },
        {
            question: "Druk op de bruine auto?",
            answers: [
                {option: "/pages/assets/auto-1/rood-auto.png", isCorrect: false},
                {option: "/pages/assets/auto-1/paars-auto.png", isCorrect: false},
                {option: "/pages/assets/auto-1/bruin-auto.png", isCorrect: true},
            ]
        },
        {
            question: "Druk op de witte auto?",
            answers: [
                {option: "/pages/assets/auto-1/grijs-auto.png", isCorrect: false},
                {option: "/pages/assets/auto-1/wit-auto.png", isCorrect: true},
                {option: "/pages/assets/auto-1/zwart-auto.png", isCorrect: false},
            ]
        }
    ]
}


start.addEventListener('click', () => {
    start.remove();
    quizContainer.style.display = "grid";
    displayQuestions();
});

let currentQuestionIndex = 0;

function displayQuestions() {
    const currentQuestion = quizData.questions[currentQuestionIndex];
    const question = document.createElement('p')
    question.id = 'question';
    question.innerHTML = currentQuestion.question;
    quizContainer.appendChild(question);
    quizContainer.appendChild(answersList);
    answersList.innerHTML = ''; //clear precious answers

    currentQuestion.answers.forEach((answer, index) => {
        const btn = document.createElement('button');
        const img = document.createElement('img');
        btn.appendChild(img);
        img.classList.add('option')
        img.src = answer.option;
        img.alt = "answer option";
        img.onclick = () => checkAnswer(answer.isCorrect, answersList);
        answersList.appendChild(img);
    });
};

function checkAnswer(isCorrect, answersList) {
    answersList.innerHTML = '';
    if (isCorrect){
        const correct = document.createElement('i');
        correct.className = 'fa-solid fa-check';
        correct.id = 'correct';
        correct.style.display = 'block';
        quizContainer.appendChild(correct);
        quitOrAgain();
    } else {
        const incorrect = document.createElement('i');
        incorrect.className = "fa-solid fa-xmark";
        incorrect.id = 'incorrect';
        incorrect.style.display = 'block';
        quizContainer.appendChild(incorrect); 
        quitOrAgain();
    }
};

function nextQuestion() {
    currentQuestionIndex++; 
    quizContainer.innerHTML = '';
    if (currentQuestionIndex < quizData.questions.length) {
      displayQuestions();
    } else {
      alert('Quiz finished!');
    }
  }

function quitOrAgain() {

    if ((currentQuestionIndex + 1) < quizData.questions.length) {
        next.style.display = 'block';
        quizContainer.appendChild(next);
    } else {
        const quit = document.createElement('a');
        const again = document.createElement('a');
        const fontAwe = document.createElement('i');
        fontAwe.className = 'fa-solid fa-rotate-right';
        quit.innerText = 'quit';
        quit.href = '/pages/exercises/exercises.html';
        quizContainer.appendChild(quit);
        again.innerHTML = 'Opnieuw';
        again.appendChild(fontAwe);
        again.href = '/pages/exercises/shapes-colors/pickingColorsQuiz.html';
        quizContainer.appendChild(again);
    };
};