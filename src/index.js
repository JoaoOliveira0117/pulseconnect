import express from "express";
import db from "./config/db.js";
import { Sequelize } from "sequelize";

import { config } from "dotenv";

config();

const app = express();
app.use(express.json());

const PORT = process.env.PORT || 3000;

app.listen(PORT, async () => {
  await db.authenticate();
  db.query("SELECT * FROM users").then((users) => console.log(users[1]));
  console.log(`Listening on port ${PORT} 🔥`);
});

app.get("/", (req, res) => {
  try {
    res.json({ message: "Hello world!" });
  } catch (error) {
    console.log(error);
  }
});
