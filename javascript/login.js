const express = require("express");
const path = require("path");
const { post } = require("../routes/api/users");
const route = express.Router();


function login(){
    
}


const usernameBox = document.getElementById("username");
const passwordBoc = document.getElementById("password");

const loginButton = document.getElementById("loginbutton");

loginButton.addEventListener("click", login());

