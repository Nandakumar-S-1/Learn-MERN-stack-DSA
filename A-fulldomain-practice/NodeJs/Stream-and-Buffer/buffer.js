//buffer contain raw binary data
//it is like a waiting point for the chunks of data that have to be transmitted.
//for example in youtube video the video will play if the buffer is full and it will show a loading screen because the data have to fill the buffer to play it.
const buffer = new Buffer.from('Nandakumar s','utf8')

console.log(buffer,'hexa decimal representation');
console.log(buffer.toJSON(),'json ');
console.log(buffer.toString(),'string itself')

buffer.write('ashika')
console.log(buffer.toString(),'new data overwrites existing')