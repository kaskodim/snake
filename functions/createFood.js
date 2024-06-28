import { CLASS_NAMES, parameters } from "../constants.js";
import { createRandomCoordsArr } from "./createRandomCoordsArr.js";
import { formatId } from "./idHelper.js";

// TODO: сделать рандом из свободных ячеек 
export function createFood() {
  let randomCoords = createRandomCoordsArr();
  parameters.food = document.getElementById(formatId(randomCoords[0], randomCoords[1]));

  if (parameters.food.classList.contains(CLASS_NAMES.SNAKE_HEAD) || parameters.food.classList.contains(CLASS_NAMES.SNAKE_BODY)) {

    randomCoords = createRandomCoordsArr();
    parameters.food = document.getElementById(formatId(randomCoords[0], randomCoords[1]));
  }

  parameters.food.classList.add(CLASS_NAMES.FOOD);
}
