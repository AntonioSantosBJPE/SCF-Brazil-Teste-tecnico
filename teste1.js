var data = require("./fakeData");

const getUser = (req, res, next) => {
  const { name } = req.query;

  if (name) {
    const userFind = data.find((user) => user.name === name);
    if (userFind) {
      res.status(200).json(userFind);
      return;
    }
  }
  res.status(404).json({ message: "User not found" });
};

const getUsers = (req, res, next) => {
  res.send(data);
};

module.exports = {
  getUser,
  getUsers,
};
