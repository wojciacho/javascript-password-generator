const resultEl = document.querySelector("#result"),
  upperCaseEl = document.querySelector("#uppercase"),
  lowerCaseEl = document.querySelector("#lowercase"),
  numbersEl = document.querySelector("#numbers"),
  symbolsEl = document.querySelector("#symbols"),
  lengthEl = document.querySelector("#length"),
  copyEl = document.querySelector(".copy"),
  generateEl = document.querySelector("#generate"),
  inputs = document.querySelectorAll(".options input[type='checkbox']"),
  alert = document.querySelector(".alert");

inputs.forEach((item) => {
  item.addEventListener("click", generateMethods);
});

generateEl.addEventListener("click", () => {
  generatePassword();
  copyEl.disabled = false;
});
copyEl.addEventListener("click", copyToClipboard);

function generatePassword() {
  const len = lengthEl.value;

  let password = "";

  if (upperCaseEl.checked) {
    password += upperCase();
  }

  if (lowerCaseEl.checked) {
    password += lowerCase();
  }

  if (numbersEl.checked) {
    password += numbers();
  }

  if (symbolsEl.checked) {
    password += symbols();
  }

  for (let i = password.length; i < len; i++) {
    const x = generateMethods();
    password += x;
  }

  resultEl.innerText = password;
}

function generateMethods() {
  const methods = [];
  if (upperCaseEl.checked) {
    methods.push(upperCase());
  }

  if (lowerCaseEl.checked) {
    methods.push(lowerCase());
  }

  if (numbersEl.checked) {
    methods.push(numbers());
  }

  if (symbolsEl.checked) {
    methods.push(symbols());
  }

  if (methods.length === 0) return "";

  return methods[Math.floor(Math.random() * methods.length)];
}

function upperCase() {
  return String.fromCharCode(65 + Math.floor(Math.random() * 26));
}

function lowerCase() {
  return String.fromCharCode(97 + Math.floor(Math.random() * 26));
}

function numbers() {
  return Math.floor(Math.random() * 10);
}

function symbols() {
  const symbols = "!@#$%^&*()-=+_[];:";
  return symbols[Math.floor(Math.random() * symbols.length)];
}

function copyToClipboard() {
  const copy = resultEl.innerHTML;
  const clipboard = navigator.clipboard;
  clipboard.writeText(copy);
  displayAlert("Copied to clipboard");
}

function displayAlert(text) {
  alert.textContent = text;
  alert.classList.add(`danger`);
  setTimeout(function () {
    alert.textContent = "";
    alert.classList.remove(`danger`);
  }, 1500);
}
