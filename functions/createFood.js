import { CLASS_NAMES, params } from "../constants.js";
import { gameOverIfNeed } from "./gameOverIfNeed.js";

export function createFood() {

  if (params.idCollection.length === 0){
    gameOverIfNeed();
    return
  }

  const ids = Array.from(params.idCollection);
  const randomIndex = Math.floor(Math.random() * ids.length);
  const elemRandId = ids[randomIndex];
  params.food = document.getElementById(elemRandId);
  params.food.classList.add(CLASS_NAMES.FOOD);
}
