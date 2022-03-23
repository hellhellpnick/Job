const userInput = document.getElementById('user-input');
const btns = document.querySelectorAll('.btn');
const equal = document.querySelector('.btnEqual');
let expression = '';

function press(num) {
  expression += num;

  userInput.value = expression;
}

function btnEqual() {
  userInput.value = eval(expression);
  expression = '';
}

function erase() {
  expression = '';
  userInput.value = expression;
}

equal.addEventListener('click', btnEqual);
btns.forEach((item) => {
  item.addEventListener('click', (e) => {
    if (e.path[0].innerHTML === 'c') {
      erase();
    } else {
      press(e.path[0].innerHTML);
    }
  });
});
