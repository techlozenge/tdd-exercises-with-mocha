
function cherokeeHare(startingPopulation, birthRate, numberOfWeeks) {
    var weeks = [];
    for (i = 1; i <= numberOfWeeks; i++) {
      startingPopulation = startingPopulation * birthRate;
      var x = startingPopulation.toFixed(2) // this simply saves our current sum at 2 decimal places
      weeks.push(x);
    }
    return weeks;
}
module.exports = cherokeeHare;
