const express=require("express");

const router=express.Router();

const jwt=require("jsonwebtoken");

const JWT_SECRET=process.env.JWT_SECRET;

const UserAuth=require("../../models/Authentication/userAuth");




router.post("/signup",(req,res)=>{
    const {phoneNumber,name,image,normalUser,serviceUser,shopUser,webUser}=req.body;

    
    UserAuth.findOne({phoneNumber}).then(result=>{
        if(!result){
            const user=new UserAuth({
                phoneNumber,
                name,
                image,
                normalUser,
                serviceUser,
                shopUser,
                webUser 
             })
       
           user.save().then(savedUser=>{
              const token=jwt.sign({_id:savedUser._id},JWT_SECRET)
              const {_id,name,image,phoneNumber,normalUser,serviceUser,shopUser,webUser}=savedUser;
             return res.status(200).json({token,user:{_id,name,image,phoneNumber,normalUser,serviceUser,shopUser,webUser}})
           }).catch(err=>console.log(err)) 
        }
        else{
            return res.json({already:"your mobile number already registered in mobiloo"})
        }
    })
 
 
      
   
     

           


})

router.post("/signin",(req,res)=>{
    const {phoneNumber}=req.body;
 
 
   UserAuth.findOne({phoneNumber}).then(result=>{
       if(!result){
           return res.json({error:"your phone number not registered in mobiloo"})
       }
       else{
        const token=jwt.sign({_id:result._id},JWT_SECRET)
        const {_id,name,image,phoneNumber,normalUser,serviceUser,shopUser,webUser}=result;
       return res.status(200).json({token,user:{_id,name,image,phoneNumber,normalUser,serviceUser,shopUser,webUser}}) 
       }
   }).catch(err=>console.log(err))  



})


router.post("/checkphonenumber",(req,res)=>{
    const {phoneNumber}=req.body;

    UserAuth.findOne({phoneNumber}).then(result=>{
        if(result){
            return res.json({already:"this phone number already exists"})
        }

        else{
            return res.json({new:"new phone number"})
        }
    })
})

router.post("/updateShopUser",(req,res)=>{
    const {userId,data}=req.body;

    console.log("userID---->",userId,data);

    UserAuth.findByIdAndUpdate(userId,{shopUser:data},{new:true}).then(result=>{
        const {_id,name,image,phoneNumber,normalUser,serviceUser,shopUser,webUser}=result;
        return res.status(200).json({user:{_id,name,image,phoneNumber,normalUser,serviceUser,shopUser,webUser}})
    }).catch(err=>console.log(err))
})








module.exports=router;