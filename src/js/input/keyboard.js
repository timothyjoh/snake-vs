import directions from '../core/directions';

const pushMove = dir => {
  console.log("Moving Direction:", dir)
};

window.addEventListener('keydown', e => {
  switch (e.key) {
    case 'w': case 'ArrowUp':    pushMove(directions.north); break
    case 'a': case 'ArrowLeft':  pushMove(directions.west);  break
    case 's': case 'ArrowDown':  pushMove(directions.south); break
    case 'd': case 'ArrowRight': pushMove(directions.east);  break
  }
});

export default null;