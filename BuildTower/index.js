// Build a pyramid-shaped tower, as an array/list of strings,
// given a positive integer number of floors. A tower block is represented with "*" character.

function towerBuilder(nFloors) {
  const arr = [];
  for (let i = 0; i < nFloors; i++)
    arr.push(
      "".padStart(n - 1 - i, " ") +
        "".padStart(1 + 2 * i, "*") +
        "".padStart(n - 1 - i, " ")
    );
  return arr;
}
