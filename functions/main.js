import { addStyleSnake } from "./addStyleSnake.js";
import { createField } from "./createField.js";
import { createFood } from "./createFood.js";
import { createInitialSnake } from "./createInitialSnake.js";

import { move } from "./move.js";
import { updateParams } from "./updateParams.js";
import { params, settings } from "../constants.js";

export function main() {
    createField();
    createInitialSnake();
    addStyleSnake();
    createFood();
    move();

    document.addEventListener('keydown', (event) => {
        if (event.repeat) return;
        updateParams(event.code);
    });

    document.addEventListener('keyup', (event) => {
        if (event.code === 'Space') {
            params.speed = settings.speedDefault;
        }
    });
}
