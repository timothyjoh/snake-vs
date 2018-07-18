import { nip } from '../core/algo'
import nextHead from './next_head'

const nextSnake = state => {
  return nip([nextHead(state)].concat(state.snake))
}

export default nextSnake;