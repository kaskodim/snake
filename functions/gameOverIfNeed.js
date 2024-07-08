import { CLASS_NAMES, params } from "../constants.js";

export function gameOverIfNeed() {

const gameOverIfBoby = params.snake[0].classList.contains(CLASS_NAMES.SNAKE_BODY);
const gameOverIfBlock = params.snake[0].classList.contains(CLASS_NAMES.BLOCK);

    if (gameOverIfBoby || gameOverIfBlock) {
        alert('конец игры');
        location.reload();
    }
}