const mongoose=require('mongoose')

const User = new mongoose.Schema({
    name:{
        type:String,
    required:true
    },
    age:{
        type:Number,
        required:false
    }
})

const st =mongoose.model('student',User)
module.exports= st