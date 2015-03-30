/* Nathan Samano
 * CMP 237
 * Problem 0
 */

// define global variable
var global = "global";

(function() {
  // define local variable
  var local = "local";
  // display that both local and global are defined
  print("Inside function " + local + " " + global);
})();

// display that local is not defined outside of scope
// uncomment this line to prove local is not defined outside function
//print("Outside function " + local + " " + global);
