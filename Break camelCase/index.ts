// Complete the solution so that the function will break up camel casing, using a space between words.

// complete the function
function solution(str: string) {
  const arr: string[] = [];
  str
    .split("")
    .forEach((sym) =>
      sym.toUpperCase() === sym ? arr.push(" " + sym) : arr.push(sym)
    );
  return arr.join("");
}
