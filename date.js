/* Nathan Samano
 * CMP 237
 * Problem 4
 */

// present time
var now = new Date().getTime();
print("now: " + now);
// my age
var bdate = new Date("9/4/1990").getTime();
print("bdate: " + bdate);
// my age is older than the present time
if (now - now > now - bdate)
  print("Now is older: " + now);
else
  print("My bdate is older: " + bdate);
