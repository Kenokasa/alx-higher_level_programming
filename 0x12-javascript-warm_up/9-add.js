#!/usr/bin/node

const { argv } = require('node:process');

function add (a, b) {
  return a + b;
}
if (parseInt(argv[2]) && parseInt(argv[3])) {
  console.log(add(parseInt(argv[2]), parseInt(argv[3])));
} else {
  console.log('NaN');
}
