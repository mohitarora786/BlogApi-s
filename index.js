const express = require("express");
const app = express();

app.listen(3000,()=>{
    console.log("Running On Port No ");
})


app.get("/",(req,res)=>{
    res.send(`<h1> This Is Homepage </h1>`);
})