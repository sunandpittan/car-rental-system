const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
  username: { type: String },
  password: { type: String },
  role: { type: String },
});

const user = mongoose.model("user", userSchema);

module.exports = user;
