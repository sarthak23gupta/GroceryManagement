const mongoose=require('mongoose')

const GrocerySchema =new mongoose.Schema({
    item:{
        type:String,
        required:true
    },
    quantity:{
        type:Number,
        required:true
    },
    units:{
        type:String,
        required:true,
        enum: ['kg', 'gms', 'mgms']
    },
    description:{
        type:String
    },
    picked:{
        type:Boolean,
        default:false
    },
    price:{
        type:Number,
        default:0
    },
    group:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'Group',
        required:true
    },
    user:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'User',
        required:true
    }
})


const Grocery = mongoose.model('Grocery',GrocerySchema)
module.exports=Grocery