const express=require("express");

const router=express.Router();


const  Fashion=require("../../models/products/fashionProducts")



 

router.post("/addFashion",(req,res)=>{
    const {name,image,shopId,description,category,variants,color,subcategory,price}=req.body;


 
    const fashion=new Fashion({
        name,image,shopId,description,category,variants,color,subcategory,price 
    })

    fashion.save().then(result=>{
     
        return res.json({success:"upload success"})

    }).catch(err=>console.log(err))
})


router.post("/myFashProducts",(req,res)=>{
    const {id}=req.body;


 Fashion.find({shopId:id}).sort("-createdAt").then(result=>{


     
        return res.json(result)

    }).catch(err=>console.log(err))


})

router.post("/myFa",(req,res)=>{
    const {id}=req.body;


 Fashion.find({shopId:id}).sort("-createdAt").then(result=>{


     
        return res.json(result)

    }).catch(err=>console.log(err))


})

















module.exports=router;