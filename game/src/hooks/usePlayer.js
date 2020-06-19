import { useState } from "react";

import { randomTetromino } from "../tetrominos";

export const usePlayer = () => {
  //create state for player
  const [player, setPlayer] = useState({
    position: { x: 0, y: 0 },
    tetromino: randomTetromino().shape,
    collided: false,
  });

  return [player];
};
