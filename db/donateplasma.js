const mongoose = require("mongoose");

const medSchema = new mongoose.Schema({
    date:{
        type:Date,
        default:Date.now()
    },
   name:{
    type:String,
    
    },
    address:{
        type:String,
        
    },
    phone:{
        type:Number,
        
    },
    age:{
        type:Number,
        
    },
    positiveTestDate:{
        type:String,
        
    },
    bloodgroup:{
        type:String,
        
    }
})

const DonPlasma = new mongoose.model("PlasmaDonate",medSchema);

module.exports = DonPlasma;