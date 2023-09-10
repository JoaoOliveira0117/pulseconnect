import express from "express";
import User from "../models/user.js";

const router = express.Router();

router.post("/", async (req, res) => {
  try {
    const user = await User.create(req.body);
    user.save();
    res.json(user);
  } catch (err) {
    res.json(err);
  }
});

export default router;
