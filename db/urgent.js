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

const Urgent = new mongoose.model("urgentHelp",payerSchema);

module.exports = Urgent;