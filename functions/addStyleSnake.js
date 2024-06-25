import { STYLE_SNAKE_BODY, STYLE_SNAKE_HEAD, snake } from "../constants.js";

export function addStyleSnake() {
    snake[0].classList.add(STYLE_SNAKE_HEAD);
    
    for (let i = 1; i < snake.length; i++) {
        snake[i].classList.add(STYLE_SNAKE_BODY);
    }
}