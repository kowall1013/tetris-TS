import { STAGE_HEIGHT, STAGE_WIDTH, TETROMINOS } from "./setup"

export const createStage = () => Array.from(Array(STAGE_HEIGHT), () => Array(STAGE_WIDTH).fill([0, 'clear']));

export const randomTetromino = () => {
  const tetrominos = ['I', 'J', 'L', 'O', 'S', 'T', 'Z'] as (keyof typeof TETROMINOS)[];
  const randTeromino = tetrominos[Math.floor(Math.random() * tetrominos.length)];
  return TETROMINOS[randTeromino];
};