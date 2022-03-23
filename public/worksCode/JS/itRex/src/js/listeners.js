import searchFromFilter from './searchFromFilter';
import sortListTable from './sortListTable';
import addElementToPage from './renderPages';
import createModalWindowForQuestion from './modalWindowQuestion';
import getJSONData from './workWithJSON';

const filterFirstName = document.getElementById('filter-firstName');
const selectorState = document.getElementById('selector-state');
const btnMainTrash = document.getElementById('main-trash');
const listNav = document.getElementById('list-nav-table');
const listTH = document.querySelectorAll('.is-sort');
let globalCount = 2;

const listeners = async (data) => {
  //filter//
  filterFirstName.addEventListener('input', (e) => {
    const value = e.target.value;

    addElementToPage(searchFromFilter(value.toLowerCase(), data, 'firstName'));
  });
  //filter//

  //select
  selectorState.addEventListener('change', (e) => {
    const value = e.target.value;
    let res = [];

    if (!(e.target.value == 'Nothing')) {
      res = searchFromFilter(value, data, 'adress');
      addElementToPage(res);
    } else {
      addElementToPage(data);
    }
  });
  //select

  //btn listeners//

  btnMainTrash.addEventListener('click', () => {
    const tableAllTR = document.querySelectorAll('tr');

    let boolArr = [];
    let idUsers = [];
    for (let i = 1; i <= tableAllTR.length - 1; i++) {
      boolArr.push(tableAllTR[i].children[0].children[0].checked);
      if (tableAllTR[i].children[0].children[0].checked) {
        idUsers.push(tableAllTR[i].id);
      }
    }

    if (boolArr.some((elem) => elem == true)) {
      createModalWindowForQuestion(undefined, idUsers);
    }
  });

  document.querySelector('#checkbox-main').addEventListener('click', (e) => {
    const tableAllTR = document.querySelectorAll('tr');

    if (e.path[0].checked) {
      tableAllTR.forEach((elem) => {
        if (!elem.classList.contains('is-hidden-td')) {
          elem.children[0].children[0].checked = true;
        }
      });
      btnMainTrash.classList.remove('is-disabled');
    } else {
      tableAllTR.forEach((elem) => (elem.children[0].children[0].checked = false));
      btnMainTrash.classList.add('is-disabled');
    }
  });

  listNav.children[listNav.children.length - 1].addEventListener('click', () => {
    let idElem;

    if (listNav.children.length > 3) {
      for (let i = 0; i <= listNav.children.length - 1; i++) {
        if (listNav.children[listNav.children.length - 2].classList.contains('is-active-item')) {
          idElem = listNav.children[listNav.children.length - 2].id.toString().slice(-1);
          break;
        } else if (listNav.children[i].classList.contains('is-active-item')) {
          idElem = i + 1;
        }
      }

      for (let j = 0; j <= listNav.children.length - 1; j++) {
        listNav.children[j].classList.remove('is-active-item');

        if (j == idElem) {
          listNav.children[idElem].classList.add('is-active-item');
        }
      }

      for (let k = 0; k <= data.length - 1; k++) {
        if (k % 20 === 0) {
          const tableAllTR = document.querySelectorAll('tr');

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
              for (let j = 0; j <= 4; j++) {
                tableAllTR[j + 1].classList.add('is-hidden-td');
                tableAllTR[j + 1].classList.remove('is-hidden-td');
              }
            }
          }
        }
      }
    }
  });

  listNav.children[0].addEventListener('click', () => {
    let idElem;

    if (listNav.children.length > 3) {
      for (let i = 0; i <= listNav.children.length - 1; i++) {
        if (listNav.children[1].classList.contains('is-active-item')) {
          idElem = listNav.children[1].id.toString().slice(-1);
          break;
        } else if (listNav.children[i].classList.contains('is-active-item')) {
          idElem = i - 1;
        }
      }

      for (let j = 0; j <= listNav.children.length - 1; j++) {
        listNav.children[j].classList.remove('is-active-item');
        if (j == idElem) {
          listNav.children[idElem].classList.add('is-active-item');
        }
      }

      for (let k = 0; k <= data.length - 1; k++) {
        if (k % 20 === 0) {
          const tableAllTR = document.querySelectorAll('tr');

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
      }
    }
  });

  listTH.forEach((el) => {
    el.addEventListener('click', (e) => {
      const text = e.currentTarget.innerHTML;
      let textTH =
        text.charAt(0).toLowerCase() +
        text.substring(0, text.indexOf('<')).slice(1).replace(/\s/g, '');

      listTH.forEach((item) => {
        if (
          item.getElementsByTagName('i')[0].classList.contains('fa-arrow-up') ||
          item.getElementsByTagName('i')[0].classList.contains('fa-arrow-down')
        ) {
          item.getElementsByTagName('i')[0].className = 'fas';
        }
      });

      if (globalCount == 4 || globalCount == 1) {
        getJSONData(addElementToPage);
        globalCount = 2;
      } else if (globalCount == 3) {
        el.getElementsByTagName('i')[0].className = 'fas fa-arrow-up';
        sortListTable(textTH, data, globalCount);
        globalCount++;
      } else if (globalCount == 2) {
        sortListTable(textTH, data, globalCount);
        globalCount++;

        el.getElementsByTagName('i')[0].className = 'fas fa-arrow-down';
      }
    });
  });
  //btn listeners//
  return;
};

export default listeners;
