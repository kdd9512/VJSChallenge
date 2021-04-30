const select = document.querySelector(".js-select"),
  KOR = select.querySelector("option[value=KOR]"),
  GRE = select.querySelector("option[value=GRE]"),
  TRK = select.querySelector("option[value=TRK]"),
  FNL = select.querySelector("option[value=FNL]");

const REG_LS = "usersRegion";

function saveRegion(value) {
  localStorage.setItem(REG_LS, value);
}

function handleSelect() {
  const regionValue = select.value;
  saveRegion(regionValue);
}

function askRegion() {
  document.addEventListener("change", handleSelect);
}

function selectOption(val) {
  switch (val) {
    case KOR.value:
      KOR.selected = true;
      break;
    case GRE.value:
      GRE.selected = true;
      break;
    case TRK.value:
      TRK.selected = true;
      break;
    case FNL.value:
      FNL.selected = true;
      break;
    default :
      break;
  }
}

function loadRegion() {
  const usersRegion = localStorage.getItem(REG_LS);
  askRegion();
  if (usersRegion !== null) {
    selectOption(usersRegion);
  }
}

function init() {
  loadRegion();
}

init();
