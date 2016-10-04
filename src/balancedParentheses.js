'use strict';

/*
 * balancedParentheses
 * 
 * Takes an input string and returns true or false depending on if the string
 * has balanced parentheses.
 * 
 * Eg:
 * 
 *   input: '(x + y)'
 *   returns: true
 * 
 *   input: '(x + y'
 *   returns: false
 * 
 *   input: 'foo bar baz'
 *   returns: false
 * 
 *   input: ''
 *   returns: false
 */
module.exports = ( input ) => {
  let balanced = true;

  let chars = input.split('').filter(char =>{
    return /[()]/g.test(char);
  });

  let matches = {
    ')': '(',
  };

  let stack = [];

  if (input.length === 0) return !balanced;

  if (input.search(/[()]/) === -1) return !balanced;

  for (let i = 0; i < chars.length; i++) {
    if (!balanced) return false;

    let char = chars[i];
    if (char in matches) {
      stack[stack.length - 1] === matches[char] ? stack.pop() : balanced = !balanced;
    } else {
      stack.push(char);
    }
  }
  
  return stack.length < 1 ? balanced : !balanced;
};