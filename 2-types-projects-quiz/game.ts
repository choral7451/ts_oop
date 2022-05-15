/**
 * Let's make a game 🕹
 */
let position = { x: 0, y: 0};
type Move = 'up' | 'down' | 'left' | 'right';
function move (direction: Move) {
    if(direction === 'up') return position.y++;
    else if(direction === 'down') return position.y--;
    else if(direction === 'left') return position.x--;
    else if(direction === 'right') return position.x++;
    else throw Error('direction Error')
}

console.log(position); // { x: 0, y: 0}
move('up');
console.log(position); // { x: 0, y: 1}
move('down');
console.log(position); // { x: 0, y: 0}
move('left');
console.log(position); // { x: -1, y: 0}
move('right');
console.log(position); // { x: 0, y: 0}
