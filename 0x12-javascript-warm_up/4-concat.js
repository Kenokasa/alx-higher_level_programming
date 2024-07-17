#!/usr/bin/node

const { argv } = require('node:process');

console.log(argv.slice(2).join('is'));