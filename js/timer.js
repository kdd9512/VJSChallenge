const handleCountDown = document.querySelector('.whereIsMySanta'),
countTitle = handleCountDown.querySelector("h3");

function showD_day() {
  const end = new Date(2021, 12, 24)

  let _second = 1000;
  let _minute = _second * 60;
  let _hour = _minute * 60;
  let _day = _hour * 24;

  const start = new Date();
  const dist = end - start;

  const days = Math.floor(dist / _day);
  const hours = Math.floor(dist % _day / _hour);
  const minutes = Math.floor(dist % _hour / _minute);
  const seconds = Math.floor(dist % _minute / _second);

  countTitle.innerText = `${
    days < 10 ? `0${days}` : days} DAYS ${
    hours < 10 ? `0${hours}` : hours} HOURS ${
    minutes < 10 ? `0${minutes}` : minutes} MINUTES ${
    seconds < 10 ? `0${seconds}` : seconds} SECONDS!`;
}

function init() {
  setInterval(showD_day, 1000);
}

init();
