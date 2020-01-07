
const ReadLine = require('readline');

const rl = ReadLine.createInterface({
    input: process.stdin,
    output: process.stdout
});
var x;

rl.on('line', (x,y) => console.log(`input 1: ${x} \ninput2: ${y}`));

console.log(x);