
const fs=require('fs')


//fs write data to a file

// fs.writeFile('sample.txt','fs write file',(err,data)=>{
//     if(err){
//         console.log(err);
//     }
//     console.log('success');
// })

// //fs reading data from a file

// fs.readFile('sample.txt','utf-8',(err,data)=>{
//     if(err){
//         console.log(err);
//     }
//     console.log(data);
// })


//fs append file, means add data to a files end

// fs.appendFile('sample.txt','\n this is data has been appended' , 'utf-8' ,(err)=>{
//     if(err){
//         console.log('error ',err);
//     }console.log('data added ');
    
// })

// //fs unlink file
// fs.unlink('sample.txt',(err)=>{
//     if(err){
//         console.log('err',err);
//     }
//     console.log('file deleted');
    
// })

//fs create directory
// fs.mkdir('newDir',(err)=>{
//     if(err){
//         console.log(err);
//         return
//     }
//     console.log('created');
// })

//delete directory
// fs.rm('newDir',{recursive:true},(err)=>{
//     if(err){
//         console.log(err);
//         return
//     }
//     console.log('directory deleted');
// })

/////////////////////multiple files  createion

// const files =[
//     {name:'file1.txt',content:'file one'},
//     {name:'file2.txt',content:'file two'}
// ]
// function createFiles(){
//     files.forEach((file)=>{
//         fs.writeFile(file.name,file.content,(err)=>{
//             if(err){
//                 console.log(err);
//             }
//             console.log(`${file.name} has been created`);
            
//         })
//     })
// }
// createFiles()

/////////////////write current date  and time
// const todaysTime = new Date().toDateString()

// fs.writeFile('file1.txt',todaysTime,(err)=>{
//     if(err){
//         console.log(err);
//     }console.log('write is succesfull');
// })

