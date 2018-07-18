import { rnd } from './algo'

const constrain = size => val => ((val % size) + size) % size;
const touch = p1 => p2 => p1.x == p2.x && p1.y == p2.y
const rndPoint = state => ({ x: rnd(state.cols), y: rnd(state.rows) })

export { touch, rndPoint, constrain };