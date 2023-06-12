const data = require("./fakeData");
module.exports = (req, res) => {
  const { name } = req.query;

  if (!name) {
    res.status(404).json({ message: "User not found" });
    return;
  }

  const userFind = data.find((user) => user.name === name);

  if (userFind) {
    res
      .status(200)
      .json(`Usuário ${userFind.name} foi lido ${userFind.countAccess} vezes.`);
    return;
  }

  res.status(404).json({ message: "User not found" });
};
