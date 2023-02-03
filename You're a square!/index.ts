// Given an integral number, determine if it's a square number:
// The tests will always use some integral number, so don't worry about that in dynamic typed languages.

export default function isSquare(n: number): boolean {
  if (n < 0) return false;
  return Math.sqrt(n) === Math.ceil(Math.sqrt(n));
}

console.log(isSquare(1));
