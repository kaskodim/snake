import { CLASS_NAMES, params, } from "../constants.js";
import { createFood } from "./createFood.js";

export function eatFoodIfNeed() {

    if (params.snake[0].classList.contains(CLASS_NAMES.FOOD)) {
        params.food.classList.remove(CLASS_NAMES.FOOD);
        params.snake[0].classList.remove(CLASS_NAMES.SNAKE_HEAD);
        params.snake.push(params.snake[params.snake.length - 1]);
        createFood();
        console.log('здесь будет счетчик');
    }
}