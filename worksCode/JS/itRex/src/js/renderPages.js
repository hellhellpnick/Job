import createModalWindowForQuestion from './modalWindowQuestion';
import createWindowInfoUser from './modalWindowInfo';

const btnMainTrash = document.getElementById('main-trash');
const listNav = document.getElementById('list-nav-table');

//function rendering navigation list on table and rendering table//
const renderingListNavigationAndTable = async (data) => {
  let k = 1;

  //condition on arr because it is possible to get 1 elem//
  for (let i = 0; i <= (Array.isArray(data) ? data.length - 1 : 0); i++) {
    const li = document.createElement('li');

    //render element every 20//
    if (i % 20 === 0) {
      li.classList.add('nav-item');
      li.innerHTML = k;
      li.id = `item-${k}`;

      if (k == 1) {
        li.classList.add('is-active-item');
      }

      listNav.children[k].insertAdjacentElement('beforebegin', li);
      k++;

      li.addEventListener('click', (e) => {
        const idElem = e.target.id.toString().slice(-1);
        const tableAllTR = document.querySelectorAll('tr');

        if (listNav.children.length > 3) {
          for (let j = 0; j <= listNav.children.length - 1; j++) {
            listNav.children[j].classList.remove('is-active-item');
            if (j == idElem) {
              listNav.children[idElem].classList.add('is-active-item');
            }
          }

          for (let i = 1; i <= tableAllTR.length; i++) {
            if (tableAllTR[0].classList.contains('is-hidden-td')) {
              tableAllTR[0].classList.toggle('is-hidden-td');
            }

            if (i >= idElem * 20 && i <= idElem * 20 + 19 && idElem != 1) {
              tableAllTR[i - 1].classList.add('is-hidden-td');
              tableAllTR[i - 1].classList.remove('is-hidden-td');
            } else if (!tableAllTR[i - 1].classList.contains('is-hidden-td')) {
              tableAllTR[i - 1].classList.toggle('is-hidden-td');
            }

            if (idElem == 1) {
              for (let j = 0; j <= 19; j++) {
                tableAllTR[j + 1].classList.add('is-hidden-td');
                tableAllTR[j + 1].classList.remove('is-hidden-td');
              }
            }
          }
        }
      });
    }
  }
};

const addElementToPage = (data) => {
  const tableBody = document.getElementById('table-list');
  const trTable = tableBody.getElementsByTagName('tr');

  if (trTable.length >= 1) {
    const tableAllTR = document.querySelectorAll('tr');
    const tableLength = tableAllTR.length - 1;
    const listLength = listNav.children.length - 1;

    for (let i = tableLength; i >= 1; i--) {
      tableAllTR[i].remove();
    }

    for (let i = listLength; i >= 1; i--) {
      if (!(i == listLength)) {
        listNav.children[i].remove();
      }
    }
  }

  for (let i = 0; i <= (Array.isArray(data) ? data.length - 1 : 0); i++) {
    let j = 0;

    const tr = document.createElement('tr');

    let dataForRound = Array.isArray(data) ? Object.values(data[i]) : Object.values(data);

    const idTD = document.createElement('td');
    const firstNameTD = document.createElement('td');
    const lastNameTD = document.createElement('td');
    const emailTD = document.createElement('td');
    const phoneTD = document.createElement('td');
    const stateTD = document.createElement('td');
    const functionTD = document.createElement('td');

    const functionBtnDelete = document.createElement('button');

    const checkboxTD = document.createElement('td');
    const inputCheckbox = document.createElement('input');
    const labelChecbox = document.createElement('label');

    inputCheckbox.setAttribute('type', 'checkbox');
    inputCheckbox.classList.add('checkbox-table');

    functionBtnDelete.innerHTML = '<i class="fas fa-trash"></i>';
    functionBtnDelete.classList.add('table-btn', 'table-btn-delete');

    for (let element in Array.isArray(data) ? data[i] : data) {
      if (element === 'id') {
        tr.setAttribute('id', `${dataForRound[j]}`);
        idTD.innerHTML = dataForRound[j];
      } else if (element === 'firstName') {
        firstNameTD.innerHTML = dataForRound[j];
        inputCheckbox.setAttribute('id', `${dataForRound[j]}`);
        inputCheckbox.setAttribute('firstName', `${j}`);
        labelChecbox.setAttribute('for', `${dataForRound[j]}`);
      } else if (element === 'lastName') {
        lastNameTD.innerHTML = dataForRound[j];
      } else if (element === 'email') {
        emailTD.innerHTML = dataForRound[j];
      } else if (element === 'phone') {
        phoneTD.innerHTML = dataForRound[j];
      } else if (element === 'adress') {
        stateTD.innerHTML = dataForRound[j].state;
      }

      j++;
    }

    if (i > 19) {
      tr.classList.toggle('is-hidden-td');
    }

    functionTD.appendChild(functionBtnDelete);

    checkboxTD.appendChild(inputCheckbox);
    checkboxTD.appendChild(labelChecbox);

    tr.appendChild(checkboxTD);
    tr.appendChild(idTD);
    tr.appendChild(firstNameTD);
    tr.appendChild(lastNameTD);
    tr.appendChild(emailTD);
    tr.appendChild(phoneTD);
    tr.appendChild(stateTD);
    tr.appendChild(functionTD);

    tableBody.insertBefore(tr, tableBody.children[i + 1]);

    checkboxTD.addEventListener('change', () => {
      const tableAllTR = document.querySelectorAll('tr');

      let boolArr = [];
      for (let i = 1; i <= tableAllTR.length - 1; i++) {
        boolArr.push(tableAllTR[i].children[0].children[0].checked);
      }

      if (boolArr.every((elem) => elem == true)) {
        tableAllTR[0].children[0].children[0].checked = true;
      } else {
        tableAllTR[0].children[0].children[0].checked = false;
      }

      if (boolArr.some((elem) => elem == true) && !btnMainTrash.classList.contains('id-disabled')) {
        btnMainTrash.classList.remove('is-disabled');
      } else {
        btnMainTrash.classList.add('is-disabled');
      }
    });

    functionBtnDelete.addEventListener('click', (e) => {
      if (e.path[3].tagName === 'TR') {
        createModalWindowForQuestion(e.path[3].id, data);
      } else {
        createModalWindowForQuestion(e.path[2].id, data);
      }
    });

    tr.addEventListener('click', (e) => {
      if (
        !(e.target.tagName == 'I') &&
        !(e.target.tagName == 'LABEL') &&
        !(e.target.tagName == 'INPUT')
      ) {
        const height = document.getElementsByTagName('main')[0].offsetHeight;
        const div = document.getElementById('window-info').offsetHeight;
        window.scroll(0, height + div);

        createWindowInfoUser(tr.id, data);
      }
    });
  }

  renderingListNavigationAndTable(data);
  return;
};
export default addElementToPage;
