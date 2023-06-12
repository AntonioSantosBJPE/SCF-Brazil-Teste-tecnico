const data = require("./fakeData");

module.exports = (req, res) => {
  const { id } = req.query;
  const { name, job } = req.body;

  if (!id) {
    res.status(404).json({ message: "User not found" });
    return;
  }

  const userFindIndex = data.findIndex((user) => user.id === Number(id));

  if (userFindIndex !== -1) {
    oldDataUser = data[userFindIndex];
    newDataUser = {
      ...oldDataUser,
      name: name ? name : oldDataUser.name,
      job: job ? job : oldDataUser.job,
    };
    data[userFindIndex] = newDataUser;
    res.status(200).json(newDataUser);
    return;
  }
  res.status(404).json({ message: "User not found" });
};
