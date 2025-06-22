import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

const MONGODB_URI = process.env.MONGODB_URI;

// Connect to MongoDB
mongoose
  .connect(MONGODB_URI)
  .then(() => console.log("Connected to MongoDB"))
  .catch((err) => console.error(err));

// The submission logic is now handled by the files in the /api directory.
// This server.js file can be used for other API routes or removed if not needed.

app.get("/", (req, res) => {
  res.send("Server is running.");
});

app.listen(3000, () => console.log("Server running on port 3000"));
