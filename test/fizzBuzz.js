'use strict';

const fpt = require( '../index.js' );
const test = require( 'tape' );

test( 'FIZZBUZZ: exports fizzBuzz method', t => {
    t.ok( fpt.fizzBuzz, 'has fizzBuzz export' );
    t.equal( typeof fpt.fizzBuzz, 'function', 'fizzBuzz is a function' );
    t.end();
} );

test( 'FIZZBUZZ: returns a proper array based on input length of 10', t => {
    const result = fpt.fizzBuzz( 10 );
    const expectation = [ 1, 2, 'fizz', 4, 'buzz', 'fizz', 7, 8, 'fizz', 'buzz' ];

    t.ok( result, 'generated a result' );
    t.deepEqual( result, expectation, 'result is correct' );
    t.end();
} );

test( 'FIZZBUZZ: returns a proper array based on input length of 20', t => {
    const result = fpt.fizzBuzz( 20 );
    const expectation = [ 1, 2, 'fizz', 4, 'buzz', 'fizz', 7, 8, 'fizz', 'buzz', 
      11, 'fizz', 13, 14, 'fizzbuzz', 16, 17, 'fizz', 19, 'buzz' ];

    t.ok( result, 'generated a result' );
    t.deepEqual( result, expectation, 'result is correct' );
    t.end();
} );

test( 'FIZZBUZZ: returns an empty array based on input length being an invalid type', t => {
    const result = fpt.fizzBuzz( '10' );
    const expectation = [];

    t.deepEqual( result, expectation, 'result is an empty array' );
    t.end();
} );

test( 'FIZZBUZZ: returns an empty array based on input length of 0', t => {
    const result = fpt.fizzBuzz( 0 );
    const expectation = [];

    t.deepEqual( result, expectation, 'result is an empty array' );
    t.end();
} );