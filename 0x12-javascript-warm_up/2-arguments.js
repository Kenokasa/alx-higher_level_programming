#!/usr/bin/node

const { argv } = require('node:process');

if (args.length === 0) {
    console.log("No argument");
  } else if (args.length === 1) {
    console.log("Argument found");
  } else {
    console.log("Arguments found");
  }