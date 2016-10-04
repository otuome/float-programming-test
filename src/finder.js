'use strict';

/*
 * finder
 * 
 * Takes an input and a test function and returns any values in
 * the input that pass the test.
 * 
 * Eg:
 * 
 *   input: [ 'ant', 'baby', [ 'apple', 'banana', 'carrot' ], { foo: 'aardvark' }, 'allegory' ]
 *   test: value => /^a/i.test( value )
 *   returns: [ 'ant', 'allegory' ]
 * 
 */
module.exports = ( input, test ) => {
  let results = [];

  for (let i = 0; i < input.length; i++) {
    var char = input[i];
    if (test(char) && typeof char !== 'object') {
      results.push(char);
    }
  }
  
  return results;
};