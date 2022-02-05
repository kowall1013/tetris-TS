import { STAGE_HEIGHT, STAGE_WIDTH } from "./setup"

export const createStage = () => Array.from(Array(STAGE_HEIGHT), () => Array(STAGE_WIDTH).fill([0, 'clear']));