#!/usr/bin/node

const { argv } = require('node:process');
if (parseInt(argv[2])) {
    const keno = parseInt(argv[2]);
    for (var i in keno) {
        console.log('C is fun');
    }
  } else {
    console.log('Not a number');
  }
