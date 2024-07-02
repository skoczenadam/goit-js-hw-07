const addBoxes = document.querySelector("input");
const boxes = document.querySelector("#boxes");
const create = document.querySelector("button[data-create]");
const destroy = document.querySelector("button[data-destroy]");

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
};

let boxIncrease = 30;

const createBoxes = amount => {
  if (amount >= addBoxes.min && amount <= addBoxes.max) {
    for (let i = 1; i <= amount; i++) {
      const createBox = `<div style="width: ${boxIncrease}px; height: ${boxIncrease}px; background-color: ${getRandomHexColor()}"></div>`
      boxes.insertAdjacentHTML("afterbegin", createBox);

      boxIncrease += 10;
    }
  }
}

const destroyBoxes = () => {
  addBoxes.value = 1;
  boxes.innerHTML = "";
  boxIncrease = 30;
}

create.addEventListener("click", () => {
  createBoxes(addBoxes.value*1);
});

destroy.addEventListener("click", () => {
  destroyBoxes();
});