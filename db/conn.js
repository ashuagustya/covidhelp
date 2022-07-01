const express=require("express");
const mongoose = require("mongoose");

mongoose.connect(process.env.DATABASE_URL, {
    useNewUrlParser:true,
    useUnifiedTopology:true,
    useCreateIndex:true,
    useFindAndModify:false
}).then(()=>{
    console.log("connection successful")
}).catch((e)=>{
    console.log(e)
})


