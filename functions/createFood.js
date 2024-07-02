import { CLASS_NAMES, params } from "../constants.js";

export function createFood() {

  params.arrCollectionId = Array.from(params.collectionId);
  const randCell = Math.floor(Math.random() * params.arrCollectionId.length) + 1;
  const elemRandId = params.arrCollectionId[randCell - 1];
  params.food = document.getElementById(elemRandId);
  params.food.classList.add(CLASS_NAMES.FOOD);
}
