var data = require("./fakeData");

module.exports = (req, res) => {
  const { name, job } = req.body;

  if (!name || !job) {
    res
      .status(400)
      .json({ message: "Invalid body, keys name and job are required" });
    return;
  }

  const lastIdData = data[data.length - 1].id;
  const newUser = {
    id: lastIdData + 1,
    name,
    job,
  };

  data.push(newUser);

  res.status(201).json(newUser);
};
