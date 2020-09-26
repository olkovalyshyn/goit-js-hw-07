// Напиши скрипт, который выполнит следующие операции.

// Посчитает и выведет в консоль количество категорий в ul#categories,
// то есть элементов li.item.Получится 'В списке 3 категории.'.

// Для каждого элемента li.item в списке ul#categories, найдет и выведет
// в консоль текст заголовка элемента(тега h2) и количество элементов в
// категории(всех вложенных в него элементов li).

// Например для первой категории получится:

// Категория: Животные
// Количество элементов: 4

const categoryEl = document.querySelectorAll("li.item");
const nameListEl = document.querySelectorAll("h2");
const nameSublistEl = document.querySelectorAll("ul.subItem");

console.log(`В списку ${categoryEl.length} категорії`);

for (let i = 0; i < nameListEl.length; i += 1) {
  console.log("Категорія:", nameListEl[i].textContent);
  console.log("Кількість елементів:", nameSublistEl[i].children.length);
}
