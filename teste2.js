var data = require("./fakeData");

module.exports = function (req, res) {
  const { name, job } = req.body;

  const lastIdData = data[data.length - 1].id;
  const newUser = {
    id: lastIdData + 1,
    name,
    job,
  };

  data.push(newUser);

  res.status(201).json(newUser);
};
