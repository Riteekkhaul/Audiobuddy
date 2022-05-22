const mongoose = require('mongoose');

const UserSchema = mongoose.Schema({
   name:String,
   email:String,
   password:String,
   Posts:[]
});

const  User = mongoose.model('user', UserSchema);
module.exports = User;