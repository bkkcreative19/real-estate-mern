import express from "express";
import { createFavorite, getFavorites } from "../controllers/Favorite.js";
import { auth } from "../middlewares/authMiddleware.js";

const router = express.Router();

router.get("/favorites", auth, getFavorites);

// router.get("/listings/:type", getSpecificListings);
router.post("/favorites", auth, createFavorite);

export default router;
