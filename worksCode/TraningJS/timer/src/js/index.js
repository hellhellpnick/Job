let timeBegan = null; // did the clock start?
let timeStopped = null; // at what time was the timer stopped?
let stoppedDuration = 0; // how long was the timer stopped?
let startInterval = null; // this is needed to stop the startInterva() method
let flag = false; // to control the start/stop of the timer

const startTimer = () => {
  if (timeBegan === null) timeBegan = new Date();

  if (timeStopped !== null) stoppedDuration += new Date() - timeStopped;

  startInterval = setInterval(clockRunning, 10);
};

const stopTimer = () => {
  timeStopped = new Date();
  clearInterval(startInterval);
};

const clockRunning = () => {
  let currentTime = new Date();
  let timeElapsed = new Date(currentTime - timeBegan - stoppedDuration);

  let minutes = timeElapsed.getUTCMinutes();
  let seconds = timeElapsed.getUTCSeconds();
  let milliseconds = timeElapsed.getUTCMilliseconds();

  milliseconds = Math.floor(milliseconds / 10);

  document.querySelector('#timer_display').textContent =
    (minutes = minutes < 10 ? '0' + minutes : minutes) +
    ':' +
    (seconds = seconds < 10 ? '0' + seconds : seconds) +
    ':' +
    (milliseconds = milliseconds < 10 ? '0' + milliseconds : milliseconds);
};

const resetTimer = () => {
  clearInterval(startInterval);
  timeBegan = null;
  timeStopped = null;
  stoppedDuration = 0;
  document.querySelector('#timer_display').innerHTML = '00:00:00';
  flag = false;
};

document.querySelector('.container').addEventListener('click', () => {
  if (!flag) {
    startTimer();
    flag = true;
  } else {
    stopTimer();
    flag = false;
  }
});

document.querySelector('.container').addEventListener('dblclick', () => {
  resetTimer();
});
