import { CLASS_NAMES, params } from "../constants.js";

export function gameOverIfNeed() {
    if (params.snake[0].classList.contains(CLASS_NAMES.SNAKE_BODY)) {
        alert('конец игры');
        location.reload();
    }
}