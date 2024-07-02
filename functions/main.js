import { addStyleSnake } from "./addStyleSnake.js";
import { createField } from "./createField.js";
import { createFood } from "./createFood.js";
import { createInitialSnake } from "./createInitialSnake.js";
import { setDefaultSpeed } from "./setDefaultSpeed.js";
import { move } from "./move.js";
import { snakeControl } from "./snakeControl.js";

export function main() {
    createField();
    createInitialSnake();
    addStyleSnake();
    createFood();
    move();

    document.addEventListener('keydown', snakeControl);
    document.addEventListener('keyup', setDefaultSpeed);
}









