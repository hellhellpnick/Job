const video = document.querySelector('.video-player');
const btnMuteVideo = document.querySelector('.player-mute');
const mainForm = document.querySelector('.main-form');
const modalWindow = document.querySelector('.box-modal');
const btnModalClose = document.querySelector('.btn-modal-close');
const body = document.getElementsByTagName('body')[0];

btnMuteVideo.addEventListener('click', () => {
  console.log(video);
  video.muted = false;
  btnMuteVideo.classList.add('is-hidden-btn');
  console.log(video);
});

mainForm.addEventListener('submit', (e) => {
  e.preventDefault();

  console.log();
  mainForm.querySelectorAll('.box-input').forEach((item) => {
    item.children[1].innerHTML = '';
  });

  const templateParams = {
    name: e.path[0][0].value,
    email: e.path[0][1].value,
  };

  emailjs.init('user_YdwaDn0c92qXW6JEr43mk');
  emailjs.send('service_ny0vf2u', 'template_lf1qpas', templateParams).then(
    function (response) {
      console.log('SUCCESS!', response.status, response.text);
    },
    function (error) {
      console.log('FAILED...', error);
    },
  );
});

btnModalClose.addEventListener('click', () => {
  modalWindow.classList.remove('is-active-modal');
  body.classList.remove('is-no-scroll');
});

window.addEventListener('click', (e) => {
  const target = e.target;
  if (!target.closest('.box-modal')) {
    modalWindow.classList.remove('is-active-modal');
  }
});

setInterval(() => {
  if (!modalWindow.classList.contains('is-active-modal')) {
    setTimeout(() => {
      modalWindow.classList.add('is-active-modal');
      body.classList.add('is-no-scroll');
    }, 10);
  }
}, 5000);

const numPeople = document.querySelector('#num-people');
const numPlace = document.querySelector('#num-place');
let countPeople = Math.floor(Math.random() * 150);
let countPlace = Math.floor(Math.random() * 20);
numPeople.innerHTML = countPeople;
numPlace.innerHTML = countPlace;

setInterval(() => {
  setTimeout(() => {
    const numPeople = document.querySelector('#num-people');
    const numPlace = document.querySelector('#num-place');

    countPeople += Math.floor(Math.random() * 98) - 59;
    countPlace -= Math.floor(Math.random() * 5);

    if (countPlace > 0) {
      numPlace.innerHTML = countPlace;
    }

    if (countPeople > 0) {
      numPeople.innerHTML = countPeople;
    }
  }, 10);
}, Math.floor(Math.random() * 5000));

const blocks = document.querySelectorAll('.is-hidden-block');

blocks.forEach((item) =>
  item.addEventListener('click', (e) => {
    blocks.forEach((elem) => {
      elem.classList.remove('is-block-active');
    });

    console.log(e.target);
    if (e.target.innerHTML == 'Политика конфиденциальности') {
      blocks[1].classList.add('is-block-active');
    } else if (e.target.innerHTML == 'Пользовательское соглашение') {
      blocks[2].classList.add('is-block-active');
    } else {
      blocks[0].classList.add('is-block-active');
    }
  }),
);
