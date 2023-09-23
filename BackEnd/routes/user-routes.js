const express = require("express");
const router = express.Router();
const users = require("../model/Users")
const usersController =  require("../controllers/users-controller")



router.post("/register", usersController.addUser);
router.post("/login", usersController.login)
//router.get("/:id", usersController.getUser);
router.get("/", usersController.getallUsers);

module.exports = router;