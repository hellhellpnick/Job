import addElementToPage from './renderPages';

const sortListTable = (name, data, i) => {
  let result = data.sort(function (a, b) {
    if (i == 2) {
      if (name == 'state') {
        if (a.adress.state < b.adress.state) {
          return -1;
        }

        if (a.adress.state > b.adress.state) {
          return 1;
        }

        return 0;
      } else {
        if (a[name] < b[name]) {
          return -1;
        }

        if (a[name] > b[name]) {
          return 1;
        }

        return 0;
      }
    } else if (i == 3) {
      if (name == 'state') {
        if (a.adress.state > b.adress.state) {
          return 1;
        }

        if (a.adress.state < b.adress.state) {
          return -1;
        }

        return 0;
      } else {
        if (a[name] < b[name]) {
          return 1;
        }

        if (a[name] > b[name]) {
          return -1;
        }

        return 0;
      }
    }
  });

  addElementToPage(result);
  return;
};

export default sortListTable;
