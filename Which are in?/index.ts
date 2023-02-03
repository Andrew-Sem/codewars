// Given two arrays of strings a1 and a2 return a sorted array r in lexicographical order of
// the strings of a1 which are substrings of strings of a2.

function inArray(array1: string[], array2: string[]) {
  const result: string[] = [];
  for (let i = 0; i < array1.length; i++) {
    for (let j = 0; j < array2.length; j++) {
      if (array2[j].includes(array1[i])) result.push(array1[i]);
    }
  }
  return [...new Set(result.sort())];
}
