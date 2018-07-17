import { head, constrain } from '../core/algo'

const nextHead = state => {
  const constrainW = constrain(state.cols);
  const constrainH = constrain(state.rows);
  const theHead = head(state.snake);
  const move = head(state.moves);
  return {
    x: constrainW(theHead.x + move.x),
    y: constrainH(theHead.y + move.y)
  };
};

export default nextHead;