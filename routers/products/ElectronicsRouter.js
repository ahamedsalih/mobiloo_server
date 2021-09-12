const express=require("express");

const router=express.Router();

const  Electronics=require("../../models/products/electronicsProducts");







router.post("/addElectronics",(req,res)=>{
    const {name,price,image,shopId,description,currentStocks,specification}=req.body;


 
    const electronics=new Electronics({
        name,price,image,shopId,description,currentStocks,specification 
    })

    electronics.save().then(result=>{
     
        return res.json({success:"upload success"})

    }).catch(err=>console.log(err))


})

 
router.post("/myElecProducts",(req,res)=>{
    const {id}=req.body;


 Electronics.find({shopId:id}).then(result=>{


     
        return res.json(result)

    }).catch(err=>console.log(err))


})







module.exports=router;