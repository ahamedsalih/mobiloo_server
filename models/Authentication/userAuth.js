const mongoose=require("mongoose");



const userAuthSchema=new mongoose.Schema({
    phoneNumber:{
        type:Number,
        required:true
    },
    name:{
        type:String
    },
    image:{
        type:String,
        default:""
    },

    normalUser:{

        type:Boolean,
        default:false
},
    shopUser:{

        type:Boolean,
        default:false
},
    serviceUser:{

        type:Boolean,
        default:false
},
    webUser:{

        type:Boolean,
        default:false
},
},{timestamps:true})


module.exports=mongoose.model("UserAuth",userAuthSchema);