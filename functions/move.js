import {
  CLASS_NAMES,
  NUMBER_SQUARES_ROUNDED_X,
  NUMBER_SQUARES_ROUNDED_Y,
  MOVE_DIRECTIONS,
  snake,
  params
} from "../constants.js";

import { addStyleSnake } from "./addStyleSnake.js";
import { eatFoodIfNeed } from "./eatFoodIfNeed.js";
import { gameOverIfNeed } from "./gameOverIfNeed.js";
import { parseId } from "./helpers/idHelper.js";
import { getElementByCoords } from "./helpers/getElementByCoords.js";

export function move() {
  moveSnake();
  setTimeout(move, params.speed);
}

function moveSnake() {

  const coordSnakeHead = parseId(snake[0].id);
  snake[0].classList.remove(CLASS_NAMES.SNAKE_HEAD);
  snake[snake.length - 1].classList.remove(CLASS_NAMES.SNAKE_BODY);

  const XHead = coordSnakeHead[0];
  const YHead = coordSnakeHead[1];

  if (params.direction === MOVE_DIRECTIONS.RIGHT) {
    if (XHead < NUMBER_SQUARES_ROUNDED_X) {
      snake.unshift(getElementByCoords(XHead + 1, YHead));
      snake.pop();
    } else {

      snake.unshift(getElementByCoords(1, YHead));
      snake.pop();
    }
  }

  if (params.direction === MOVE_DIRECTIONS.LEFT) {
    if (XHead > 1) {
      snake.unshift(getElementByCoords(XHead - 1, YHead));
      snake.pop();
    } else {
      snake.unshift(getElementByCoords(NUMBER_SQUARES_ROUNDED_X, YHead));
      snake.pop();
    }
  }

  if (params.direction === MOVE_DIRECTIONS.UP) {
    if (YHead < NUMBER_SQUARES_ROUNDED_Y) {
      snake.unshift(getElementByCoords(XHead, YHead + 1));
      snake.pop();
    } else {
      snake.unshift(getElementByCoords(XHead, 1));
      snake.pop();
    }
  }

  if (params.direction === MOVE_DIRECTIONS.DOWN) {
    if (YHead > 1) {
      snake.unshift(getElementByCoords(XHead, YHead - 1));
      snake.pop();
    } else {
      snake.unshift(getElementByCoords(XHead, NUMBER_SQUARES_ROUNDED_Y));
      snake.pop();
    }
  }

  addStyleSnake();
  eatFoodIfNeed();
  gameOverIfNeed();
}