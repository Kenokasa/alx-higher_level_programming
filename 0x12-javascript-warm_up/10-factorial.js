#!/usr/bin/node

const { argv } = require('node:process');

const num = parseInt(argv[2]);

function factorial (num) {
    if (num <= 1) {
        return 1;
    } else {
        return num * factorial(num - 1);
    }
}
console.log(factorial(num))