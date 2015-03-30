/* Nathan Samano
 * CMP 237
 * Problem 7
 */

// array of objects with number field
var arr = "[\n " + [
  '{ "num": 4}',
  '{ "num": 12}'
].join(",\n ") + "\n]";

arr = JSON.parse(arr);

// reduce the numbers to their sums
print(JSON.stringify(arr.reduce(function(i, j) {
  return i.num + j.num;
})));
