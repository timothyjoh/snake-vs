import { draw } from '../render/canvas';
import { keyMoves } from '../input/keyboard';
import { next, initialState } from '../engine/next';

const loop = () => {
  state = keyMoves(state);
  state = next(state);
  draw(state);
}
const timer = setInterval(loop, 50);

let state = initialState;
draw(state);

export default null;