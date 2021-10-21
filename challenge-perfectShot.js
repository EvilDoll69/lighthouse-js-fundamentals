const moves = ["north", "north", "west", "west", "north", "east", "north"];
const output = [-1, 4];

const finalPosition = function (moves) {
  let x = 0;
  let y = 0;
  let i = 0;

  for (i = 0; i < moves.length; i++) {
    if (moves[i] === "north") {
      y++;
    } else if (moves[i] === "south") {
      y--;
    } else if (moves[i] === "east") {
      x++;
    } else if (moves[i] === "west") {
      x--;
    }
  }
  return [x, y];
};
console.log(finalPosition(moves));
