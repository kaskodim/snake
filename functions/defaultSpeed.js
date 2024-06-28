import { parameters, settings } from "../constants.js";

export function defaultSpeed(event) {
    if (event.code === 'Space') {
        parameters.speed = settings.speedDefault;
    }
}