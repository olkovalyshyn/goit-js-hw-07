// Напиши скрипт, который для каждого элемента массива ingredients создаст
// отдельный li, после чего вставит все li за одну операцию в список ul.ingredients.
// Для создания DOM - узлов используй document.createElement().

const ingredients = ["Картошка", "Грибы", "Чеснок", "Помидоры", "Зелень", "Приправы"];

const containerIngredients = document.querySelector("#ingredients");

const elements = ingredients.map((option) => {
  const listEl = document.createElement("li");
  listEl.textContent = option;
  return listEl;
});
containerIngredients.append(...elements);
