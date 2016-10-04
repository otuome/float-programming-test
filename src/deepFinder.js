'use strict';

/*
 * deepFinder
 * 
 * Takes an input and a test function and returns any values
 * in the input *recursively* that pass the test.
 *
 * Eg:
 * 
 *   input: [ 'ant', 'baby', [ 'apple', 'banana', 'carrot' ], { foo: 'aardvark' }, 'allegory' ]
 *   test: value => /^a/i.test( value )
 *   returns: [ 'ant', 'apple', 'aardvark', 'allegory' ]
 * 
 */
const deepSpaceNine = ( input, test, results=[] ) => {
  for (let kind of input) {
    if (typeof kind === 'string' && test(kind)) results.push (kind);

    if (kind.isArray) deepSpaceNine(kind, test, results);

    if (typeof kind === 'object') {
      for (let prop in kind) {
        deepSpaceNine([kind[prop]], test, results);
      }
    }
  }
  
  return results;
};

module.exports = deepSpaceNine;