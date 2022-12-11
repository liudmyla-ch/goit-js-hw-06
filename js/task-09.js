function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
console.log(getRandomHexColor());

const buttonchangeColor = document.querySelector(".change-color");
const textColor = document.querySelector(".color");
const body = document.querySelector("body");

buttonchangeColor.addEventListener('click', (event)=>{
  const color = getRandomHexColor();
  textColor.textContent = color;
  body.style.backgroundColor = color;
  
})


