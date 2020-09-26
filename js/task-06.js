// Напиши скрипт, который бы при потере фокуса на инпуте, проверял его содержимое
// на правильное количество символов.
// Сколько символов должно быть в инпуте, указывается в его атрибуте data - length.
// Если введено подходящее количество, то border инпута становится зеленым, если
// неправильное - красным.
// Для добавления стилей, используй CSS - классы valid и invalid.

const validationInputEl = document.querySelector("input#validation-input");

validationInputEl.addEventListener("blur", onBlur);

function onBlur(event) {
  console.log("заявлена довжина", validationInputEl.dataset.length);
  console.log("введена довжина", event.currentTarget.value.length);
  console.log(Number(validationInputEl.dataset.length) === event.currentTarget.value.length);

  if (Number(validationInputEl.dataset.length) === event.currentTarget.value.length) {
    validationInputEl.classList.remove("invalid");
    validationInputEl.classList.add("valid");
  } else {
    validationInputEl.classList.remove("valid");
    validationInputEl.classList.add("invalid");
  }
}
