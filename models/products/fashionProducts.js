const mongoose =require("mongoose");


const clothingsSchema=new mongoose.Schema({

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
    type:String
},
color:{
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
category:{
    type:String,
    required:true
},
subcategory:{
    type:String,
    required:true
},

variants:[{
    size:String,
    stocks:Number
}],



},{timestamps:true})


module.exports=mongoose.model("ClothingsProducts",clothingsSchema);