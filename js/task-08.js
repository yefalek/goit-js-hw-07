let render = document.querySelector('[data-action="render"]');
let destroy = document.querySelector('[data-action="destroy"]');
let boxes = document.getElementById('boxes');
const input = document.querySelector('#controls input');

render.addEventListener('click', getAmount);

function getAmount() {
  
  const amount = input.value;
 // const amount = +document.querySelector('#controls input').value;
  createBoxes(amount);
}
destroy.addEventListener('click', destroyBoxes);

function destroyBoxes() {
  boxes.innerHTML = '';
}


function createBoxes(amount) {
  const basicSize = 30;
  let fragment = document.createDocumentFragment();
  for (var i = 0; i < amount; i++) {
    let size = basicSize + i * 10;
    let div = document.createElement('div');
    div.style.cssText = `width: ${size}px; height: ${size}px; background-color: rgba( ${random()} , ${random()} , ${random()} )`;
    fragment.appendChild(div);
  }
  boxes.appendChild(fragment);
}


function random() {
  return Math.floor(Math.random() * 256);
}