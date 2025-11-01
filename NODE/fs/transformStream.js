//Transform Stream

const {Transform} = require('stream')

const upperCase = new Transform({
    transform(chunk,encoding,cb){
        this.push(chunk.toString().toUpperCase())
        cb()
    }
})

process.stdin.pipe(upperCase).pipe(process.stdout)