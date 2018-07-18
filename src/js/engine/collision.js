import { touch } from '../core/point'
import { nextHead } from './next_head'

const eatsApple = state => touch(nextHead(state))(state.apple)
const hitsSelf = state => state.snake.find( bodypart => touch(nextHead(state))(bodypart))

export { eatsApple, hitsSelf }