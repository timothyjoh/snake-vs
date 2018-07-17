import { draw } from '../render/canvas';
draw(
  { cols: 20, rows: 14,
    snake: [{x: 2, y: 2}, {x: 3, y: 2}],
    apple: {x: 7, y: 10},
  }
)
export default null;