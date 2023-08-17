const startBtn = document.querySelector(".start");
const stopBtn = document.querySelector(".stop");
const body = document.querySelector("body");

let bodyBcgColor = null;
stopBtn.disabled = true;
function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215).toString(16).padStart(6, 0)}`;
  };

startBtn.addEventListener("click", handlerClickStart);
function handlerClickStart(evt){
    bodyBcgColor = setInterval(() => {
        body.style.backgroundColor =  getRandomHexColor();
      }, 1000);
      startBtn.disabled = true;
      stopBtn.disabled = false;
    
};
stopBtn.addEventListener("click", handlerClickStop);
function handlerClickStop(evt){
    clearInterval(bodyBcgColor);
    startBtn.disabled = false;
      stopBtn.disabled = true;
};







