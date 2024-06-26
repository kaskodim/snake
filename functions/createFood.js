import { CLASS_NAMES } from "../constants.js";
import { createRandomCoordsArr } from "./createRandomCoordsArr.js";
import { formatId } from "./idHelper.js";

// TODO: сделать рандом из свободных ячеек 
export function createFood() {
  let randomCoords = createRandomCoordsArr();
  let food = document.getElementById(formatId(randomCoords[0], randomCoords[1]));

  if (food.classList.contains(CLASS_NAMES.SNAKE_HEAD) || food.classList.contains(CLASS_NAMES.SNAKE_BODY)) {

    randomCoords = createRandomCoordsArr();
    food = document.getElementById(formatId(randomCoords[0], randomCoords[1]));
  }

  food.classList.add(CLASS_NAMES.FOOD);
}
