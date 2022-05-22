const express = require('express');
const app =express();
const bodyparser =  require('body-parser');
const  mongoose  = require('mongoose');
const UserRoute = require('./routes/UserRoute');
const ActivityRoute = require('./routes/ActivityRoute');
const cors = require('cors');


// Body-parser middleware
app.use(bodyparser.urlencoded({extended:true}))
app.use(bodyparser.json());
app.use(cors());
// Databse connection 

mongoose.connect('mongodb://localhost:27017/Minor-project',{useUnifiedTopology:true, useNewUrlParser:true},()=>{
      console.log("database connected..!");
})

//   routes
app.use('/api/v1/user',UserRoute);
app.use('/api/v1/activity',ActivityRoute);

app.listen(8000,()=>{
      console.log("server is running at 8000");
})
