import { draw } from '../render/canvas';
import { next, initialState } from '../engine/next';

let state = initialState;

const loop = () => {
  state = next(state);
  draw(state);
}
const timer = setInterval(loop, 100);

draw(state); //initial draw

export default null;