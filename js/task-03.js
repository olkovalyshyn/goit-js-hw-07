// Напиши скрипт для создания галлереи изображений по массиву данных.

// В HTML есть список ul#gallery.

// < ul id = "gallery" ></ul >
//     Используй массив объектов images для создания тегов img вложенных
// в li.Для создания разметки используй шаблонные строки и insertAdjacentHTML().

// Все элементы галереи должны добавляться в DOM за одну операцию вставки.
// Добавь минимальное оформление галереи флексбоксами или гридами через css - классы.

const images = [
  {
    url: "https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "White_and_Black_Long_Fur_Cat",
  },
  {
    url: "https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "Orange_and_White_Koi_Fish_Near_Yellow_Koi_Fish",
  },
  {
    url: "https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "Group_of_Horses_Running",
  },
];

const listGalleryImageEl = document.querySelector("#gallery");

const elements = images.map((option) => {
  const listEl = document.createElement("li");

  listEl.insertAdjacentHTML("beforeend", `<img class="js-style" src=${option.url} alt=${option.alt}>`);

  return listEl;
});

listGalleryImageEl.append(...elements);
