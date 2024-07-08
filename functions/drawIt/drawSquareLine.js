import { params } from "../../constants.js";
import { getElementByCoords } from "../helpers/getElementByCoords.js";

/**
 * @param {Object} coords Координата
 * @param {number} coords.x coor X
 * @param {number} coords.y coor Y.
 * 
 * @param {Object} set Настройки
 * @param {'vertical' | 'horizontal'} set.direction Направление линии
 * @param {number} set.quantity количество ячеек
 * @param {string} set.class класс css
 */

export function drawSquareLine(coords, set) {
    const temporaryArrayLine = [];

    if (set.direction === 'horizontal') {
        for (let i = 0; i < set.quantity; i++) {
            temporaryArrayLine.push(getElementByCoords(coords.x + i, coords.y));
            temporaryArrayLine[i].classList.add(set.class);
            params.arrBlock.push(getElementByCoords(coords.x + i, coords.y));
        }
    } else if (set.direction === 'vertical') {
        for (let i = 0; i < set.quantity; i++) {
            temporaryArrayLine.push(getElementByCoords(coords.x, coords.y - i));
            temporaryArrayLine[i].classList.add(set.class);
            params.arrBlock.push(getElementByCoords(coords.x, coords.y - i));
        }
    }
}




