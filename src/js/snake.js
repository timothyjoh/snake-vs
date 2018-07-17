/* eslint-env browser, jquery */

// import R from 'ramda';
import { getHost, setName, clearHost } from './users/host';


cheet('r e s e t', () => {
  clearHost();
  window.location = window.location.href;
});
