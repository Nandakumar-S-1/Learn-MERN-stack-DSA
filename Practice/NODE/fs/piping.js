const fs=require('fs')
const readStream= fs.createReadStream('file1.txt')
const writeStream=fs.createWriteStream('file2.txt')
readStream.pipe(writeStream)