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
    medicine:{
        type:String,
        
    }
})

const Medicine = new mongoose.model("MedicineRequest",medSchema);

module.exports = Medicine;