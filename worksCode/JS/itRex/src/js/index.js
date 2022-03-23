import getJSONData from './workWithJSON';

window.onload = () => {
  getJSONData();

  document.body.classList.add('loaded-hiding');
  window.setTimeout(function () {
    document.body.classList.add('loaded');
    document.body.classList.remove('loaded-hiding');
  }, 2000);
};
