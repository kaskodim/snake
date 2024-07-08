import { CLASS_NAMES, params } from "../constants.js";

export function createFood() {

  for (let i = 0; i < params.snake.length; i++) {
    params.idCollection.delete(params.snake[i].id);
  }

  for (let i = 0; i < params.arrBlock.length; i++) {
    params.idCollection.delete(params.arrBlock[i].id);
  }

  const ids = Array.from(params.idCollection);
  const randomIndex = Math.floor(Math.random() * ids.length);
  const elemRandId = ids[randomIndex];
  params.food = document.getElementById(elemRandId);
  params.food.classList.add(CLASS_NAMES.FOOD);
}
