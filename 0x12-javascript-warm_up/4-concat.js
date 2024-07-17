#!/usr/bin/node

const { argv } = require('node:process');

<<<<<<< HEAD
console.log(argv[2] + ' is ' + argv[3]);
=======
console.log(argv.slice(2).join(' is '));
>>>>>>> cf3bd1b31e0326af006e2ad2df9cd73da32a1f4d
