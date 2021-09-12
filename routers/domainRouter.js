const express=require("express");

const router=express.Router();


const Domain=require("../models/Domain")



router.post("/domainNameRegister",(req,res)=>{
    const {domainName,domainType,userId}=req.body;
    
    Domain.findOne({domainName}).then(result=>{
        if(!result){
            const newDomain=new Domain({
                domainName,
                domainType,
                userId
            })

         newDomain.save().then(result=>{
             return res.status(200).json({success:"your domain name created successfully"})
         }).catch(err=>console.log(err))   
        }

        else{
            return res.status(400).json({already:"this domain name is already exists in your region.please try another name"}) 
        }
    }).catch(err=>console.log(err))
    
})


router.post("/getdomains",(req,res)=>{
    const {id}=req.body;

    Domain.findOne({userId:id}).then(result=>{

      return res.json(result)

    }).catch(err=>console.log(err))
})

router.post("/findMyDomain",(req,res)=>{
    const {id}=req.body;

    console.log("id===>",id)

    Domain.findOne({userId:id}).then(result=>{

      if(result){
          return res.json({found:"domain found"})
      }
      else if(!result){
          return res.json({notfound:"domain not found"})
      }

    }).catch(err=>console.log(err))
})




module.exports=router;