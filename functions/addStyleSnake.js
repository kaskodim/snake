import { CLASS_NAMES, snake } from "../constants.js";

export function addStyleSnake() {
    if (snake.length !== 0) {

        snake[0].classList.add(CLASS_NAMES.SNAKE_HEAD);
        for (let i = 1; i < snake.length; i++) {
            snake[i].classList.add(CLASS_NAMES.SNAKE_BODY);
        }
    }
    else {
        console.error('snake is not defined');
    }
}