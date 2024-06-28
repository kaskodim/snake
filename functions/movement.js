
import {
  CLASS_NAMES,
  NUMBER_SQUARES_ROUNDED_X,
  NUMBER_SQUARES_ROUNDED_Y,
  DIRECTIONS_MOV,
  snake,
  parameters
} from "../constants.js";
import { addStyleSnake } from "./addStyleSnake.js";
import { eatingFood } from "./eatingFood.js";
import { gameOver } from "./gameOver.js";
import { formatId, parseId } from "./idHelper.js";

export function movement() {
  move();
  setTimeout(movement, parameters.speed);
}

function move() {
  const coordSnakeHead = parseId(snake[0]);
  snake[0].classList.remove(CLASS_NAMES.SNAKE_HEAD);
  snake[snake.length - 1].classList.remove(CLASS_NAMES.SNAKE_BODY);

  if (parameters.direction === DIRECTIONS_MOV.RIGHT) {
    if (coordSnakeHead[0] < NUMBER_SQUARES_ROUNDED_X) {
      snake.unshift(document.getElementById(formatId(coordSnakeHead[0] + 1, coordSnakeHead[1])))
      snake.pop();
    } else {
      snake.unshift(document.getElementById(formatId(1, coordSnakeHead[1])));
      snake.pop();
    }
  }

  if (parameters.direction === DIRECTIONS_MOV.LEFT) {
    if (coordSnakeHead[0] > 1) {
      snake.unshift(document.getElementById(formatId(coordSnakeHead[0] - 1, coordSnakeHead[1])));
      snake.pop();
    } else {
      snake.unshift(document.getElementById(formatId(NUMBER_SQUARES_ROUNDED_X, coordSnakeHead[1])));
      snake.pop();
    }
  }

  if (parameters.direction === DIRECTIONS_MOV.UP) {
    if (coordSnakeHead[1] < NUMBER_SQUARES_ROUNDED_Y) {
      snake.unshift(document.getElementById(formatId(coordSnakeHead[0], coordSnakeHead[1] + 1)));
      snake.pop();
    } else {
      snake.unshift(document.getElementById(formatId(coordSnakeHead[0], 1)));
      snake.pop();
    }
  }

  if (parameters.direction === DIRECTIONS_MOV.DOWN) {
    if (coordSnakeHead[1] > 1) {
      snake.unshift(document.getElementById(formatId(coordSnakeHead[0], coordSnakeHead[1] - 1)));
      snake.pop();
    } else {
      snake.unshift(document.getElementById(formatId(coordSnakeHead[0], NUMBER_SQUARES_ROUNDED_Y)));
      snake.pop();
    }
  }

  eatingFood();
  addStyleSnake();
  gameOver();
}