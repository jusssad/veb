let currentQuestionIndex = 0;
let userAnswers = new Array(quizData.length).fill(null);

const quizContainer = document.getElementById('quiz-container');
const questionEl = document.getElementById('question');
const answersEl = document.getElementById('answers');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');
const startBtn = document.getElementById('startBtn');
const startContainer = document.getElementById('start-container');
const resultEl = document.getElementById('result');

startBtn.addEventListener('click', () => {
  startContainer.style.display = 'none';
  quizContainer.style.display = 'block';

  // При старте загружаем прогресс из localStorage
  loadProgress();
  loadQuestion();
});

prevBtn.addEventListener('click', () => {
  if (currentQuestionIndex > 0) {
    currentQuestionIndex--;
    saveProgress();
    loadQuestion();
  }
});

nextBtn.addEventListener('click', () => {
  if (userAnswers[currentQuestionIndex] === null) return;

  if (currentQuestionIndex < quizData.length - 1) {
    currentQuestionIndex++;
    saveProgress();
    loadQuestion();
  } else {
    showResult();
    clearProgress(); // очистить прогресс после окончания
  }
});

function loadQuestion() {
  resultEl.textContent = '';
  const q = quizData[currentQuestionIndex];
  questionEl.textContent = `Вопрос ${currentQuestionIndex + 1}: ${q.question}`;
  answersEl.innerHTML = '';

  q.answers.forEach((answer, i) => {
    const btn = document.createElement('button');
    btn.className = 'answer-btn';
    btn.textContent = answer;

    btn.addEventListener('click', () => {
      userAnswers[currentQuestionIndex] = i;
      updateSelection();
      nextBtn.disabled = false;
      saveProgress(); // сохраняем сразу после выбора ответа
    });

    answersEl.appendChild(btn);
  });

  updateSelection();

  prevBtn.disabled = currentQuestionIndex === 0;
  nextBtn.textContent = currentQuestionIndex === quizData.length - 1 ? 'Завершить' : 'Далее';
  nextBtn.disabled = userAnswers[currentQuestionIndex] === null;
}

function updateSelection() {
  const buttons = answersEl.querySelectorAll('.answer-btn');
  buttons.forEach((btn, i) => {
    btn.classList.toggle('selected', i === userAnswers[currentQuestionIndex]);
  });
}

function showResult() {
  quizContainer.style.display = 'none';
  resultEl.innerHTML = '';

  let correctCount = 0;

  quizData.forEach((q, i) => {
    const userAnswer = userAnswers[i];
    const isCorrect = userAnswer === q.correct;
    if (isCorrect) correctCount++;

    const questionBlock = document.createElement('div');
    questionBlock.classList.add('result-question');

    const questionText = document.createElement('p');
    questionText.textContent = `Вопрос ${i + 1}: ${q.question}`;
    questionBlock.appendChild(questionText);

    q.answers.forEach((answer, index) => {
      const answerEl = document.createElement('p');
      answerEl.textContent = answer;

      if (index === q.correct) {
        answerEl.style.color = 'green';
        answerEl.style.fontWeight = 'bold';
      }
      if (index === userAnswer && userAnswer !== q.correct) {
        answerEl.style.color = 'red';
        answerEl.style.textDecoration = 'line-through';
      }

      questionBlock.appendChild(answerEl);
    });

    resultEl.appendChild(questionBlock);
  });

  const scoreText = document.createElement('p');
  scoreText.style.fontWeight = 'bold';
  scoreText.style.marginTop = '20px';
  scoreText.textContent = `Вы ответили правильно на ${correctCount} из ${quizData.length} вопросов.`;
  resultEl.prepend(scoreText);

  startContainer.style.display = 'block';
  startBtn.textContent = "Пройти заново";
  startBtn.onclick = () => {
    currentQuestionIndex = 0;
    userAnswers = new Array(quizData.length).fill(null);
    resultEl.textContent = '';
    startContainer.style.display = 'none';
    quizContainer.style.display = 'block';
    loadQuestion();
    startBtn.textContent = "Старт";
    startBtn.onclick = null;

    clearProgress(); // очистить прогресс при старте заново
  };
}

// Сохраняем прогресс в localStorage
function saveProgress() {
  const progress = {
    currentQuestionIndex,
    userAnswers
  };
  localStorage.setItem('quizProgress', JSON.stringify(progress));
}

// Загружаем прогресс из localStorage
function loadProgress() {
  const saved = localStorage.getItem('quizProgress');
  if (saved) {
    try {
      const progress = JSON.parse(saved);
      if (progress.currentQuestionIndex !== undefined && Array.isArray(progress.userAnswers)) {
        currentQuestionIndex = progress.currentQuestionIndex;
        userAnswers = progress.userAnswers;
      }
    } catch (e) {
      console.error('Ошибка чтения прогресса:', e);
    }
  }
}

// Очистить прогресс (например, после окончания)
function clearProgress() {
  localStorage.removeItem('quizProgress');
}


// ✅ Досрочное завершение викторины через консоль
window.finishQuiz = function () {
  showResult();
  clearProgress();
};
