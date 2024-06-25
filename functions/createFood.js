import { AXIS_X, AXIS_Y, SEPARATOR, STYLE_FOOD, STYLE_SNAKE_BODY, STYLE_SNAKE_HEAD } from "../constants.js";
import { createRandomCoordsArr } from "./createRandomCoordsArr.js";

// TODO: сделать рандом из свободных ячеек 
export function createFood() {
   let randomCoords = createRandomCoordsArr();
   let food = document.getElementById(AXIS_X + randomCoords[0] + SEPARATOR + AXIS_Y + randomCoords[1]);
 
   if (food.classList.contains(STYLE_SNAKE_HEAD) || food.classList.contains(STYLE_SNAKE_BODY)) {
 
     randomCoords = createRandomCoordsArr();
     food = document.getElementById(AXIS_X + randomCoords[0] + SEPARATOR + AXIS_Y + randomCoords[1]);
   }
 
   food.classList.add(STYLE_FOOD);
 }




