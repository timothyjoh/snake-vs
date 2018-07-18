import d from '../core/directions';

const initialState = {
  cols:  40,
  rows:  28,
  moves: [d.east],
  snake: [{x: 2, y: 2}, {x: 3, y: 2}],
  apple: { x: 16, y: 2 },
};

export { initialState };