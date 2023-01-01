import express from "express";
import mongoose from "mongoose"


const PORT =5000
const app =express();

mongoose.connect(
    "mongodb+srv://al_dov:nutifafa123456789@cluster0.zwtqyyu.mongodb.net/?retryWrites=true&w=majority"
    ).then(()=> console.log("MongoDB connection successful")).catch(()=>{
        console.log("Error");
    });

app.get('/' , (req,res)=>{ 
    res.send('Hello')
})

app.listen(PORT, ()=>{
    console.log(`I am listening at PORT ${PORT}`);
})