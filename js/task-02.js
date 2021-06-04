const ingredients = [
  "Картошка",
  "Грибы",
  "Чеснок",
  "Помидоры",
  "Зелень",
  "Приправы"
];

const ingridientsUl = document.querySelector('#ingredients');

const createItem = (ingredients) => {
  return ingredients.map((ingridient, index) => {

    const ingridientItem = document.createElement('li');
    ingridientItem.textContent = ingredients[index];

    return ingridientItem;
    
  });
};
const items = createItem(ingredients);
ingridientsUl.append(...items);

console.log(ingridientsUl);