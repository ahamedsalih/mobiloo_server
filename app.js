const express=require("express");

const app=express();

const mongoose = require("mongoose");

require("dotenv").config();


const PORT = process.env.port || 7000;



// db connection
mongoose.connect(process.env.MONGOURI, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
    useFindAndModify: true,
  })
  .then(() => {
    console.log("db connected");
  })
  .catch((err) => {
    console.log("db disconnected");
  });

//   var reqTimer = setTimeout(function wakeUp() {
//   request("https://mobiloo.herokuapp.com", function() {
//      console.log("WAKE UP DYNO");
//   });
//   return reqTimer = setTimeout(wakeUp, 1200000);
// }, 1200000);


//for json data send 
app.use(express.json());







//All Routers

app.use(require("./routers/Authentication/authRouter"));
app.use(require("./routers/domainRouter"));
app.use(require("./routers/shopRouter"));
app.use(require("./routers/products/ElectronicsRouter"));
app.use(require("./routers/products/GroceryRouter"));
app.use(require("./routers/products/FashionProducts"));





app.listen(PORT,()=>{
    console.log(`server running on port ${PORT} `)
})