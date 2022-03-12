const express = require("express");
const User = require("../models/user");

async function getAllUsers(request, response) {
  const users = await User.find({});
  response.json(users);
}

async function getUserByID(request, response) {
  const users = await User.find({ _id: request.params.id });
  response.json(users);
}
// const message = await Message.find({ _id: request.params.id });
async function createUser(request, response) {
  console.log(request.body);
  const res = await User.create(request.body);
  response.send(res);
}

async function randomUser(request, response) {
  const res = await User.aggregate.sample(1);
  response.send(res);
}

// async function getMessagesByUser(request, response) {
//   const res = await User.find({})
// }

const UserController = {
  getAllUsers,
  getUserByID,
  createUser,
  randomUser,
};

module.exports = UserController;
