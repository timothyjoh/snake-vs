const board = document.getElementById('gameboard')
const game = board.getContext('2d')

const draw = (state) => {

  console.log("Drawing", state);

  // x & y position helpers
  const x = col => Math.round(col * board.width / state.cols);
  const y = row => Math.round(row * board.height / state.rows);

  // fill the background
  game.fillStyle = '#333'
  game.fillRect(0, 0, board.width, board.height)

  // green snake
  game.fillStyle = '#0f9'
  state.snake.map(block => game.fillRect(x(block.x), y(block.y), x(1), y(1)))

  // red apple
  game.fillStyle = '#f30'
  game.fillRect(x(state.apple.x), y(state.apple.y), x(1), y(1))

  // if crash
  if (state.snake.length == 0) {
    game.fillStyle = '#f00'
    game.fillRect(0, 0, board.width, board.height)
  }
};

draw(
  { cols: 20, rows: 14,
    snake: [{x: 2, y: 2}, {x: 3, y: 2}],
    apple: {x: 7, y: 10},
  }
)

export { draw };