import express from "express";
import { auth } from "../middlewares/authMiddleware.js";

const router = express.Router();

router.get("/test", auth, (req, res) => {
  res.send("testinggggg");
});

export default router;
