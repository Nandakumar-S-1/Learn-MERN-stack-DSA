const express = require("express");
const app = express();

const movies = [
  { title: "inception", rating: 4 },
  { title: "inception", rating: 5 },
  { title: "inception", rating: 3 },
  { title: "avatar", rating: 5 },
  { title: "avatar", rating: 4 }
];

app.get('/avg',(req,res)=>{
    const name=req.query.title

    const filterd =  movies.filter(n=>n.title===name)
    if(filterd.length===0){
      return res.send('movie with given title not found')
    }
    let totalRating =  filterd.reduce((ac,c)=>ac+c.rating,0)
    let avg= totalRating/filterd.length

    res.json({movie:name,averageRating:avg})
  })

    app.listen(3000)

    //http://localhost:3000/avg?title=inception