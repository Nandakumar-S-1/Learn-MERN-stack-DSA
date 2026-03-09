const express = require('express')
const app = express()
const users = [
    { id: 1, name: "Sreesha", role: "Admin", city: "Kochi" },
    { id: 2, name: "Anu", role: "User", city: "trivandrum" },
    { id: 3, name: "Rahul", role: "Manager", city: "Calicut" },
    { id: 4, name: "Meera", role: "User", city: "Kochi" }
]

app.get('/',(req,res)=>{
    const {id,name,role,city}=req.query
    let result = users.filter(u=>{
        if(id && u.id!==Number(id))return false
        if(name && u.name.toLowerCase()!==name.toLowerCase())return false
        if(role&& u.role.toLowerCase()!==role.toLowerCase())return false
        if(city&& u.city.toLowerCase()!==city.toLowerCase())return false
        return true
    })
    res.json(result)
})

app.listen(3000)

// http://localhost:3000/?city=kochi&role=user