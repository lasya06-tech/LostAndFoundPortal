const Item=require('../models/Item');

//post report lost item

exports.reportLostItem=async(req,res)=>{

    try{
        const newItem=new Item({
            title:req.body.title,
            description:req.body.description,
            location:req.body.location,
            dateLost:req.body.dateLost,
            contact:req.body.contact,
            status:"lost",
            userId:req.user.id
        })
        await newItem.save();
        res.status(201).json(newItem);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
}

//get all lost items

exports.getAllLostItems=async(req,res)=>{
    try{
        const item=await Item.find({ status: "lost" });
        res.json(item);
    }
    catch(error){
        res.status(400).json({ message: error.message });
    }
}

//get lost item by name

exports.getLostItemByName=async(req,res)=>{
    try{
        const item=await Item.find({title:req.params.title,status:"lost"});
        res.json(item);
    }
    catch(error){
        res.status(400).json({ message: error.message });
    }
}