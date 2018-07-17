const head = a => a[0];
const constrain = size => val => ((val % size) + size) % size;
const nip = a => a.slice(0,a.length-1);

export { nip, head, constrain };