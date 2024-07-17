#!/usr/bin/node

const { argv } = require('node:process');

if (parseInt(argv[2])) {
	    for (let i = 0; i < parseInt(argv[2]); i++) {
		    let keno = '';
		            for (let j = 0; j < parseInt(argv[2]); j++) {
				                keno += 'X';
				            }
		           console.log(keno);
		          }
} else {
	    console.log('Missing size');
}
