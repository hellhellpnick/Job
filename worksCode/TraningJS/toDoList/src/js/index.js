const toDoItems = document.querySelector('.to-do-items');
const input = document.getElementById('input');
const trashIcon = document.getElementById('trash');
const btn = document.getElementById('add-btn');

const addItem = () => {
  const divParent = document.createElement('div');
  const divChild = document.createElement('div');
  const checkIcon = document.createElement('i');
  const trashIcon = document.createElement('i');

  divParent.className = 'item';
  divParent.innerHTML = '<div>' + input.value + '</div>';

  checkIcon.className = 'fas fa-check-square';
  checkIcon.style.color = 'lightgray';

  checkIcon.addEventListener('click', () => {
    checkIcon.style.color = 'limegreen';
  });

  divChild.appendChild(checkIcon);

  trashIcon.className = 'fas fa-trash';
  trashIcon.style.color = 'darkgray';

  trashIcon.addEventListener('click', () => {
    divParent.remove();
  });

  divChild.appendChild(trashIcon);
  divParent.appendChild(divChild);
  toDoItems.appendChild(divParent);
  input.value = '';
};

btn.addEventListener('click', addItem);
input.addEventListener('keydown', (e) => {
  if (e.key === 'Enter') {
    addItem();
  }
});
