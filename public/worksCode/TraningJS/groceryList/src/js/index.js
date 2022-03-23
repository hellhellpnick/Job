const groceries = document.getElementsByClassName('groceries')[0];
const pencil = document.getElementById('pencil');
const allItems = document.getElementById('all-items');
const userInput = document.getElementById('user-input');

pencil.addEventListener('click', () => {
  allItems.innerHTML = '';
});

userInput.addEventListener('keydown', (e) => {
  if (e.key == 'Enter') {
    addItem();
  }
});

function addItem() {
  let h2 = document.createElement('h2');
  h2.innerHTML = '- ' + userInput.value;
  h2.style.cursor = 'pointer';

  h2.addEventListener('click', () => {
    h2.style.textDecoration = 'line-through';
  });

  allItems.insertAdjacentElement('beforeend', h2);

  userInput.value = '';
}
