const mongoose = require("mongoose");

const MessageSchema = new mongoose.Schema(
  {
    message: { type: String, required: true },
    userID: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: "user",
    },
  },
  { timestamps: true }
);

MessageSchema.pre("find", function () {
  this.populate("userID");
});

module.exports = mongoose.model("message", MessageSchema);
