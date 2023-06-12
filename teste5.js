import { fakeData as data } from "./fakeData.js";

export const teste5 = (req, res) => {
  const { name } = req.query;

  if (!name) {
    res.status(404).json({ message: "User not found" });
    return;
  }

  const userFind = data.find(
    (user) => user.name.toLowerCase() === name.toLowerCase()
  );

  if (userFind) {
    res
      .status(200)
      .json(`Usuário ${userFind.name} foi lido ${userFind.countAccess} vezes.`);
    return;
  }

  res.status(404).json({ message: "User not found" });
};
