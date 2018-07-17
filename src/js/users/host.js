/* eslint-env browser, jquery */

// Create a UUID for the current user,
// store it in localStorage
// get it out of localStorage if it exists

import R from 'ramda';
import uuid from 'uuid-js';

const session_uuid = uuid.create();
const defaultHost = {
  id: session_uuid.toString(),
  uuid: session_uuid, name: 'Host'
};

const getHost = () => {
  const stored = window.localStorage.getItem('host');
  if (stored) return stored;
  window.localStorage.setItem('host', defaultHost);
  return defaultHost;
};

const setName = name => window.localStorage.setItem('host',
    R.merge(getHost(), { name: name }));

    getHost(); // run once by default

export { getHost, setName };