function changeColor() {
  const hex_numbers = [
    '0',
    '1',
    '2',
    '3',
    '4',
    '5',
    '6',
    '7',
    '8',
    '9',
    'a',
    'b',
    'c',
    'd',
    'e',
    'f',
  ];

  let hexCode = '';

  for (let i = 0; i < 6; i++) {
    let random_index = Math.floor(Math.random() * hex_numbers.length);

    hexCode += hex_numbers[random_index];
  }

  document.getElementById('hex-code').innerHTML = hexCode;
  document.getElementsByTagName('body')[0].style.backgroundColor =
    '#' + hexCode;
}

document.getElementById('main-btn').addEventListener('click', changeColor);
