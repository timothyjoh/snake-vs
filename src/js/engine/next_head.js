import { head } from '../core/algo'
import { constrain, rndPoint } from '../core/point'

const nextHead = state => {
  if (state.snake.length == 0) return rndPoint(state);
  const constrainW = constrain(state.cols);
  const constrainH = constrain(state.rows);
  const theHead = head(state.snake);
  const move = head(state.moves);
  return {
    x: constrainW(theHead.x + move.x),
    y: constrainH(theHead.y + move.y)
  };
};

export { nextHead };