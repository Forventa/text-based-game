const express = require("express");
const router = express.Router();
const path = require("path");
const users = require("../data/users.json");


const registerNewUser = async (req, res) =>{
    if(req.json({"name": req.body.name})){
        console.log("Username is already taken");
    }else{
        req.json({"name": req.body.name});
    }
};




module.exports = registerNewUser;