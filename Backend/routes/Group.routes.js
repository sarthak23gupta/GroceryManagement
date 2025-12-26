const express = require('express')
const Group = require('../models/Group.model')
const router = express.Router()

router.post('/add',async(req,res)=>{
    try {
        const {name , user} = req.body
         if(!name || !user) {
            return res.status(400).json({
                success:false,
                message:"Name and user are required"
            });
        }
        // let newGroup = await new Group.create({
        //     name:name
        // })
        let newGroup = await Group.create({
            name:name,
            user:user
        })
        if(newGroup)
        {
            return res.status(200).json({
                success:true,
                message:"Group created successfully",
                data:newGroup
            })
        }
        else
        {
            return res.status(400).json({
                success:false,
                message:"can not created gropu"
            })
        }
    } catch (error) {
        return res.status(500).json({
            success:false,
            message: "not able to  created gropu",
            error:error.message
        })
    }
})

// get all group by user
router.get('/getAllGroup/:userId',async(req,res)=>{
    try {
        const {userId} = req.params;
        let fetchDataByAllGroup = await Group.find({user:userId}).populate('user','-password')
        if(fetchDataByAllGroup)
        {
            return res.status(200).json({
                success:true,
                message:"Groups fetched successfully for this user",
                data:fetchDataByAllGroup
            })
        }
        else
        {
            return res.status(400).json({
                success:false,
                // message:"All Grocery Get By Group Not Available"
                message:"No groups found for this user"
            })
        }
    } catch (error) {
        return res.status(500).json({
            success:false,
            // message:"All Grocery Get By Group not done",
            message:"Not able to fetch groups for this user",
            error:error.message
        })
    }
})


router.get('/get/:id',async(req,res)=>{
    try {
        const {id} = req.params
        let getGroupById = await Group.findOne({_id:id}).populate('user','-password')
        if(getGroupById)
        {
            return res.status(200).json({
                success:true,
                message:"Get Group By Id is successfully",
                data:getGroupById
            })
        }
        else
        {
            return res.status(400).json({
                success:false,
                message:"can not get group"
            })
        }
    } catch (error) {
        return res.status(500).json({
            success:false,
            message:"not able to get group by id",
            error:error.message
        })
    }
})

router.get('/getAll',async(req,res)=>{
    try {
        let allGroup = await Group.find()
        if(allGroup)
        {
            return res.status(200).json({
                success:true,
                message:"Get All Group Done successfully",
                data:allGroup
            })
        }
        else
        {
            return res.status(400).json({
                success:false,
                message:"can not get all groups"
            })
        }
    } catch (error) {
        return res.status(500).json({
            success:false,
            message:"not able to get groups",
            error:error.message
        })
    }
})

router.put('/updateGroupName',async(req,res)=>{
    try {
        const {id} = req.body
        let updateGrpName =await Group.findOne({_id:id}).populate('user','-password')
        if(updateGrpName)
        {
            updateGrpName.name=req.body.name
            await updateGrpName.save()
    
            return res.status(200).json({
                success:true,
                message:"Update Group Name successfully",
                data:updateGrpName
            })
        }
        else
        {
            return res.status(400).json({
                success:false,
                message:"can not update name for group"
            })
        }
    } catch (error) {
        return res.status(500).json({
            success:false,
            message:"not able to update name for group",
            error:error.message
        })
    }
})

router.delete('/delete/:id',async(req,res)=>{
    try {
        const{id} =req.params
        let deleteGroup = await Group.findByIdAndDelete({_id:id}).populate('user','password')
        if(deleteGroup)
        {
            return res.status(200).json({
                success:true,
                message:"Delete Group Name successfully",
                data:deleteGroup
            })
        }
        else
        {
            return res.status(400).json({
                success:false,
                message:"can not delete group"
            })
        }
    } catch (error) {
        return res.status(500).json({
            success:false,
            message:"not able to delete name for group",
            error:error.message
        })
    }
})

module.exports=router