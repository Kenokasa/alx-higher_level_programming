#!/usr/bin/node

const { argv } = require('process:node');

if (argv.length > 2) {
    console.log(argv[2]);
} else {
    console.log('No argument');
}