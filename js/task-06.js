let inputText = document.getElementById("validation-input");

let allLenght = inputText.getAttribute("data-length");
let intTotallenght = parseInt(allLenght, 10);

inputText.oninput = function() {
  if (inputText.value.length === intTotallenght) {
    inputText.classList.remove("invalid");
  }
  
  else { inputText.classList.add("invalid"); }
};

// inputText.oninput = (inputText.value.length === intTotallenght )?
//   inputText.classList.remove("invalid") : inputText.classList.add("invalid");
