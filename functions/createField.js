import {
    CLASS_NAMES,
    NUMBER_SQUARES_ROUNDED_Y,
    NUMBER_SQUARES_ROUNDED_X,
    ALL_SQUARES,
    settings,
    params,
    FIELD_CELL_CENTER_X,
    FIELD_CELL_CENTER_Y,
} from "../constants.js";

import { drawSquareLine } from "./drawIt/drawSquareLine.js";
import { formatId } from './helpers/idHelper.js';


export function createField() {

    const field = document.createElement('div');
    document.body.append(field);
    field.classList.add(CLASS_NAMES.FIELD);

    field.style.setProperty('--cellSizeWidth', settings.cellSizeWidth + 'px');
    field.style.setProperty('--cellSizeHeight', settings.cellSizeHeight + 'px');

    field.style.setProperty('--fieldSizeWidth', NUMBER_SQUARES_ROUNDED_X * settings.cellSizeWidth + 'px');
    field.style.setProperty('--fieldSizeHeight', NUMBER_SQUARES_ROUNDED_Y * settings.cellSizeHeight + 'px');

    let coordinateX = 1;
    let coordinateY = NUMBER_SQUARES_ROUNDED_Y;

    for (let i = 0; i < ALL_SQUARES; i++) {
        const cell = document.createElement('div');
        field.append(cell);
        cell.classList.add(CLASS_NAMES.CELL);

        if (coordinateX > NUMBER_SQUARES_ROUNDED_X) {
            coordinateX = 1;
            coordinateY--;
        }
        cell.id = formatId(coordinateX, coordinateY);
        params.idCollection.add(cell.id);
        coordinateX++;
    }

    if (params.difficultyLevel === 'levelMedium') {

        // верхняя граница игрового поля
        drawSquareLine(
            { x: 1, y: NUMBER_SQUARES_ROUNDED_Y },
            { direction: 'horizontal', quantity: NUMBER_SQUARES_ROUNDED_X, class: CLASS_NAMES.BLOCK }
        );
        // левая граница игрового поля
        drawSquareLine(
            { x: 1, y: NUMBER_SQUARES_ROUNDED_Y },
            { direction: 'vertical', quantity: NUMBER_SQUARES_ROUNDED_Y, class: CLASS_NAMES.BLOCK }
        );
        // нижняя граница игрового поля
        drawSquareLine(
            { x: 1, y: 1 },
            { direction: "horizontal", quantity: NUMBER_SQUARES_ROUNDED_X, class: CLASS_NAMES.BLOCK }
        );
        // правая граница игрового поля
        drawSquareLine(
            { x: NUMBER_SQUARES_ROUNDED_X, y: NUMBER_SQUARES_ROUNDED_Y },
            { direction: "vertical", quantity: NUMBER_SQUARES_ROUNDED_Y, class: CLASS_NAMES.BLOCK }
        );
        // верхняя линия тоннеля
        drawSquareLine(
            { x: FIELD_CELL_CENTER_X - (FIELD_CELL_CENTER_X - 5), y: FIELD_CELL_CENTER_Y + 3 },
            { direction: 'horizontal', quantity: NUMBER_SQUARES_ROUNDED_X - 8, class: CLASS_NAMES.BLOCK }
        );
        // нижняя линия тоннеля
        drawSquareLine(
            { x: FIELD_CELL_CENTER_X - (FIELD_CELL_CENTER_X - 5), y: FIELD_CELL_CENTER_Y - 3 },
            { direction: 'horizontal', quantity: NUMBER_SQUARES_ROUNDED_X - 8, class: CLASS_NAMES.BLOCK }
        );
    }
    else if (params.difficultyLevel === 'levelHard') {
        console.log("скоро будет");
    }
}