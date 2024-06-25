export const settings = {
    cellSizeWidth: 20,
    cellSizeHeight: 20,
    fieldSizeWidth: 440,
    fieldSizeHeight: 440,
    speedDefault: 300,
    speedFast: 45,
};

const NUMBER_SQUARES_X = settings.fieldSizeWidth / settings.cellSizeWidth;
const NUMBER_SQUARES_Y = settings.fieldSizeHeight / settings.cellSizeHeight;

export const NUMBER_SQUARES_ROUNDED_X = Math.round(NUMBER_SQUARES_X) - 2;
export const NUMBER_SQUARES_ROUNDED_Y = Math.round(NUMBER_SQUARES_Y) - 2;
export const ALL_SQUARES = NUMBER_SQUARES_ROUNDED_X * NUMBER_SQUARES_ROUNDED_Y;
export const FIELD_CELL_CENTER_X = Math.round(NUMBER_SQUARES_ROUNDED_X / 2);
export const FIELD_CELL_CENTER_Y = Math.round(NUMBER_SQUARES_ROUNDED_Y / 2);

export const AXIS_X = 'X'; 
export const AXIS_Y = 'Y';
export const SEPARATOR = '-'; 

export const STYLE_FIELD = 'field';
export const STYLE_CELL = 'cell';
export const STYLE_SNAKE_HEAD = 'snakeHead';
export const STYLE_SNAKE_BODY = 'snakeBody';
export const STYLE_FOOD = 'food';

export const snake = [];
