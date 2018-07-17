/* eslint-env browser, jquery */

import { getHost, setName, clearHost } from './users/host';
import './input/keyboard';
import {draw} from './render/canvas';

window.cheet('x x x', () => {
  clearHost();
  window.location = window.location.href;
});

draw(
  { cols: 20, rows: 14,
    snake: [{x: 2, y: 2}, {x: 3, y: 2}],
    apple: {x: 7, y: 10},
  }
)
