let inputText = document.getElementById("validation-input");

let allLenght = inputText.getAttribute("data-length");
let intTotallenght = parseInt(allLenght, 10);

inputText.oninput = function() {
  if (inputText.value.length === intTotallenght) {
    inputText.classList.remove("invalid");
    inputText.classList.add("valid");
  }
  if (inputText.value.length === 0) {
    inputText.classList.remove("valid");
    inputText.classList.remove("invalid");
  }
  if (inputText.value.length !== intTotallenght && inputText.value.length !== 0) {
    inputText.classList.add("invalid");
  }
};