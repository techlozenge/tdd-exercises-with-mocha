function changeMachine(amount) {
  var billsArray = [20, 10, 5, 1];
  let changeArray = [];
  let str = "";
  for (i = 0; i < billsArray.length; i++) {
      let amt = Math.floor(amount / billsArray[i]);
      amount = amount - (amt * billsArray[i]);
      changeArray.push(amt);
  }
  return(changeArray);
}
module.exports = changeMachine;
