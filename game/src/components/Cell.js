import React from "react";
import { StyledCell } from "./styles/StyledCell";
import { TETROMINOS } from "../tetrominos";

const Cell = ({ type }) => (
  <StyledCell color={TETROMINOS[type].color} type={type}></StyledCell>
);

export default React.memo(Cell);
