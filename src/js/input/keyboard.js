import directions from '../core/directions';

let nextmoves = [];

const keyMoves = state => {
  const newstate = {
    rows:  state.rows,
    cols:  state.cols,
    moves: state.moves.concat(nextmoves),
    snake: state.snake,
    apple: state.apple
  };
  nextmoves = [];
  return newstate;
};

const pushMove = dir => {
  nextmoves.push(dir);
};

window.addEventListener('keydown', e => {
  switch (e.key) {
    case 'w': case 'ArrowUp':    pushMove(directions.north); break
    case 'a': case 'ArrowLeft':  pushMove(directions.west);  break
    case 's': case 'ArrowDown':  pushMove(directions.south); break
    case 'd': case 'ArrowRight': pushMove(directions.east);  break
  }
});

export { keyMoves };