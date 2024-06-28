import { DIRECTIONS_MOV, parameters, settings } from "../constants.js";

export function snakeControl(event) {

    // TODO БАГА предотвратить разворот в противоположную стророну при быстрой смене направления
    if (event.key === 'ArrowLeft' && parameters.direction !== DIRECTIONS_MOV.RIGHT) {
        parameters.direction = DIRECTIONS_MOV.LEFT;
    }
    else if (event.key === 'ArrowUp' && parameters.direction !== DIRECTIONS_MOV.DOWN) {
        parameters.direction = DIRECTIONS_MOV.UP;
    }
    else if (event.key === 'ArrowRight' && parameters.direction !== DIRECTIONS_MOV.LEFT) {
        parameters.direction = DIRECTIONS_MOV.RIGHT;
    }
    else if (event.key === 'ArrowDown' && parameters.direction !== DIRECTIONS_MOV.UP) {
        parameters.direction = DIRECTIONS_MOV.DOWN;
    }
    if (event.code === 'Space') {
        parameters.speed = settings.speedFast;
    }
}
