import { CLASS_NAMES, params } from "../constants.js";
import { createRandomCoordsArr } from "./createRandomCoordsArr.js";
import { getElementByCoords } from "./helpers/getElementByCoords.js";

// TODO: сделать рандом из свободных ячеек 
export function createFood() {
  let randomCoords = createRandomCoordsArr();
  params.food = getElementByCoords(randomCoords[0], randomCoords[1]);

  if (params.food.classList.contains(CLASS_NAMES.SNAKE_HEAD) || params.food.classList.contains(CLASS_NAMES.SNAKE_BODY)) {

    randomCoords = createRandomCoordsArr();
    params.food = getElementByCoords(randomCoords[0], randomCoords[1]);
  }
  params.food.classList.add(CLASS_NAMES.FOOD);
}
