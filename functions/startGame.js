import { main } from "./main.js";

export function startGame() {

    const difficultyLevel = document.querySelector('input[name="levelname"]:checked')
    const menuContainer = document.getElementById('menuContainer');
    menuContainer.remove('menuContainer');
    main();
    console.log(difficultyLevel.value)
}