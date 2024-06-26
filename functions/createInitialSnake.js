import {
    FIELD_CELL_CENTER_X,
    FIELD_CELL_CENTER_Y,
    snake,
} from "../constants.js";

import { formatId } from "./idHelper.js";

export function createInitialSnake() {
    snake.push(document.getElementById(formatId(FIELD_CELL_CENTER_X, FIELD_CELL_CENTER_Y)));
    snake.push(document.getElementById(formatId(FIELD_CELL_CENTER_X - 1, FIELD_CELL_CENTER_Y)));
    snake.push(document.getElementById(formatId(FIELD_CELL_CENTER_X - 2, FIELD_CELL_CENTER_Y)));
}
