import React, { useState } from "react";
import { createStage, checkCollision } from "../gameHelpers";

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

  const [player, updatePlayerPos, resetPlayer] = usePlayer();
  const [stage, setStage] = useStage(player, resetPlayer);

  console.log("re-render!");

  const movePlayer = (dir) => {
    if (!checkCollision(player, stage, { x: dir, y: 0 })) {
      updatePlayerPos({ x: dir, y: 0 });
    }
  };
  const startGame = () => {
    //Reset Everything
    setStage(createStage());
    resetPlayer();
    setGameOver(false);
  };
  const drop = () => {
    if (!checkCollision(player, stage, { x: 0, y: 1 })) {
      updatePlayerPos({ x: 0, y: 1, collided: false });
    } else {
      if (player.pos.y < 1) {
        console.log("Game Over!!");
        setGameOver(true);
        setDropTime(null);
      }
      updatePlayerPos({ x: 0, y: 0, collided: true });
    }
  };
  const dropPlayer = () => {
    drop();
  };
  const move = ({ keyCode }) => {
    if (!gameOver) {
      if (keyCode === 37) {
        movePlayer(-1);
      } else if (keyCode === 39) {
        movePlayer(1);
      } else if (keyCode === 40) {
        dropPlayer();
      }
    }
  };
  return (
    <div>
      <StyledTetrisWrapper
        role="button"
        tabIndex="0"
        onKeyDown={(e) => move(e)}
      >
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
            <StartButton callback={startGame}></StartButton>
          </aside>
        </StyledTetris>
      </StyledTetrisWrapper>
    </div>
  );
};

export default Tetris;
