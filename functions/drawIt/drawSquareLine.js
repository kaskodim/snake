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

    if (set.direction === 'horizontal') {

        for (let i = 0; i < set.quantity; i++) {
            const elem = getElementByCoords(coords.x + i, coords.y);
            elem.classList.add(set.class);
            params.arrBlock.push(elem);
        }
    } else if (set.direction === 'vertical') {

        for (let i = 0; i < set.quantity; i++) {
            const elem = getElementByCoords(coords.x, coords.y - i);
            elem.classList.add(set.class);
            params.arrBlock.push(elem);
        }
    }
}
