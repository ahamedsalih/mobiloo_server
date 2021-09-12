const mongoose =require("mongoose");


const grocerySchema=new mongoose.Schema({

name:{
    type:String,
    required:true
},
price:{
    type:String,
    required:true
},
image:{
    type:String,
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
unit:{
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


module.exports=mongoose.model("GroceryProducts",grocerySchema);