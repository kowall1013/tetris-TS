import { useState } from 'react';
import type { PLAYER } from './usePlayer';
import { createStage } from '../gameHelpers';

export const useStage = (player: PLAYER) => {
  const [stage, setStage] = useState(createStage())

  console.log(stage);

  return { stage };
}