// Напиши скрипт который, при наборе текста в инпуте input#name -
//     input(событие input), подставляет его текущее значение в
// span#name - output.Если инпут пустой, в спане должна отображаться
// строка 'незнакомец'.

const nameInputEl = document.querySelector("input#name-input");
const nameOutputEl = document.querySelector("span#name-output");

nameInputEl.addEventListener("input", validation);

function validation(event) {
  if (event.currentTarget.value !== "") {
    nameOutputEl.textContent = event.currentTarget.value;
  } else {
    nameOutputEl.textContent = "незнакомец";
  }
}
