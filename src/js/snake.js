/* eslint-env browser, jquery */

import { getHost, setName, clearHost } from './users/host';
import './gameloop/gameloop';

window.cheet('x x x', () => {
  clearHost();
  window.location = window.location.href;
});