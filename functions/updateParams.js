import { MOVE_DIRECTIONS, params, settings } from "../constants.js";

export function updateParams(code) {

    // TODO БАГА предотвратить разворот в противоположную стророну при быстрой смене направления
    if (code === 'ArrowLeft' && params.direction !== MOVE_DIRECTIONS.RIGHT) {
        params.direction = MOVE_DIRECTIONS.LEFT;
    }
    else if (code === 'ArrowUp' && params.direction !== MOVE_DIRECTIONS.DOWN) {
        params.direction = MOVE_DIRECTIONS.UP;
    }
    else if (code === 'ArrowRight' && params.direction !== MOVE_DIRECTIONS.LEFT) {
        params.direction = MOVE_DIRECTIONS.RIGHT;
    }
    else if (code === 'ArrowDown' && params.direction !== MOVE_DIRECTIONS.UP) {
        params.direction = MOVE_DIRECTIONS.DOWN;
    }
    else if (code === 'Space') {
        params.speed = settings.speedFast;
    }
}
