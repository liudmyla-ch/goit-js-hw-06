const decrementButtonRef = document.querySelector('[data-action="decrement"]');
const incrementButtonRef = document.querySelector('[data-action="increment"]');
const valueRef = document.querySelector("#value");

let counterValue = 0;

decrementButtonRef.addEventListener("click", () => {
  counterValue -= 1;
  valueRef.textContent = counterValue;
});

incrementButtonRef.addEventListener("click", () => {
  counterValue += 1;
  valueRef.textContent = counterValue;
});
