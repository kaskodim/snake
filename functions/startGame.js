import { main } from "./main.js";

export function startGame() {

    const difficultyLevel = document.querySelector('input[name="levelName"]:checked')
    const menuContainer = document.getElementById('menuContainer');
    menuContainer.remove();
    main();
    console.log(difficultyLevel.value);
}