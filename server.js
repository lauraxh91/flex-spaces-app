import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";
import supplySubmitHandler from "./api/supplysubmit.js";
import demandSubmitHandler from "./api/demandsubmit.js";

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

// Routes
app.post("/api/supplysubmit", (req, res) => supplySubmitHandler(req, res));
app.post("/api/demandsubmit", (req, res) => demandSubmitHandler(req, res));

app.get("/", (req, res) => {
  res.send("Server is running.");
});

app.listen(3000, () => console.log("Server running on port 3000"));
