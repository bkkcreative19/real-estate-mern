import express from "express";
import {
  getListings,
  addListings,
  getSpecificListings,
} from "../controllers/Listing.js";

const router = express.Router();

router.get("/listings", getListings);

router.get("/listings/:type", getSpecificListings);
router.post("/listings", addListings);

export default router;
