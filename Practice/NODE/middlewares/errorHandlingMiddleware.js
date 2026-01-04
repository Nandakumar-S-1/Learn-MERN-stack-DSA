const express =require('express')
const app=express()

function errorHandler(err, req, res, next) {
  console.error(err.stack || err.message)

  res.status(err.status || 500).json({
    success: false,
    message: err.message || 'Internal Server Error'
  })
}


app.get('/', (req, res) => {
  throw new Error('Something went wrong')
})

// MUST be last middleware
app.use(errorHandler)

app.listen(3000)




// const express=require('express')
// const app=express()

// app.use((req,res,next)=>{
//     const err=new Error('Something went wrong')
//     next(err)    
// })

// app.use((err,req,res,next)=>{
//     console.error(err.message);
//     res.status(500).send('Internal Server error: ',err.message)    
// })

// const port =3000
// app.listen(port,()=>{
//     console.log(`server is runing in http://localhost:${port}`);
// })