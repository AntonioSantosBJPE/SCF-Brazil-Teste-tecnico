import { fakeData as data } from "./fakeData.js";

export const teste2 = (req, res) => {
  const { name, job, admin } = req.body;

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
    admin: admin ? admin : false,
  };

  data.push(newUser);

  res.status(201).json(newUser);
};
