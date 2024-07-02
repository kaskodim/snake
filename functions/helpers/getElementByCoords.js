import { formatId } from "./idHelper.js";

export function getElementByCoords(x, y) {
    const elem = document.getElementById(formatId(x, y));
    if (elem) {
        return elem
    }
    else {
        console.error(`не найден элемент с координатами х = ${x}; y = ${y} `);
    }
}