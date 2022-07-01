const mongoose = require("mongoose");

const payerSchema = new mongoose.Schema({
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
    help:{
        type:String,
        
    }
})

const Mental = new mongoose.model("MentalIssue",payerSchema);

module.exports = Mental;