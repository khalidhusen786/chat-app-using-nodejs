const mongoose = require("mongoose");

const userSchema = mongoose.Schema(
  {
    name: { type: "String", required: true },
    room: { type: "String", required: true },
  },
  { timestaps: true }
);

const User = mongoose.model("User", userSchema);

module.exports = User;