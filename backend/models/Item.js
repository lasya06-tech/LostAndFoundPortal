const mongoose=require("mongoose");


const itemSchema=new mongoose.Schema({
    title:{
        type:String,
        required:true
    },

    description:{
        type:String,
        required:true
    },

    location:{
        type:String,
        required:true
    },

    dateLost:{
        type:Date,
        required:true
    },
    contact:{
        type:String,
    },
    status:{
        type:String,
        enum:["lost","found"],
        default:"lost"
    },
    userId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"User",
    }
})

module.exports=mongoose.model("Item",itemSchema)