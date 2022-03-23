//function from searching on filters//
const searchFromFilter = (s, arr, name) => {
  let result = arr.filter(function (el) {
    if (name == 'adress')
      return el[name].state.toLowerCase().indexOf(s.toLowerCase()) > -1;

    return el[name].toLowerCase().indexOf(s) > -1;
  });

  return result;
};

export default searchFromFilter;
