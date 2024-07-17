#!/usr/bin/node

const { argv } = require('node:process');
if (parseInt(argv[2])) {
    const keno = parseInt(argv[2]);
    for (var i=0; i<keno; i++) {
        console.log('C is fun');
    }
  } else {
    console.log('Missing number of occurrences');
  }
