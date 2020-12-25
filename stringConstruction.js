function stringConstruction(s) {
  // Create unique string using Set Object and compare it's length with original string
  // If length of original string is same as size of new Set Object return the length of string
  let new_str = new Set(s);
  if (new_str.size === s.length) return s.length;

  //Initialize new array
  let new_string = [];

  // Loop through the original string and only append unique characters
  // to new array
  for (let index = 0; index < s.length; index++) {
    const element = s[index];
    if (!new_string.includes(element)) {
      new_string.push(element);
    }
  }

  //Return the length of the new array
  return new_string.length;
}

// driver code return 4
console.log(stringConstruction("abcd"));
