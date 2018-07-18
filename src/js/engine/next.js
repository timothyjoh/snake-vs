import d from '../core/directions';
import { nextMoves } from './next_move';
import { nextSnake } from './next_snake';
import { nextApple } from './next_apple';

const initialState = {
  cols:  20,
  rows:  14,
  moves: [d.east],
  snake: [{x: 2, y: 2}, {x: 3, y: 2}],
  apple: { x: 16, y: 2 },
};

const next = state => {
  const newstate = {
    rows:  state.rows,
    cols:  state.cols,
    moves: nextMoves(state),
    snake: nextSnake(state),
    apple: nextApple(state)
  };
  // console.log('next', state, newstate);
  return newstate;
};

export {next, initialState};