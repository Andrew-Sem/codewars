// Your code must return true or false (not 'true' and 'false')
// depending upon whether the given number is a Narcissistic number in base 10.
// This may be True and False in your language, e.g. PHP.

// Error checking for text strings or other invalid inputs is not required,
// only valid positive non-zero integers will be passed into the function.

function narcissistic(value) {
  return (
    value
      .toString()
      .split("")
      .reduce((acc, cur) => acc + Math.pow(cur, value.toString().length), 0) ===
    value
  );
}
