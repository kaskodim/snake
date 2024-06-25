import { NUMBER_SQUARES_ROUNDED_X, NUMBER_SQUARES_ROUNDED_Y } from "../constants.js";

export function createRandomCoordsArr() {
    const ELEM_X = Math.floor(Math.random() * NUMBER_SQUARES_ROUNDED_X) + 1;
    const ELEM_Y = Math.floor(Math.random() * NUMBER_SQUARES_ROUNDED_Y) + 1;
    return [ELEM_X, ELEM_Y];
  }