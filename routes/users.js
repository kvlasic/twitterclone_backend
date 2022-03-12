const express = require("express");
const router = express.Router();
const User = require("../models/user");
const UserController = require("../controllers/user");

const { getAllUsers, getUserByID, createUser, randomUser } = UserController;

// CREATE NEW USERS
router.route("/").get(getAllUsers).post(createUser);
router.route("/:id").get(getUserByID);
router.route("/random").get(randomUser);

module.exports = router;
