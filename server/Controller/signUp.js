const bcrypt = require("bcrypt");
const user = require("../userSchema");
const jwt = require("jsonwebtoken");

const signUp = async (req, res) => {
  const { username, password, role } = req.body;
  const userName = await user.findOne({ username });

  if (userName) {
    res.json("username already exists");
  } else {
    const salt = await bcrypt.genSalt(10);
    const hashedpassword = await bcrypt.hash(password, salt);
    const userDetails = await user.create({
      username,
      password: hashedpassword,
      role,
    });
    res.json("added");
  }
};

module.exports = signUp;
