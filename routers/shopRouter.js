const express=require("express");

const router=express.Router();

const ShopModel=require("../models/shopModel");



router.post("/createShop",(req,res)=>{
    const {name,doorNo,local,district,state,country,pincode,userId,image,category}=req.body;


    const newShop=new ShopModel({
        name,doorNo,local,district,state,country,pincode,userId,image,category 
    })

    newShop.save().then(result=>{
     return res.json(result)
    }).catch(err=>console.log(err))



})


router.get("/getshops",(req,res)=>{

    ShopModel.find({}).populate("userId").then(result=>{
     
        return res.json(result);

    }).catch(err=>console.log(err));
})

router.post("/myshop",(req,res)=>{

    const {id}=req.body;

    ShopModel.find({userId:id}).then(result=>{
     
        return res.json(result);

    }).catch(err=>console.log(err));
})





module.exports=router;