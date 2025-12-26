const express = require('express')
const Grocery = require('../models/Grocery.model')
const router = express.Router()

router.post('/add',async(req,res)=>{
    try {
        const {item, quantity, units, description, price, group, user} = req.body;
        let newGrocery = await Grocery.create({
            item:item,
            quantity:quantity,
            units:units,
            description:description,
            price:price,
            group:group,
            user:user
        })
        if(newGrocery)
        {
            return res.status(200).json({
                success:true,
                message:"Grocery post Add done Successfully",
                data:newGrocery
            })
        }
        else
        {
            return res.status(400).json({
                success:false,
                message:"Grocery post not Add"
            })
        }
    } catch (error) {
        return res.status(400).json({
            success:false,
            message:"Not able to Add Grocery Item",
            error:error.message
        })
    }
})

// get all grocery by group
router.get('/getAllGrocery/:groupId',async(req,res)=>{
    try {
        const {groupId} = req.params;
        // const groupId = req.params.groupId;
        let fetchDataByAllGrocery = await Grocery.find({group:groupId}).populate('group')
        if(fetchDataByAllGrocery)
        {
            return res.status(200).json({
                success:true,
                message:"All Grocery Get By Group done Successfully",
                data:fetchDataByAllGrocery
            })
        }
        else
        {
            return res.status(400).json({
                success:false,
                // message:"All Grocery Get By Group Not Available"
                message:"No groceries found for this grou"
            })
        }
    } catch (error) {
        return res.status(500).json({
            success:false,
            // message:"All Grocery Get By Group not done",
            message:"Not able to fetch groceries by group",
            error:error.message
        })
    }
})

router.get('/getPickedTrueGrocery/:groupId',async(req,res)=>{
    try {
        const {groupId} = req.params;
        let fetchDataByAllGrocery = await Grocery.find({group:groupId , picked:true}).populate('group')
        if(fetchDataByAllGrocery)
        {
            return res.status(200).json({
                success:true,
                message:"All Grocery for picked is true Get By Group done Successfully",
                data:fetchDataByAllGrocery
            })
        }
        else
        {
            return res.status(400).json({
                success:false,
                // message:"All Grocery Get By Group Not Available"
                message:"No groceries found for picked is true this group"
            })
        }
    } catch (error) {
        return res.status(500).json({
            success:false,
            // message:"All Grocery Get By Group not done",
            message:"Not able to fetch groceries for picked is true by group",
            error:error.message
        })
    }
})

router.get('/getPickedFalseGrocery/:groupId',async(req,res)=>{
    try {
        const {groupId} = req.params;
        let fetchDataByAllGrocery = await Grocery.find({group:groupId , picked:false}).populate('group')
        if(fetchDataByAllGrocery)
        {
            return res.status(200).json({
                success:true,
                message:"All Grocery for picked is false Get By Group done Successfully",
                data:fetchDataByAllGrocery
            })
        }
        else
        {
            return res.status(400).json({
                success:false,
                // message:"All Grocery Get By Group Not Available"
                message:"No groceries found for picked is false this group"
            })
        }
    } catch (error) {
        return res.status(500).json({
            success:false,
            // message:"All Grocery Get By Group not done",
            message:"Not able to fetch groceries for picked is false by group",
            error:error.message
        })
    }
})


router.get('/get/:id',async(req,res)=>{
    try {
        const {id} = req.params;
        let fecthDataById = await Grocery.findOne({_id:id})
        if(fecthDataById)
        {
            return res.status(200).json({
                success:true,
                message:"Grocery Get done Successfully",
                data:fecthDataById
            })
        }
        else
        {
            return res.status(400).json({
                success:false,
                message:"Grocery Not Available for this id"
            })
        }
    } catch (error) {
        return res.status(500).json({
            success:false,
            message:"Not able to fetch Grocery",
            error:error.message
        })
    }
})

router.get('/get',async(req,res)=>{
    try {
        let fetchAllData = await Grocery.find()
        if(fetchAllData)
        {
            return res.status(200).json({
                success:true,
                message:"All Grocery Get done Successfully",
                data:fetchAllData
            })
        }
        else
        {
            return res.status(400).json({
                success:false,
                message:"Grocery Not Available"
            })
        }
    } catch (error) {
        return res.status(500).json({
            success:false,
            message:"Not able to fetch Grocery",
            error:error.message
        })
    }
})

router.put('/togglePicked',async(req,res)=>{
    try {
        const {id} =req.body;
    
        let updatePicked = await Grocery.findOne({_id:id})
        if(updatePicked)
        {
            updatePicked.picked= !updatePicked.picked
            await updatePicked.save();
    
            return res.status(200).json({
                success:true,
                message:"Picked Toggle done Successfully",
                data:updatePicked
            })
        }
        else
        {
            return res.status(400).json({
                success:false,
                message:"Grocery Not Update"
            })
        }
    } catch (error) {
        return res.status(500).json({
            success:false,
            message:"Not able to Toggle Grocery",
            error:error.message
        })  
    }
})


router.put('/update',async(req,res)=>{
    try {
        const {id} = req.body
        let updateGrocery = await Grocery.findOne({_id:id})
        if(updateGrocery)
        {
            updateGrocery.item = req.body.item,
            updateGrocery.quantity = req.body.quantity,
            updateGrocery.units = req.body.units,
            updateGrocery.price = req.body.price
            await updateGrocery.save()

            return res.status(200).json({
                success:true,
                message:"Grocery Updation done Successfully",
                data:updateGrocery
            })
        }
        else
        {
            return res.status(400).json({
                success:false,
                message:"Grocery Not Update"
            })
        }
    } catch (error) {
        return res.status(500).json({
            success:false,
            message:"Not able to Update Grocery",
            error:error.message
        })        
    }
})

router.delete('/delete',async(req,res)=>{
    try {
        const {id} = req.body;
        let fetchData = await Grocery.findByIdAndDelete({_id:id})
        if(fetchData)
        {
            return res.status(200).json({
                success:true,
                msg:'Grocery Deleted successfully',
                data:fetchData
            })
        }
        else
        {
            return res.status(400).json({
                success:false,
                msg:'Grocery Not Deleted'
            })
        }
    } catch (error) {
        return res.status(500).json({
            success:false,
            msg:'Not able to Deleted Grocery',
            error:error.message
        })
    }
})

module.exports=router