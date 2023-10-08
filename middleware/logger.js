const express = require("express");

const logger = function(req,res,next){
    console.log(res.body); 
    next();
}

module.exports = logger;