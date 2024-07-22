#!/usr/bin/node

const { argv } = require('node:process');

if (parseInt(argv[2]) && parseInt(argv[3])) {
  console.log(parseInt(argv[2]) + parseInt(argv[3]));
} else {
  console.log('NaN');
}
