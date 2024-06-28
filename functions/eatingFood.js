import { CLASS_NAMES, parameters, snake } from "../constants.js";
import { createFood } from "./createFood.js";

export function eatingFood() {

    if (snake[0].classList.contains(CLASS_NAMES.FOOD)) {
        parameters.food.classList.remove(CLASS_NAMES.FOOD);
        createFood();
        snake[0].classList.remove(CLASS_NAMES.SNAKE_HEAD);
        snake.push(snake[snake.length - 1]);
        console.log('здесь будет счетчик');
    }
}