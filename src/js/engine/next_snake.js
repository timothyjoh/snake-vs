import { nip } from '../core/algo'
import { rndPoint } from '../core/point'
import { nextHead } from './next_head'
import { eatsApple, hitsSelf } from './collision'

const nextSnake = state => {
  if (state.snake.length == 0) return [rndPoint(state)];
  if (hitsSelf(state)) return [];
  return eatsApple(state) ?
      [nextHead(state)].concat(state.snake)
      : nip([nextHead(state)].concat(state.snake))
}
export { nextSnake };