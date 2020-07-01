import { useState, useEffect, useCallback } from "react";

export const useGameStatus = (cleared) => {
  const [score, setScore] = useState(0);
  const [rows, setRows] = useState(0);
  const [level, setLevel] = useState(0);

  const linePoints = [40, 100, 300, 1200];

  const calcScore = useCallback(() => {
    if (cleared > 0) {
      // Original tetris score calculator
      setScore((prev) => prev + linePoints[cleared - 1] * (level + 1));
      setRows((prev) => prev + cleared);
    }
  }, [level, linePoints, cleared]);

  useEffect(() => {
    calcScore();
  }, [calcScore, cleared, score]);

  return [score, setScore, rows, setRows, level, setLevel];
};
