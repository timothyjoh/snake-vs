import { draw } from '../render/canvas';
import { keyMoves } from '../input/keyboard';
import { next } from '../engine/next';
import { initialState } from '../engine/init';

const loop = () => {
  state = keyMoves(state);
  state = next(state);
  draw(state);
}
const timer = setInterval(loop, 100);

let state = initialState;
draw(state);

export default null;