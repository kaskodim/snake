import { CLASS_NAMES, params } from "../constants.js";

export function createFood() {

  for (let i = 0; i < params.snake.length; i++) {
    params.idCollection.delete(params.snake[i].id);
  }

  const ids = Array.from(params.idCollection);
  const randCell = Math.floor(Math.random() * ids.length) + 1;
  const elemRandId = ids[randCell - 1];
  params.food = document.getElementById(elemRandId);
  params.food.classList.add(CLASS_NAMES.FOOD);
}
