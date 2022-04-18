

const btnStart = document.querySelector('button[data-start]');
const btnStop = document.querySelector('button[data-stop]');
let timerId = null;
var div = document.createElement('div');

  btnStart.addEventListener('click', getRandomHexColor)

  function getRandomHexColor() {
    timerId = setInterval(() => {
        btnStart.disabled = true; 
        btnStop.disabled = false;
    return document.body.style.backgroundColor = `#${Math.floor(Math.random() * 16777215).toString(16)}`;
  }, 1000);
};

  btnStop.addEventListener("click", () => {
    btnStart.disabled = false; 
    btnStop.disabled = true;
    clearInterval(timerId); 
  });

 
