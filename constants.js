export const settings = {
    cellSizeWidth: 20,
    cellSizeHeight: 20,
    fieldSizeWidth: 420,
    fieldSizeHeight: 420,
    speedDefault: 300,
    speedFast: 45,
};

export const parameters = {
    direction: '',
    speed: settings.speedDefault,
    food: '',
}

export const CLASS_NAMES = {
    FIELD: 'field',
    CELL: 'cell',
    SNAKE_HEAD: 'snakeHead',
    SNAKE_BODY: 'snakeBody',
    FOOD: 'food',
}

export const DIRECTIONS_MOV = {
    RIGHT: 'right',
    LEFT: 'left',
    UP: 'up',
    DOWN: 'down',
}

const NUMBER_SQUARES_X = settings.fieldSizeWidth / settings.cellSizeWidth;
const NUMBER_SQUARES_Y = settings.fieldSizeHeight / settings.cellSizeHeight;

export const NUMBER_SQUARES_ROUNDED_X = Number.parseInt(NUMBER_SQUARES_X);
export const NUMBER_SQUARES_ROUNDED_Y = Number.parseInt(NUMBER_SQUARES_Y);
export const ALL_SQUARES = NUMBER_SQUARES_ROUNDED_X * NUMBER_SQUARES_ROUNDED_Y;
export const FIELD_CELL_CENTER_X = Math.round(NUMBER_SQUARES_ROUNDED_X / 2);
export const FIELD_CELL_CENTER_Y = Math.round(NUMBER_SQUARES_ROUNDED_Y / 2);

export const AXIS_X = 'X';
export const AXIS_Y = 'Y';
export const SEPARATOR = '-';

export const snake = [];