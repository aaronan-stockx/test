//testing node
//finding memory
const os = require('os');

var totalMemory = os.totalmem();
var freeMemory = os.freemem();


console.log(`Total Memory ${totalMemory}`);
console.log(`Total Memory ${freeMemory}`);
