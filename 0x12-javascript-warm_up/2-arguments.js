#!/usr/bin/node

const { argv } = require('node:process');

if (argv.length > 2) {
    console.log('Argument found');
} ielse {
    console.log('No argument');
}
