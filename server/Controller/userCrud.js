const user = require("../userSchema");

const getUsers = async (req, res) => {
  const getUsrs = await user.find();
  res.json(getUsrs);
};

const deleteUser = async (req, res) => {
  const _id = req.params.id;
  const deleteUsr = await user.findByIdAndDelete({ _id });
  res.json("deleted");
};

module.exports = { getUsers, deleteUser };
