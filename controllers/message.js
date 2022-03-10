const express = require("express");
const Message = require("../models/message");

async function getAllMessages(request, response) {
  const messages = await Message.find({});
  response.json(messages);
}
async function createMessage(request, response) {
  const res = await Message.create(request.body);
  response.send(res);
}

async function getMessagesByUser(request, response) {
  const res = await Message.find({ user: req.params.user });
  response.send(res);
}

const MessageController = {
  getAllMessages,
  createMessage,
  getMessagesByUser,
};

module.exports = MessageController;
