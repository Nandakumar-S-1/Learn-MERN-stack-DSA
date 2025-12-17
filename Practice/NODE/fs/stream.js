const fs=require('fs')
fs.writeFileSync('input.txt','this is the data from the file input.txt')

const read=fs.createReadStream('input.txt','utf-8')
const write=fs.createWriteStream('output.txt')

read.pipe(write)
console.log('Data is being streamed from input.txt to output.txt...');