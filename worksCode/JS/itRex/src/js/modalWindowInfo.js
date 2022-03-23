const createWindowInfoUser = (id, data) => {
  const windowInfo = document.getElementById('window-info');
  const title = document.createElement('h2');
  windowInfo.innerHTML = '';

  title.innerHTML = 'Portfolio';
  title.className = 'modal-title';
  windowInfo.appendChild(title);

  if (!windowInfo.classList.contains('is-show-info')) {
    windowInfo.classList.add('is-show-info');
  }

  const result = data.find((el) => {
    if (el.id == id) {
      return el;
    }
  });

  for (let key in result) {
    if (key == 'adress') {
      for (let key2 in result[key]) {
        let p = document.createElement('p');

        p.innerHTML = `<b>${key2.toUpperCase()}</b>: ${result[key][key2]}`;
        windowInfo.appendChild(p);
      }
    } else {
      let p = document.createElement('p');

      p.innerHTML = `<b>${key.toUpperCase()}</b>: ${result[key]}`;
      windowInfo.appendChild(p);
    }
  }

  windowInfo.addEventListener('click', () => {
    windowInfo.classList.remove('is-show-info');
  });
  return;
};

export default createWindowInfoUser;
