import { fakeData as data } from "./fakeData.js";

export const teste3 = (req, res) => {
  const { name } = req.query;

  if (!name) {
    res.status(404).json({ message: "User not found" });
    return;
  }

  const userFindIndex = data.findIndex(
    (user) => user.name.toLowerCase() === name.toLowerCase()
  );
  if (userFindIndex !== -1) {
    data.splice(userFindIndex, 1);
    res.status(200).json("success");
    return;
  }

  res.status(404).json({ message: "User not found" });
};
