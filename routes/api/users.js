const express = require("express");
const router =  express.Router();
const userController = require("../../controllers/usercontroller");


router.route("/").get(userController.getAllUsers).put(userController.modifyUser).delete(userController.deleteUser).post(userController.addUser);


router.route("/:name").get(userController.findUserByName);


module.exports = router;