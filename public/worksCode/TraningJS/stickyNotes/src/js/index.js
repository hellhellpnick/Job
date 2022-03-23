const container2 = document.querySelector('.container2');
const container3 = document.querySelector('.container3');
const checkIcon = document.getElementById('check-icon');
const xIcon = document.getElementById('x-icon');
const showNote = document.getElementById('create-note');

let i = 0;

const margin = () => {
  const randomMargin = ['-5px', '1px', '5px', '10px', '15px', '20px'];

  return randomMargin[Math.floor(Math.random() * randomMargin.length)];
};

const rotate = () => {
  const randomRotate = [
    'rotate(3deg)',
    'rotate(1deg)',
    'rotate(-1deg)',
    'rotate(-3deg)',
    'rotate(-10deg)',
  ];

  return randomRotate[Math.floor(Math.random() * randomRotate.length)];
};

const color = () => {
  const randomColor = [
    '#c2ff3d',
    '#ff3de8',
    '#3dc2ff',
    '#04e022',
    '#bc83e6',
    '#ebb328',
  ];

  if (i > randomColor.length - 1) {
    i = 0;
  }

  return randomColor[i++];
};

const typeNote = () => {
  console.log('ok');
  if (container3.style.display == 'none') {
    container3.style.display = 'block';
  } else {
    container3.style.display = 'none';
  }
};

const createNote = () => {
  const noteText = document.getElementById('note-text').value;
  const node0 = document.createElement('div');
  const node1 = document.createElement('h2');

  node1.innerHTML = noteText;
  node1.setAttribute(
    'style',
    'width: 250px; height: 250px; font-size: 26px; padding: 25px; margin-top: 10px; overflow: hidden; box-shadow: 0 10px  24px 0px rgba(0,0,0, 0.5); transition: all 0.2s ease;'
  );

  node1.style.margin = margin();
  node1.style.transform = rotate();
  node1.style.backgroundColor = color();

  node0.appendChild(node1);
  container2.insertAdjacentElement('beforeend', node0);

  node0.addEventListener('mouseenter', () => {
    node0.style.transform = 'scale(1.1)';
  });

  node0.addEventListener('mouseleave', () => {
    node0.style.transform = 'scale(1)';
  });

  node0.addEventListener('dblclick', () => {
    node0.remove();
  });

  document.getElementById('note-text').value = '';
};

xIcon.addEventListener('click', typeNote);
showNote.addEventListener('click', typeNote);
checkIcon.addEventListener('click', createNote);
