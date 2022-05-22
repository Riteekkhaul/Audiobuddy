const mongoose = require('mongoose');

const ACtivitySchema = mongoose.Schema({
   id:String,
   post:String
});

const  Activity = mongoose.model('activity', ACtivitySchema);
module.exports = Activity;