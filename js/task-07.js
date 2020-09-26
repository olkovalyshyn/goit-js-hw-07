// Напиши скрипт, который реагирует на изменение значения
// input#font - size - control(событие input) и изменяет
// инлайн - стиль span#text обновляя свойство font - size.
// В результате при перетаскивании ползунка будет меняться
// размер текста.

const rangeInputEl = document.querySelector("input#font-size-control");
const textEl = document.querySelector("span#text");

rangeInputEl.addEventListener("input", onChangeFontsize);

function onChangeFontsize(event) {
  console.log(event.currentTarget.value);
  textEl.style.fontSize = `${event.currentTarget.value}px`;
}
