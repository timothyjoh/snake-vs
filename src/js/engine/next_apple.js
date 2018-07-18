import { eatsApple } from './collision'
import { rndPoint } from '../core/point'

const nextApple = state => {
  if (eatsApple(state)) return rndPoint(state);
  return state.apple;
}

export { nextApple };