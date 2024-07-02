const body = document.querySelector("body");
const color = document.querySelector(".color");
const button = document.querySelector(".change-color");

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

button.addEventListener("click", () => {
  color.textContent = getRandomHexColor();
  body.style.backgroundColor = getRandomHexColor();
})