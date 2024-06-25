import {
    STYLE_CELL,
    STYLE_FIELD,
    NUMBER_SQUARES_ROUNDED_Y,
    NUMBER_SQUARES_ROUNDED_X,
    ALL_SQUARES,
    AXIS_X,
    AXIS_Y,
    SEPARATOR,
    settings
} from "../constants.js";

export function createField() {
    const field = document.createElement('div');
    document.body.append(field);
    field.classList.add(STYLE_FIELD);

    field.style.setProperty('--cellSizeWidth', settings.cellSizeWidth + 'px');
    field.style.setProperty('--cellSizeHeight', settings.cellSizeHeight + 'px');

    field.style.setProperty('--fieldSizeWidth', NUMBER_SQUARES_ROUNDED_X * settings.cellSizeWidth + 'px');
    field.style.setProperty('--fieldSizeHeight', NUMBER_SQUARES_ROUNDED_Y * settings.cellSizeHeight + 'px');

    let coordinateX = 1;
    let coordinateY = NUMBER_SQUARES_ROUNDED_Y;

    for (let i = 0; i < ALL_SQUARES; i++) {
        let cell = document.createElement('div');
        field.append(cell);
        cell.classList.add(STYLE_CELL);

        if (coordinateX > NUMBER_SQUARES_ROUNDED_X) {
            coordinateX = 1;
            coordinateY--;
        }
        cell.id = AXIS_X + coordinateX + SEPARATOR + AXIS_Y + coordinateY;
        coordinateX++;
    }
}