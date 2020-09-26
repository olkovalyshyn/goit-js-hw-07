// Счетчик состоит из спана и кнопок, которые должны увеличивать и уменьшать значение счетчика на 1.

// Создай переменную counterValue в которой будет хранится текущее значение счетчика.
// Создай функции increment и decrement для увеличения и уменьшения значения счетчика
// Добавь слушатели кликов на кнопки, вызовы функций и обновление интерфейса

const blockCounterEl = document.querySelector("#value");
const decrementEl = document.querySelector('[data-action="decrement"]');
const incrementEl = document.querySelector('[data-action="increment"]');

let counterValue = 0;

decrementEl.addEventListener("click", decrement);
incrementEl.addEventListener("click", increment);

function decrement() {
  counterValue -= 1;
  blockCounterEl.textContent = counterValue;
}

function increment() {
  counterValue += 1;
  blockCounterEl.textContent = counterValue;
}
