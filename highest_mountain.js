
// returns the height of the highest mountain from an array of heights
function highestMountain(mountains) {
  var largest = Math.max.apply(Math, mountains);
  return largest;
}
module.exports = highestMountain;
