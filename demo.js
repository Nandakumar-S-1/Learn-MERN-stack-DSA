const fs = require('fs');

console.log('Start');

setTimeout(() => {
  console.log('SetTime out timed');
}, 5000);

let val = setInterval(() => {
  console.log('set interval');
}, 1000);

setTimeout(() => {
  console.log('set time out 1 sec');
}, 1000);

setImmediate(() => {
  console.log('Immediate');
});

fs.readFile(__filename, 'utf8', () => {
  console.log('File read callback (I/O)');
});

fetch('https://jsonplaceholder.typicode.com/posts/1')
  .then(res => res.json())
  .then(() => {
    console.log('Fetch cb');
  })
  .catch(err => console.error('Fetch failed:', err));

console.log('end');
