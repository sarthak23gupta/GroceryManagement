const express=require('express')
const PORT =4444;
const path = require('path')
const dotenv = require('dotenv')
dotenv.config()
const app=express()
const mongoose = require('mongoose');
const bcrypt = require("bcrypt")
const cors = require("cors");
const jwt=require("jsonwebtoken")
const connectMongo = require('./database/db');

const Grocery = require('./models/Grocery.model');
const Group = require('./models/Group.model');
const User = require('./models/User.model');

const groceryRouter=require('./routes/Grocery.routes');
const groupRouter=require('./routes/Group.routes');
const userRouter=require('./routes/User.routes');
const {swaggerUi, swaggerSpec, swaggerConfig} = require('./swagger/config.swagger')
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));

// app.use(express.static(path.join(__dirname,'public')))
app.use(express.json())
app.use(express.urlencoded())
app.use(cors({
  origin: [process.env.allowed_origin],
  credentials: true
}));

connectMongo().then(()=>{
    app.listen(PORT,()=>{
        console.log(`http://localhost:`+PORT);
        console.log('http://localhost:'+PORT + `/api-docs`);
    })
})
.catch(err=>{
    throw new Error(err)
})

app.use('/grocery',groceryRouter)
app.use('/group',groupRouter)
app.use('/user',userRouter)