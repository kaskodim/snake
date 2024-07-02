import {
  CLASS_NAMES,
  NUMBER_SQUARES_ROUNDED_X,
  NUMBER_SQUARES_ROUNDED_Y,
  MOVE_DIRECTIONS,
  params,
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

  for (let i = 0; i < params.snake.length; i++) {
    params.collectionId.delete(params.snake[i].id);
  }

  const coordSnakeHead = parseId(params.snake[0].id);
  params.snake[0].classList.remove(CLASS_NAMES.SNAKE_HEAD);
  params.snake[params.snake.length - 1].classList.remove(CLASS_NAMES.SNAKE_BODY);

  const XHead = coordSnakeHead[0];
  const YHead = coordSnakeHead[1];

  if (params.direction === MOVE_DIRECTIONS.RIGHT) {
    if (XHead < NUMBER_SQUARES_ROUNDED_X) {

      params.snake.unshift(getElementByCoords(XHead + 1, YHead));
      params.collectionId.delete(params.snake[0].id);
      params.collectionId.add((params.snake[params.snake.length - 1]).id);
      params.snake.pop();
    } else {

      params.snake.unshift(getElementByCoords(1, YHead));
      params.collectionId.delete(params.snake[0].id);
      params.collectionId.add((params.snake[params.snake.length - 1]).id);
      params.snake.pop();
    }
  }

  if (params.direction === MOVE_DIRECTIONS.LEFT) {
    if (XHead > 1) {

      params.snake.unshift(getElementByCoords(XHead - 1, YHead));
      params.collectionId.delete(params.snake[0].id);
      params.collectionId.add((params.snake[params.snake.length - 1]).id);
      params.snake.pop()
    } else {

      params.snake.unshift(getElementByCoords(NUMBER_SQUARES_ROUNDED_X, YHead));
      params.collectionId.delete(params.snake[0].id);
      params.collectionId.add((params.snake[params.snake.length - 1]).id);
      params.snake.pop();
    }
  }

  if (params.direction === MOVE_DIRECTIONS.UP) {
    if (YHead < NUMBER_SQUARES_ROUNDED_Y) {

      params.snake.unshift(getElementByCoords(XHead, YHead + 1));
      params.collectionId.delete(params.snake[0].id);
      params.collectionId.add((params.snake[params.snake.length - 1]).id);
      params.snake.pop();
    } else {

      params.snake.unshift(getElementByCoords(XHead, 1));
      params.collectionId.delete(params.snake[0].id);
      params.collectionId.add((params.snake[params.snake.length - 1]).id);
      params.snake.pop();
    }
  }

  if (params.direction === MOVE_DIRECTIONS.DOWN) {
    if (YHead > 1) {

      params.snake.unshift(getElementByCoords(XHead, YHead - 1));
      params.collectionId.delete(params.snake[0].id);
      params.collectionId.add((params.snake[params.snake.length - 1]).id);
      params.snake.pop();
    } else {

      params.snake.unshift(getElementByCoords(XHead, NUMBER_SQUARES_ROUNDED_Y));
      params.collectionId.delete(params.snake[0].id);
      params.collectionId.add((params.snake[params.snake.length - 1]).id);
      params.snake.pop();
    }
  }

  eatFoodIfNeed();
  addStyleSnake();
  gameOverIfNeed();
}