/* eslint-env browser, jquery */

// import R from 'ramda';
import { getHost, setName } from './users/host';

user = getHost();
console.log(user);
setName('Timo');
console.log(user);
