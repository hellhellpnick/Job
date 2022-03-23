const amount = document.getElementById('amount');
const quest = document.getElementById('quest');
const quality = document.getElementById('quality');
const tipAmount = document.getElementById('tip-amount');
const calc = document.getElementById('calculate');

const calculate = () => {
  const tip = ((amount.value * quality.value) / quest.value).toFixed(2);

  amount.value = '';
  quest.value = '';
  quality.value = '';

  if (tip === 'NaN') {
    tipAmount.innerHTML = 'Tip $0 each';
    showTipAmount();
  } else {
    tipAmount.innerHTML = 'Tip $' + tip + ' each';
    showTipAmount();
  }
};

const showTipAmount = () => {
  let x = tipAmount;

  x.className = 'show';
  setTimeout(function () {
    x.className = x.className.replace('show', '');
  }, 3000);
};

calc.addEventListener('click', calculate);
