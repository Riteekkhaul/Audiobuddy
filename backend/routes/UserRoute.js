const express = require('express');
const { find } = require('../models/UserModal');
const router = express.Router();
const User = require('../models/UserModal');

router.get('/:id',async(req ,res)=>{
      try{
        let id = req.params.id;
        const result = await User.findById(id);
        res.status(200).send(result);
      }catch(err){
      res.status(400).json({messege:"something went wrong at server side.."});
     }
})

router.post('/register',async(req,res)=>{
  try{
      console.log("data recieved from body",req.body);
      const result = await User(req.body);
      result.save();
      console.log("Sign-Up success!");
      res.status(201).send(result);
  }catch(err){
      res.status(400).json({messege:"something went wrong at server side.."});
  }
});


router.post('/login',async(req,res)=>{
    try{
        console.log("data recieved from body",req.body);
        const { email , password } = req.body;
        var result = await User.findOne({email});
        console.log("reached here", result);
        if(result){
            if(result.password == password){
                var result = result._id;
                res.status(200).send({messege: "login success..!", result});
            }else{
                res.status(401).json({messege:"Sorry...Invalid Credentials!"});   
            }
        }
       else{
        res.status(400).json({messege:"Sorry...User Not Found..!"});
       }
    }catch(err){
        res.status(400).json({messege:"something went wrong at server side.."});
    }
  });
  

router.delete('/:id',async(req,res)=>{
      try{
          let id = req.params.id;
          const result = await User.findById(id);
          result.delete();
          res.status(200).send({ messege:"User Deleted successfully..!"});
      }catch(err){
          res.status(400).json({messege:"something went wrong at server side.."});
      }
    })

    
router.put('/:id',async(req,res)=>{
      try{
            let id = req.params.id;
            const result = await User.findById(id);
            if (result) {
                result.name = req.body.name ;
                result.email = req.body.email ;
            }
            if (req.body.oldpassword == result.password) {
                result.password = req.body.newpassword;
                const updatedUser = await result.save();
                console.log("Profile Updated!");
                res.status(201).send(updatedUser);
                }else{
                    res.status(400).send({messege:"Old password does not match"});
                }            
      }catch(err){
          res.status(400).json({messege:"something went wrong at server side.."});
      }
    });


module.exports = router;

