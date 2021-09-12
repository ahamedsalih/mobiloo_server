const mongoose=require("mongoose");



const shopSchema=new mongoose.Schema({
  
    name:{
        type:String,
        required:true
    },
    doorNo:{
        type:String,
        required:true
    },
    local:{
        type:String,
        required:true
    },
    district:{
        type:String,
        required:true
    },
    state:{
        type:String,
        required:true
    },
    country:{
        type:String,
        required:true
    },
    pincode:{
        type:Number,
        required:true
    },
    image:{
        type:String,
        required:true
    },
    category:{
        type:String,
        required:true
    },
    verified:{
        type:Boolean,
        default:false
    },
    userId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"UserAuth",
        required:true
    }


},{timestamps:true})


module.exports=mongoose.model("ShopModel",shopSchema);