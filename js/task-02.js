const ingredients = [
  "Картошка",
  "Грибы",
  "Чеснок",
  "Помидоры",
  "Зелень",
  "Приправы"
];


let ulList = document.getElementById("ingredients");
const allIngredients = ingredients.forEach(ingredient => {
  let item = document.createElement("li");
  item.innerHTML = ingredient;
  ulList.append(item);
});

console.log(allIngredients);