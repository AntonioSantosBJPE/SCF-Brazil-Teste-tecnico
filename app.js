import express from "express";
import * as middlewares from "./middlewares.js";
import * as teste1 from "./teste1.js";
import { teste2 } from "./teste2.js";
import { teste3 } from "./teste3.js";
import { teste4 } from "./teste4.js";
import { teste5 } from "./teste5.js";

const app = express();
app.use(express.json());

app.get("/", (req, res) => {
  res.send(`get user/ </br>
  get users/ </br>
  post users/ </br>
  delete users/ </br>
  put users/ </br>
  `);
});

app.get("/user", teste1.getUser);
app.get("/users", teste1.getUsers);
app.post("/users", teste2);
app.delete("/users/:id", middlewares.permission, teste3);
app.put("/users/:id", middlewares.permission, teste4);
app.get("/users/access", teste5);

const port = 3000;
app.listen(port, () => {
  console.log("Express server listening on port " + port);
});
