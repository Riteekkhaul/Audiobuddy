const express = require('express');
const router = express.Router();
const Activity = require("../models/Activity");


router.get('/:id',async(req ,res)=>{
    try{
    
      const result = await Activity.find({id: req.params.id});
      res.status(200).send(result);
    }catch(err){
    res.status(400).json({messege:"something went wrong at server side.."});
   }
})

router.post('/:id',async(req,res)=>{
    try{
        console.log("data recieved from body",req.body);
        const id = req.params.id;
        const post = req.body.post;
        const result = await Activity({id , post});
        result.save();
        console.log("Activity saved!");
        res.status(201).send(result);
    }catch(err){
        res.status(400).json({messege:"something went wrong at server side.."});
    }
  });


module.exports = router;

