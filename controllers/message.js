const express = require("express");
const Message = require("../models/message");

async function getAllMessages(request, response) {
  const messages = await Message.find({});
  response.json(messages);
}

async function getMessageByID(request, response) {
  const messages = await Message.find({ _id: request.params.id });
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

// async function getMessagesByUser(request, response) {
//   const res = await Message.pre("find", function () {
//     this.populate();
//   });
//   response.send(res);
// }

// ArticleSchema.pre('find', function () {
//   this.populate({path: 'author', select: '-location -address'});
// });

const MessageController = {
  getAllMessages,
  getMessageByID,
  createMessage,
  getMessagesByUser,
};

module.exports = MessageController;
