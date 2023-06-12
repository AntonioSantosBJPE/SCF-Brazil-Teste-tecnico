const data = require("./fakeData");

const getUser = (req, res, next) => {
  const { name } = req.query;

  if (!name) {
    res.status(404).json({ message: "User not found" });
    return;
  }

  const userFind = data.find((user) => user.name === name);

  if (userFind) {
    userFind.countAccess++;
    res.status(200).json(userFind);
    return;
  }

  res.status(404).json({ message: "User not found" });
};

const getUsers = (req, res, next) => {
  res.status(200).json(data);
};

module.exports = {
  getUser,
  getUsers,
};
