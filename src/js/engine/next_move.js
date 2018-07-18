import { tail } from '../core/algo'

const nextMoves = state =>
  state.moves.length > 1 ?
    tail(state.moves)
    : state.moves

export { nextMoves };