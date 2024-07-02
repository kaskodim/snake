import {
    FIELD_CELL_CENTER_X,
    FIELD_CELL_CENTER_Y,
    params,
} from "../constants.js";

import { getElementByCoords } from './helpers/getElementByCoords.js'

export function createInitialSnake() {
    params.snake.push(getElementByCoords(FIELD_CELL_CENTER_X, FIELD_CELL_CENTER_Y));
    params.snake.push(getElementByCoords(FIELD_CELL_CENTER_X - 1, FIELD_CELL_CENTER_Y));
    params.snake.push(getElementByCoords(FIELD_CELL_CENTER_X - 2, FIELD_CELL_CENTER_Y));
}
