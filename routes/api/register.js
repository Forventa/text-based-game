const express = require("express");
const registerNewUser = require("../../controllers/registercontroller");
const router = express.Router();


router.put("/", registerNewUser);



module.exports = router;