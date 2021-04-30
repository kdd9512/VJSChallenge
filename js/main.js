const body = document.querySelector("body")

const colors = ["#1abc9c", "#3498db", "#9b59b6", "#f39c12"];

function handleBgColor() {
  if (window.innerWidth > 1300) {
    body.style.backgroundColor = colors[3]
  }
    else if (window.innerWidth >= 1000 && window.innerWidth <= 1300) {
    body.style.backgroundColor = colors[2]
  }
    else if (window.innerWidth < 850){
    body.style.backgroundColor = colors[1]
  }
}

function init() {
  window.addEventListener("resize", handleBgColor);
}

console.log(window.innerWidth)
init();
