import { addStyleSnake } from "./addStyleSnake.js";
import { createField } from "./createField.js";
import { createFood } from "./createFood.js";
import { createInitialSnake } from "./createInitialSnake.js";
import { defaultSpeed } from "./defaultSpeed.js";
import { movement } from "./movement.js";
import { snakeControl } from "./snakeControl.js";

export function main() {
    createField();
    createInitialSnake();
    addStyleSnake();
    createFood();
    movement();
}

document.addEventListener('keydown', snakeControl);
document.addEventListener('keyup', defaultSpeed);







