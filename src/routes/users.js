import { Router } from "express";
import createUser from "../controllers/users/createUser.js";

const router = Router();

router.post("/", createUser);

export default router;