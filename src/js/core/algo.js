const head = a => a[0];
const tail = xs => xs.slice(1)
const nip = a => a.slice(0,a.length-1);
const rnd = max => Math.floor(Math.random() * Math.floor(max))

export { nip, head, tail, rnd };