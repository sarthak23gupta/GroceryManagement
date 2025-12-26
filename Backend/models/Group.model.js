const mongoose=require('mongoose')

const GroupSchema =new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'users',
        required: true
    }
})


const Group = mongoose.model('Group',GroupSchema)
module.exports=Group