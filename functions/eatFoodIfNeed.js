import { CLASS_NAMES, params, snake } from "../constants.js";
import { createFood } from "./createFood.js";

export function eatFoodIfNeed() {

    if (snake[0].classList.contains(CLASS_NAMES.FOOD)) {
        params.food.classList.remove(CLASS_NAMES.FOOD);
        snake[0].classList.remove(CLASS_NAMES.SNAKE_HEAD);
        snake.push(snake[snake.length - 1]);
        createFood();
        console.log('здесь будет счетчик');
    }
}