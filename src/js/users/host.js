/* eslint-env browser, jquery */

// Create a UUID for the current user,
// store it in localStorage
// get it out of localStorage if it exists

import uuid from 'uuid-js';

const session_uuid = uuid.create();
const defaultHost = {
  id: session_uuid.toString(),
  uuid: session_uuid,
  name: 'Host'
};

const getHost = () => {
  const stored = JSON.parse(window.localStorage.getItem('host'));
  if (stored) return stored;
  window.localStorage.setItem('host', JSON.stringify(defaultHost));
  return defaultHost;
};
getHost(); // run once by default

const setName = name => {
  let host = getHost();
  host.name = name;
  window.localStorage.setItem('host', JSON.stringify( host ));
}

const clearHost = () => window.localStorage.removeItem('host');

export { getHost, setName, clearHost };