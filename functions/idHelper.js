import { AXIS_X, AXIS_Y, SEPARATOR } from "../constants.js";

export function formatId(x, y) {
    return AXIS_X + x + SEPARATOR + AXIS_Y + y;
}