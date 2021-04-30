const randFrm = document.querySelector(".js-randomForm"),
  randRange = document.querySelector(".js-range"),
  randBtn = randFrm.querySelector("button"),
  inputtedNum = randFrm.querySelector("input"),
  result = document.querySelector(".js-gameResult");

function getRangeValue(){
  const rangeVal = randRange.value;
  printValue(rangeVal)
}

function getValue() {
  const rangeVal = randRange.value;
  const inputVal = inputtedNum.value;

  genRandom(rangeVal,inputVal)
}

function printValue(rangeVal) {
  const value = document.querySelector(".js-rangeLabel");
  if (rangeVal !== null) {
    value.innerHTML = `Generate a number between 0 and ${rangeVal - 1}`;
  }
}

function genRandom(rangeVal, inputVal) { // 입력값, 랜덤값이 필요.
  const randNum = Math.floor(Math.random() * rangeVal);
    gameResult(inputVal,randNum);
}

function gameResult(inputVal,randNum){
  const value = document.querySelector(".js-randomResult1");
  if(inputVal !== null){
    result.setAttribute("style","display:block")
    value.innerHTML = `You Chose: ${inputVal}, the machine chose:${randNum}.\n`
    winOrLose(inputVal,randNum)
  }
}

function winOrLose(inputVal,randNum){
  const result = document.querySelector(".js-randomResult2");
  if (inputVal == randNum){
    result.innerHTML = "WIN!!"
  } else {
    result.innerHTML = "LOSE!!"
  }
}

function init() {
  getRangeValue()
  randRange.addEventListener("input", getRangeValue);
  randBtn.addEventListener("click", getValue);
}

init();
