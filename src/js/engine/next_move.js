const tail = xs => xs.slice(1)

const nextMoves = state =>
  state.moves.length > 1 ?
    tail(state.moves)
    : state.moves

export default nextMoves;