const express = require('express');
const app =express();
const bodyparser =  require('body-parser');
const  mongoose  = require('mongoose');
const UserRoute = require('./routes/UserRoute');
const ActivityRoute = require('./routes/ActivityRoute');
const cors =require('cors');
require('dotenv').config();

// Body-parser middleware
app.use(bodyparser.urlencoded({extended:true}))
app.use(bodyparser.json());
app.use(cors());

// Databse connection 

try{
      mongoose.connect(process.env.mongo_Url,{useUnifiedTopology:true, useNewUrlParser:true},()=>{
            console.log("database connected..!");
      })
}catch{
      console.log("error in connecting db");
}


//   routes
app.use('/api/v1/user',UserRoute);
app.use('/api/v1/activity',ActivityRoute);

app.listen(process.env.Port,()=>{
      console.log("server is running at 8000");
})
