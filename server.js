const express = require("express");
const app = express();
const cors = require("cors");
const connectToDB = require("./models");
require("dotenv").config();
const port = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

const messageRouter = require("./routes/messages");
app.use("/messages", messageRouter);

connectToDB().then(() => {
  app.listen(port, () => console.log("Listening on port 3000"));
});
