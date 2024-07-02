import { params, settings } from "../constants.js";

export function setDefaultSpeed(event) {
    if (event.code === 'Space') {
        params.speed = settings.speedDefault;
    }
}