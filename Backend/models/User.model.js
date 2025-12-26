const mongoose =require("mongoose");
const bcyrpt = require("bcrypt")

const userSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    username:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    },
    contact:{
        type:Number,
        minlength:10, 
        maxlength:10,
        required:true
    }
})

const User = mongoose.model('users',userSchema)
module.exports=User