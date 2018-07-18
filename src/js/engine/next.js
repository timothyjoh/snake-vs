import { nextMoves } from './next_move';
import { nextSnake } from './next_snake';
import { nextApple } from './next_apple';

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

export { next };