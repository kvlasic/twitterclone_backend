const express = require("express");
const router = express.Router();
const Message = require("../models/message");
const MessageController = require("../controllers/message");

const { getAllMessages, getMessageByID, createMessage } = MessageController;

// CREATE NEW MESSAGE
router.route("/").get(getAllMessages).post(createMessage);
router.route("/:id").get(getMessageByID);

module.exports = router;

// router.route("/").get(getAllMessages).post(createMessage);
/*
router
.route("/:id") 
.get((req, res) => {
    
})

*/
