// Move the first letter of each word to the end of it,
// then add "ay" to the end of the word. Leave punctuation marks untouched.

export const pigIt = (a: string): string => {
  return a
    .split(" ")
    .map((word) => word.slice(1) + word[0])
    .map((word) => (!/[a-zA-Z]/.test(word[0]) ? word : word + "ay"))
    .join(" ");
};

console.log(pigIt("Pig latin is cool !"));
