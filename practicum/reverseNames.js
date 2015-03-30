/* Nathan Samano
 * CMP 237
 * Problem 4
 */

print();

// no middle initial
print(
  "Hopper, Grace\nMcCarthy, John\nRitchie, Dennis"
    .replace(/([\w ]+), ([\w ]+)/g, "$2 $1"));
print();

// with middle initial
print(
  "Hopper, Grace M.\nMcCarthy, John L.\nRitchie, Dennis P."
    .replace(/([\w ]+), ([\w ]+) (\w{1}[.])/g, "$2 $3 $1"));
print();

// not accept full middle name
print(
  "Hopper, Grace Marie\nMcCarthy, John L.\nRitchie, Dennis P."
    .replace(/([\w ]+), ([\w ]+) (\w{1}[.])/g, "$2 $3 $1"));
print();

// middle initial optional (close but no cigar)
print(
  "Hopper, Grace Marie\nMcCarthy, John L.\nRitchie, Dennis"
    .replace(/([\w ]+), ([\w ]+) (\w{0,1}[.])/g, "$2 $3 $1"
             //([\w ]+), ([\w ]+)/g, "$2 $1"
      ));
print();

