import React, { useState } from "react";

//Styled Component
import { StyledTetrisWrapper, StyledTetris } from "./styles/StyledTetris";
//Custom Hooks
import { usePlayer } from "../hooks/usePlayer";
import { useStage } from "../hooks/useStage";

//Components
import Stage from "./Stage";
import Display from "./Display";
import StartButton from "./StartButton";

const Tetris = () => {
  const [dropTime, setDropTime] = useState(null);
  const [gameOver, setGameOver] = useState(false);

  const [player] = usePlayer();
  const [stage, setStage] = useStage(player);

  console.log("re-render!");
  return (
    <div>
      <StyledTetrisWrapper>
        <StyledTetris>
          <Stage stage={stage}></Stage>
          <aside>
            {gameOver ? (
              <Display gameOver={gameOver} text="Game Over"></Display>
            ) : (
              <div>
                <Display text="Score"></Display>
                <Display text="Rows"></Display>
                <Display text="Level"></Display>
              </div>
            )}
            <StartButton></StartButton>
          </aside>
        </StyledTetris>
      </StyledTetrisWrapper>
    </div>
  );
};

export default Tetris;
