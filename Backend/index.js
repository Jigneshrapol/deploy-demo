const express = require('express');

const server =express();

server.use("/",(req,res)=>{
    res.send("hello")
})
server.listen(8080,()=>{
    console.log("server started...")
})
