import { CLASS_NAMES, snake } from "../constants.js";

export function gameOverIfNeed() {
    if (snake[0].classList.contains(CLASS_NAMES.SNAKE_BODY)) {
        alert('конец игры');
        location.reload();
    }
}