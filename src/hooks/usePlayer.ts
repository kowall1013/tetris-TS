import { useState } from 'react';

export type PLAYER = {
  pos: {
    x: number;
    y: number;
  },
  tetromino: (string|number)[][];
  collided: boolean;
};

export const usePlayer = () => {
  const [player, setPlayer] = useState({} as PLAYER)

  return { player };
}