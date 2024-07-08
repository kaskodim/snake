import { params } from "../constants.js";
import { main } from "./main.js";

export function startGame() {

    const difficultyLevel = document.querySelector('input[name="levelName"]:checked')
    const menuContainer = document.getElementById('menuContainer');
    params.difficultyLevel = difficultyLevel.value;
    menuContainer.remove();
    main();
}