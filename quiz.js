let currentQuestionIndex = 0;
let userAnswers = new Array(quizData.length).fill(null);

const indicatorsEl = document.getElementById('question-indicators');
const quizContainer = document.getElementById('quiz-container');
const questionEl = document.getElementById('question');
const answersEl = document.getElementById('answers');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');
const startBtn = document.getElementById('startBtn');
const startContainer = document.getElementById('start-container');
const resultEl = document.getElementById('result');

const saveIndicator = document.createElement('div');
saveIndicator.id = 'save-indicator';
saveIndicator.style = 'text-align:right; margin-top:10px; font-size:0.9em; color:gray;';
quizContainer.parentNode.insertBefore(saveIndicator, quizContainer.nextSibling);

// Убираем создание и работу с кнопкой просмотра прошлого результата
// const viewLastResultBtn = document.createElement('button');
// viewLastResultBtn.id = 'viewLastResultBtn';
// viewLastResultBtn.className = 'nav-btn';
// viewLastResultBtn.style = 'margin-top: 10px; display:none;';
// viewLastResultBtn.textContent = 'Просмотреть прошлый результат';
// startContainer.appendChild(viewLastResultBtn);

// // Показываем кнопку просмотра прошлого результата, если есть данные
// if (localStorage.getItem('lastResult')) {
//   viewLastResultBtn.style.display = 'inline-block';
// }

// viewLastResultBtn.addEventListener('click', () => {
//   // Логика показа прошлого результата — удалена
// });

startBtn.addEventListener('click', () => {
  startContainer.style.display = 'none';
  quizContainer.style.display = 'block';

  loadProgress();     // Загружаем прогресс из localStorage
  renderIndicators(); // Рендерим индикаторы сразу
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
    // Проверка на неотвеченные вопросы
    const unansweredIndexes = userAnswers
      .map((ans, idx) => ans === null ? idx : null)
      .filter(i => i !== null);

    if (unansweredIndexes.length > 0) {
      const confirmReturn = confirm(`Вы не ответили на ${unansweredIndexes.length} вопрос(а). Вернуться к ним перед завершением?`);
      if (confirmReturn) {
        currentQuestionIndex = unansweredIndexes[0]; // переходим к первому неотвеченному
        loadQuestion();
        return;
      }
    }

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
      saveProgress();
      renderIndicators(); // обновляем индикаторы после выбора
    });

    answersEl.appendChild(btn);
  });

  updateSelection();

  prevBtn.disabled = currentQuestionIndex === 0;
  nextBtn.textContent = currentQuestionIndex === quizData.length - 1 ? 'Завершить' : 'Далее';
  nextBtn.disabled = userAnswers[currentQuestionIndex] === null;

  renderIndicators(); // обновляем индикаторы при загрузке вопроса
}

function updateSelection() {
  const buttons = answersEl.querySelectorAll('.answer-btn');
  buttons.forEach((btn, i) => {
    btn.classList.toggle('selected', i === userAnswers[currentQuestionIndex]);
  });
}

function showResult() {
  indicatorsEl.innerHTML = '';
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

  // Убираем сохранение lastResult и показ кнопки просмотра результата
  // localStorage.setItem('lastResult', JSON.stringify({
  //   userAnswers,
  //   date: new Date().toISOString()
  // }));

  // viewLastResultBtn.style.display = 'inline-block';

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

function saveProgress() {
  const progress = {
    currentQuestionIndex,
    userAnswers,
    timestamp: new Date().toISOString()
  };
  localStorage.setItem('quizProgress', JSON.stringify(progress));
  updateSaveIndicator(progress.timestamp);
}

function updateSaveIndicator(isoString) {
  const time = new Date(isoString).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
  saveIndicator.textContent = `Сохранено в ${time}`;
}

function loadProgress() {
  const saved = localStorage.getItem('quizProgress');
  if (saved) {
    try {
      const progress = JSON.parse(saved);
      if (progress.currentQuestionIndex !== undefined && Array.isArray(progress.userAnswers)) {
        currentQuestionIndex = progress.currentQuestionIndex;
        userAnswers = progress.userAnswers;
        if (progress.timestamp) {
          updateSaveIndicator(progress.timestamp);
        }
      }
    } catch (e) {
      console.error('Ошибка чтения прогресса:', e);
    }
  }
}

function clearProgress() {
  localStorage.removeItem('quizProgress');
}

function renderIndicators() {
  let indicatorsContainer = document.getElementById('question-indicators');

  if (!indicatorsContainer) {
    indicatorsContainer = document.createElement('div');
    indicatorsContainer.id = 'question-indicators';
    quizContainer.insertBefore(indicatorsContainer, questionEl);
  }

  indicatorsContainer.innerHTML = '';

  quizData.forEach((_, i) => {
    const circle = document.createElement('button');
    circle.className = 'indicator';
    circle.textContent = i + 1;

    // Закрашиваем, если уже есть ответ
    if (userAnswers[i] !== null) {
      circle.classList.add('answered');
    }

    // Подсвечиваем текущий
    if (i === currentQuestionIndex) {
      circle.classList.add('current');
    }

    circle.addEventListener('click', () => {
      currentQuestionIndex = i;
      loadQuestion();
      saveProgress();
    });

    indicatorsContainer.appendChild(circle);
  });
}

// Для досрочного завершения из консоли (опционально)
window.finishQuiz = function () {
  showResult();
  clearProgress();
};
