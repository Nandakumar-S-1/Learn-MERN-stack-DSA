const express = require('express')
const app = express()

const movies = [
  { id: 1, title: "Inception", ratings: [5, 4, 5, 4, 5] },
  { id: 2, title: "Interstellar", ratings: [5, 5, 4, 4] },
  { id: 3, title: "Titanic", ratings: [4, 4, 3, 5] }
]

function average(title){
    let res=movies.find(m=>m.title===title)
    if(!res)return null
    let sum= res.ratings.reduce((a,c)=>a+c,0)
    let count=res.ratings.length

    return sum/count
}
app.get('/',(req,res)=>{
    const {title}=req.query
    const avg=average(title)
    if(avg==null)return res.send('movie not found')
    res.send(avg,'this is the average')
})

app.listen(3000)

//http://localhost:3000/?title=Titanic