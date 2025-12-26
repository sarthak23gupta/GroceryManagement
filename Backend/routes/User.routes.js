const express=require('express')
const User= require('../models/User.model')
const router =express.Router()
const bcrypt = require("bcrypt")
const jwt =require('jsonwebtoken')
const JWT_SECRET = process.env.Jwt_Secret_Key

router.post('/signup',async(req,res)=>{
    try {
        const {name, username, email, password, contact} = req.body
    
        let EmailValue =await User.findOne({email:email})
        if(EmailValue)
        {
            return res.status(409).json({
                success:false,
                msg:"Email Already Exist"
            })
        }
        let UsernameValue =await User.findOne({username:username})
        if(UsernameValue)
        {
            return res.status(409).json({
                success:false,
                msg:"Username Already Exist"
            })
        }
        if(!name.trim() || !username.trim() || !email.trim() || !password.trim() || !contact.trim())
        {
            return res.status(409).json({
                success:false,
                msg:"Fill blank details "
            })
        }   

        const hash = await bcrypt.hash(password,10)
      
        let Value =await User.create({
            email:email,
            password:hash,
            name:name,
            username:username,
            contact:contact
        })
        const userData = {email:email, name:name, username:username, contact:contact}
        const token = jwt.sign(
            {
                id:Value._id,
                email:Value.email
            },
            JWT_SECRET,
            {
                expiresIn: '1h'
            }
        )
        return res.status(200).json({
            success:true,
            msg:'SignUp Successfully',
            // details:userData,
            token:token
        })

    } catch (error) {
        return res.status(500).json({
            success:false,
            msg:'SignUp Failed',
            error:error.message
        })
    }
})

router.post('/login',async(req,res)=>{
    try {
        const {email,password}=req.body
        let value =await User.findOne({
            email:email
        })

        if(!value)
        {
            return res.status(400).json({
                success:false,
                msg:"Invalid credientials"
            })
        }

        const match = await bcrypt.compare(password,value.password)
       
        if(!match)
        {
            return res.status(400).json({
                success:false,
                msg:"Invalid credientials"
            }) 
        }
        const { password: _ , ...userData } = value._doc
        const token = jwt.sign(
            {
                id:value._id,
                email:value.email
            },
            JWT_SECRET,
            {
                expiresIn: '1h'
            }
        )
        return res.status(200).json({
                success:true,
                msg:'Login Successfully',
                // details:userData,
                // details:value
                token:token
            })
    } catch (error) {
        return res.status(500).json({
            success:false,
            msg:'Login Failed'
        })
    }
})

module.exports=router