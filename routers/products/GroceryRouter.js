const express=require("express");

const router=express.Router();


const Grocery=require("../../models/products/GroceryProducts")



router.post("/addGrocery",(req,res)=>{
    const {name,image,shopId,description,currentStocks,unit,price}=req.body;


 
    const grocery=new Grocery({
        name,image,shopId,description,unit,currentStocks,price 
    })

    grocery.save().then(result=>{
     
        return res.json({success:"upload success"})

    }).catch(err=>console.log(err))
})
 


router.post("/myGroProducts",(req,res)=>{
    const {id}=req.body;


 Grocery.find({shopId:id}).then(result=>{


     
        return res.json(result)

    }).catch(err=>console.log(err))


})










module.exports=router;