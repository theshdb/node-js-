const { LOADIPHLPAPI } = require('dns');
const { dirname } = require('path');
const path = require('path')

// file name
console.log(path.basename(__filename));

//dir name
console.log(path.dirname(__dirname));

//extension
console.log(path.extname(__filename));

// create path object 
console.log(path.parse(__filename));

//concatenate path
console.log(path.join(__dirname, "test", 'hello.html'));

