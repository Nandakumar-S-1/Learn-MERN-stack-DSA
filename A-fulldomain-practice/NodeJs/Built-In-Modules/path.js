//1) Path module provides utilities to work with file and directory paths

const path = require('path')

//2)convinience variables __dirname & __filename

console.log(__dirname)
console.log(__filename);

//3) to get the current file and directory name 
console.log('current directory :',path.basename(__dirname))
console.log('current file: ',path.basename(__filename));

// 4) to get the extension of the file 
console.log('extension',path.extname(__filename));

// 5)to get an object that contains all the details about the current path 
console.log('parse object',path.parse(__filename));
console.log(' (accesing data in parse object using . like all objects):- ',path.parse(__filename).name);

//6) to find a path is absolute or relative

console.log(path.isAbsolute(__filename)); //returns true since is absolute path
console.log(path.isAbsolute('./data.json')); // return false since it is relative path


//7) used for several purposes ,takes 3 arguments, it will normalize the path with a slash (delimitter) and concatinate

console.log(path.join('folder1','folder2','index.js'));
console.log(path.join('/folder1','folder2','index.js'));
console.log(path.join('/folder1','//folder2','index.js'));
console.log(path.join('/folder1','//folder2','../index.js'));
console.log(path.join(__dirname,'data.json'));
console.log(path.join(__filename,'index.js'));

