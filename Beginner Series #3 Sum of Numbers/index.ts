// Given two integers a and b, which can be positive or negative,
// find the sum of all the integers between and including them and return it.
// If the two numbers are equal return a or b.

// Note: a and b are not ordered!

export function getSum(a: number, b: number): number {
  const c = b - a;
  const d = Math.abs(c) / c;
  let sum = b;
  for (let i = 0; i !== c; i += d) sum += a + i;
  return sum;
}

console.log(getSum(-10, -10));
