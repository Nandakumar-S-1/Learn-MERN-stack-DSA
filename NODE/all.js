// -------------------Creating a Server Using Express--------------------

// const express = require('express')
// const app = express()

// const port = 2000;

// app.get('/',(req,res)=>{
//     res.send("hello world")
// })

// app.listen(port,()=>{
//     console.log(http://localhost:${port})
// })



// 2. ----------------Creating a Server Without Using Express---------


// const http = require('http')
// const port = 2200;

// const server = http.createServer((req,res)=>{
//     res.statusCode = 200
//     res.setHeader('content-type', 'text/plain')
//     res.end("hello this server without express")
// })

// server.listen(port,()=>{
//     console.log(http://localhost:${port})
// }) 

// . ------------------fs.readFile()---------------

// const fs = require('fs')

// fs.readFile('example.text','utf8',(err,data)=>{
//     if(err){
//         console.error("error occured:",err)
//         return
//     }
//      console.log(data)
// })

// -------------fs readfilesync -------------

// const fs =require('fs')

// try{
// const data = fs.readFileSync('example.text','utf8')
//     console.log(data)
// }catch(err){
//     console.log(err)
// }

// --------fs writefile--------------

// const fs = require('fs')

// fs.writeFile('example.text','this is fs writefile',(err,data)=>{
//     if(err){
//          console.log(err)
//     }
//     console.log('succsess')
// })

// ------------fs writefilesync----------

// const fs = require('fs')
//  try{
// const data = fs.writeFileSync('example.text','this is synchronous method for wi=riting a file')

//    console.log('replaced')
// }catch{
//  console.log('error occured',err)
// }

// --------fs append file creating ------------

// const fs = require('fs')

// fs.appendFile('example.text',"\nthis is an append file", 'utf8',(err)=>{
//     if(err){
//         console.log('error occured:',err)
//     }
//     console.log('added append file')
// })

// ---------------fs appendfilesync--------

// const fs = require('fs')

// try{
// const data = fs.appendFileSync('example.text1','\nthis is apppendfile sync','utf8')
// console.log("added succefully");
// }catch{
//     console.log(err)
// }

// ---------fs unlink--------

// const fs = require('fs')

// fs.unlink('example.text1',(err)=>{
// if(err){
//     console.log(err)
//     return;
// }
// console.log("deleted")
// })

// ---------------------------------

// const fs = require('fs')
// try{
// fs.unlinkSync('example1.text')
// console.log('deleted')
// }catch(err){
// console.log(err)
// }




// -----------fs mkdir-------

// const fs = require('fs')

// fs.mkdir('newdirectory',(err)=>{
//     if(err){
//         console.log('error occurred:',err)
//         return
//     }
//     console.log("created")
// })

// ---------------fs rmdir------------

// const fs = require('fs')

// fs.rmdir('newdirectory',{recursive : true},(err)=>{
//     if(err){
//         console.log('error occurred:',err)
//         return;
//     }
//     console.log("deleted directory")
// })

// ------------create a multiple files using write file-------------

// const { log } = require("console");
// const fs = require("fs");

// const files = [
//   { name: "file1.text", content: "this is the file 1" },
//   { name: "file2.text", content: "this is the file 2" },
//   { name: "file3.text", content: "this is the file 3" }
// ];
// function createFiles() {
//   files.forEach((file) => {
//     fs.writeFile(file.name, file.content, (err) => {
//       if (err) {
//         console.log(error occured: ${file.name}, err);
//       } else {
//         console.log(${file.name},files created);
//       }
//     });
//   });
// }
// createFiles();



// --------------read files paralllely / multiple file reading/ reading asynchrounosly-----------

// const fs = require('fs') 

// const files = ['filee1.text','filee2.text','filee3.text']

// function Readfile(filepath){
//   fs.readFile(filepath,'utf8',(err,data)=>{
//     if(err){
//       console.log('error occurred:',err)

//     }
//     console.log(readed file :'${filepath}:,data)
//     // console.log(data)
//   })
// }
// files.forEach(Readfile)



// --------------create a middleware----------

// const express = require('express')
// const app = express()
// const port = 5000;

// const middleware = (req,res,next)=>{ 
//     console.log(request method : ${req.method},request url : ${req.url})
//     next()
// }

// app.use(middleware)

// app.get('/',(req,res)=>{
//     res.send("hello this is middleware")
// })

// app.listen(port,()=>{
//     console.log(http://localhost:${port})
// })



// ----------------create router middleware-----------

// this code inside the routess directory >> Userroutes.js

// ---------------write current date and time to file --------------


// const fs = require('fs')

// const currentDateTime = new Date().toString()

// fs.writeFile('currentdateandtime.text',currentDateTime,(err)=>{ 
//     if(err){
//         console.log('error occured:',err)  
//     }else{
//         console.log('current date and time write to currentdateandtime.text');
//     }
// })




// -----------write date a string in new file using fs -----------


// const fs = require('fs')

// const date = '27/10/2024'

// fs.writeFile('datefile.text',date,(err)=>{
//     if(err){
//     console.log('error ocuured:',err)
//     }
//     console.log('file created')
// })



// ---------error handling in middleware---------


// const express = require('express')
// const app = express()

// app.use((req,res,next)=>{
//     const err = new Error("something went wrong")
//     next(err)
// })

// app.use((err,req,res,next)=>{
//     console.error(err.message)
//     res.status(500).send(" internal srver error:"+ err.message)
// })

// const port = 3000

// app.listen(port,()=>{
//     console.log(http://localhost:${port})
// })






// -------------path parameter---------------


// const express = require('express')
// const app = express();

// app.get('/users/:userId',(req,res)=>{
//    const userId  = req.params.userId;
//    res.send(welcome:${userId})
// })

// const PORT = 6200;

// app.listen(PORT,()=>{
//     console.log(http://localhost:${PORT})
// })


// ------------query parameter------------

// const express = require('express')
// const app = express()

// app.get('/search',(req,res)=>{
//     const {q,page} = req.query
//     res.send(search query:${q},page:${page})
// })

// const port = 5050
// app.listen(port,()=>{
//     console.log(http://localhost:${port})
// }) 



// ------------event emmitter simple example-----------


// const EventEmitter = require('node:events')

// const myEmitter = new EventEmitter()

// myEmitter.on('event',(a,b)=>{
//     console.log(event received with arguments ${a},${b})
// })

// myEmitter.emit('event','hello','world')





// --------------------------add two values using query params--------------

// const express = require('express')
// const app = express()

// app.get('/add',(req,res)=>{
//     // const num1 = req.query.num1
//     // const num2 = req.query.num2
//     const {num1,num2} = req.query
//     const numb1 = parseFloat(num1)
//     const numb2= parseFloat(num2)
// //     res.send(search query:${q},page:${page})
// // })
//     const sum = numb1+ numb2
//     res.send(sum of ${numb1} and ${numb2} : ${sum})
// })
// app.get("/", (req, res) => {

//     const { num1, num2 } = req.query;
  
//     // if (!num1 || !num2) {
      
//     //     res.status(400)
//     //     res.send("Please provide both num1 and num2 query parameters");
//     // }
  
//     const number1 = parseFloat(num1);
//     const number2 = parseFloat(num2);
  
//   //   if (isNaN(number1) || isNaN(number2)) {
//   //     return res.status(400).send("Both num1 and num2 should be valid numbers");
//   // }
  
//     const sum = number1 + number2;
  
//     res.send(The sum of ${number1} and ${number2} is ${sum});
//   });

// app.listen(1011,()=>{
//     console.log('http://localhost:1011')
// })

// thiaaaaaaaaaaaaa

// const express = require('express')
// const app = express()

// app.get('/',(req,res)=>{
//     const {num1,num2} = req.query
//     const n1 = parseFloat(num1)
//     const n2 = parseFloat(num2)
//     const sum = n1+n2
//     res.send(sum of the numbers are: ${sum})
// })
// app.listen(1011,()=>{
//         console.log('http://localhost:1011')
//     })



// authentication middleware-------------------------------

// Simple authentication middleware
// function authMiddleware(req, res, next) {
//   if (req.session && req.session.user) {
//       // User is authenticated, proceed to the next middleware or route handler
//       next();
//   } else {
//       // User is not authenticated, deny access
//       res.status(401).send('Unauthorized: You need to login');
//   }
// }

// // Applying it to a route
// app.get('/dashboard', authMiddleware, (req, res) => {
//   res.send('Welcome to your dashboard!');
// });


// app.listen(1011,()=>{
//       console.log('http://localhost:1011')
//   })