const data = require("./fakeData");

module.exports = (req, res) => {
  const { name } = req.query;

  if (!name) {
    res.status(404).json({ message: "User not found" });
    return;
  }

  const userFindIndex = data.findIndex((user) => user.name === name);
  if (userFindIndex !== -1) {
    data.splice(userFindIndex, 1);
    res.status(200).json("success");
    return;
  }

  res.status(404).json({ message: "User not found" });
};
