/* Nathan Samano
 * CMP 237
 * Problem 1
 * **Bonus**
 */

var stock = "1 lemon, 2 cabbages, and 101 eggs";
// to test for the case 101
var zilli = "1 lemon, 2 cabbages, and 102 eggs";
function minusOne(match, amount, unit) {
  amount = Number(amount) - 1;
  if (amount == 1) // only one left, remove the 's'
    unit = unit.slice(0, unit.length - 1);
  else if (amount == 0)
    amount = "no";
  // if the remainder is over 100 print zillions of instead of #
  else if (amount > 100)
    amount = "zillions of";
  return amount + " " + unit;
}
// shows amount is displayed at 100
print(stock.replace(/(\d+) (\w+)/g, minusOne));
// shows amount over 100 displays zillions of
print(zilli.replace(/(\d+) (\w+)/g, minusOne));
