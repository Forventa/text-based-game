const express = require("express");
const path = require("path");
const router = express.Router();
const data = {};

data.users = require("../data/users.json");



const getAllUsers = (req, res) =>{
    res.json(data.users);
};

const modifyUser = (req, res) =>{
    res.json({
        "name": req.body.name,
        "level": req.body.level
    })
};

const deleteUser = (req, res) =>{
    res.json({"name": req.body.name})
};

const addUser = (req, res) =>{
    res.json({
        "name": req.body.name,
        "level": req.body.level
    })
};

const findUserByName = (req, res) =>{
    res.json({
        "name": req.params.name,
        "level": req.params.level
    })
};


module.exports = {
    getAllUsers,
    modifyUser,
    deleteUser,
    addUser,
    findUserByName
}