const mongoose =require("mongoose");


const domainSchema=new mongoose.Schema({


    domainType:{
        type:String,
        required:true
    },

    domainName:{
        type:String,
        required:true
    },

    userId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"UserAuth",
        required:true
    }


},{timestamps:true})


module.exports=mongoose.model("Domain",domainSchema);