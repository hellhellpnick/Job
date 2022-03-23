const btnAdd = document.getElementById('create-card'),
  btnDelete = document.getElementById('delete-card'),
  btnSave = document.getElementById('save-card'),
  btnClose = document.getElementById('close-card'),
  flashCards = document.getElementsByClassName('flashcards')[0],
  createBox = document.getElementsByClassName('create-box')[0],
  question = document.getElementById('question'),
  answer = document.getElementById('answer');

let contentArray = localStorage.getItem('items')
  ? JSON.parse(localStorage.getItem('items'))
  : [];

const delFlashcards = () => {
  localStorage.clear();
  flashCards.innerHTML = '';
  contentArray = [];
};

const hideCreateBox = () => {
  createBox.style.display = 'none';
};

const showCreateCardBox = () => {
  createBox.style.display = 'block';
};

const divMaker = (text) => {
  const div = document.createElement('div');
  const h2Question = document.createElement('h2');
  const h2Answer = document.createElement('h2');

  div.className = 'flashcard';

  h2Question.setAttribute(
    'style',
    'border-top: 1px solid red; padding: 15px: margin-top: 30px;'
  );
  h2Question.innerHTML = text.my_question;
  h2Answer.setAttribute(
    'style',
    'text-align: center; display: none; color: red;'
  );
  h2Answer.innerHTML = text.my_answer;

  div.appendChild(h2Question);
  div.appendChild(h2Answer);

  div.addEventListener('click', () => {
    if (h2Answer.style.display == 'none') {
      h2Answer.style.display = 'block';
    } else {
      h2Answer.style.display = 'none';
    }
  });

  flashCards.appendChild(div);
};

const addFlashCard = () => {
  let flashCardInfo = {
    my_question: question.value,
    my_answer: answer.value,
  };

  contentArray.push(flashCardInfo);
  localStorage.setItem('items', JSON.stringify(contentArray));
  divMaker(contentArray[contentArray.length - 1]);
  question.value = '';
  answer.value = '';
};

contentArray.forEach(divMaker);

btnClose.addEventListener('click', hideCreateBox);
btnAdd.addEventListener('click', showCreateCardBox);
btnDelete.addEventListener('click', delFlashcards);
btnSave.addEventListener('click', addFlashCard);
