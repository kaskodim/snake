import { MOVE_DIRECTIONS, params, settings } from "../constants.js";

export function snakeControl(event) {

    // TODO БАГА предотвратить разворот в противоположную стророну при быстрой смене направления
    if (event.key === 'ArrowLeft' && params.direction !== MOVE_DIRECTIONS.RIGHT) {
        params.direction = MOVE_DIRECTIONS.LEFT;
    }
    else if (event.key === 'ArrowUp' && params.direction !== MOVE_DIRECTIONS.DOWN) {
        params.direction = MOVE_DIRECTIONS.UP;
    }
    else if (event.key === 'ArrowRight' && params.direction !== MOVE_DIRECTIONS.LEFT) {
        params.direction = MOVE_DIRECTIONS.RIGHT;
    }
    else if (event.key === 'ArrowDown' && params.direction !== MOVE_DIRECTIONS.UP) {
        params.direction = MOVE_DIRECTIONS.DOWN;
    }
    if (event.code === 'Space') {
        params.speed = settings.speedFast;
    }
}
