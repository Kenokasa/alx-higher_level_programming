#!/usr/bin/node
const { argv } = require('process:node');

if (argv.length > 2) {
    console.log('Argument found');
} else {
    console.log('No argument');
}