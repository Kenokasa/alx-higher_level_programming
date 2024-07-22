#!/usr/bin/node

const { argv } = require('node:process');
const num = parseInt(argv[2]);
let fact = 1;
for (let i = num; i > 0; i--) {
    fact *= i;
}