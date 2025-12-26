
const mongoose = require('mongoose');

async function connectMongo(){

    let url = process.env.MongoDbURL
    await mongoose.connect(url)
    console.log("Database connected successfully");

} 
module.exports=connectMongo