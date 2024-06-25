import {
    AXIS_X,
    AXIS_Y,
    FIELD_CELL_CENTER_X,
    FIELD_CELL_CENTER_Y,
    SEPARATOR,
    snake,
} from "../constants.js"

export function createInitialSnake() {
    snake.push(document.getElementById(AXIS_X + (FIELD_CELL_CENTER_X) + SEPARATOR + AXIS_Y + FIELD_CELL_CENTER_Y));
    snake.push(document.getElementById(AXIS_X + (FIELD_CELL_CENTER_X - 1) + SEPARATOR + AXIS_Y + FIELD_CELL_CENTER_Y));
    snake.push(document.getElementById(AXIS_X + (FIELD_CELL_CENTER_X - 2) + SEPARATOR + AXIS_Y + FIELD_CELL_CENTER_Y));
}