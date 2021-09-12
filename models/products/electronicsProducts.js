const mongoose =require("mongoose");


const electronicsSchema=new mongoose.Schema({

name:{
    type:String,
    required:true
},
price:{
    type:Number,
    required:true
},
image:{
    type:Array,
    required:true
},
shopId:{
    type:mongoose.Schema.Types.ObjectId,
    ref:"ShopModel",
    required:true
},
description:{
    type:String,
    required:true
},
specification:{
    type:String,
    required:true
},
quantity:{
    type:Number,
    default:1
},
available:{
    type:Boolean,
    default:true
},
currentStocks:{
    type:Number,
    required:true
}

},{timestamps:true})


module.exports=mongoose.model("ElectronicsProducts",electronicsSchema);