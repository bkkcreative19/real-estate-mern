import express from "express";
import morgan from "morgan";
import cors from "cors";
import connectDB from "./config/db.js";
import listingRouter from "./routes/Listing.js";
import userRouter from "./routes/User.js";
import testRouter from "./routes/Test.js";
import favoriteRouter from "./routes/Favorite.js";
import dotenv from "dotenv";
dotenv.config();

// app
const app = express();

// Database
connectDB();

// middlewares
app.use(express.json());
app.use(cors());
app.use(morgan("tiny"));

// Routes
app.use("/api", listingRouter);
app.use("/api", userRouter);
app.use("/api", testRouter);
app.use("/api", favoriteRouter);

// Error Handler

app.listen("5000", () => console.log("listening on port 5000"));
