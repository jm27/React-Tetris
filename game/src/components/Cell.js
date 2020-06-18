import React from "react";
import { StyledCell } from "./styles/StyledCell";
import { TETROMINOS } from "../tetrominos";

const Cell = ({ type }) => (
  <StyledCell color={TETROMINOS['L'].color} type={'L'}></StyledCell>
);

export default Cell;
