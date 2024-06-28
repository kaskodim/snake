import { AXIS_X, AXIS_Y, SEPARATOR, } from "../constants.js";

export function formatId(x, y) {
    return AXIS_X + x + SEPARATOR + AXIS_Y + y;
}

export function parseId(elem) {
    const coordinates = elem.id.split('-');
    const arrCoordinates = [
        parseInt(coordinates[0].match(/\d+/)),
        parseInt(coordinates[1].match(/\d+/)),
    ]
    return arrCoordinates;
}
