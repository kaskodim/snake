import { CLASS_NAMES, params, } from "../constants.js";

export function addStyleSnake() {
    if (params.snake.length !== 0) {

        params.snake[0].classList.add(CLASS_NAMES.SNAKE_HEAD);
        for (let i = 1; i < params.snake.length; i++) {
            params.snake[i].classList.add(CLASS_NAMES.SNAKE_BODY);
        }
    }
    else {
        console.error('params.snake is not defined');
    }
}