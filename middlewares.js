import { fakeData as data } from "./fakeData.js";

export const permission = (req, res, next) => {
  const idParams = req.params.id;

  const userFind = data.find((user) => user.id === Number(idParams));

  if (!userFind) {
    res.status(403).json({ message: "Insufficient permission" });
    return;
  }

  if (!userFind.admin) {
    res.status(403).json({ message: "Insufficient permission" });
    return;
  }

  next();
};
