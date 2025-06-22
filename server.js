import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

const MONGODB_URI = process.env.MONGODB_URI;

mongoose
  .connect(MONGODB_URI)
  .then(() => console.log("Connected to MongoDB"))
  .catch((err) => console.error(err));

// Supply form schema (original contact form for coworking space owners)
const supplyFormSchema = new mongoose.Schema({
  name: String,
  email: String,
  phone: String,
  comment: String,
});

// Demand form schema (workspaces form for users looking for spaces)
const demandFormSchema = new mongoose.Schema({
  name: String,
  email: String,
  phone: String,
  comment: String,
  frequency: String,
  important_factor: String,
});

const SupplyForm = mongoose.model("SupplyForm", supplyFormSchema);
const DemandForm = mongoose.model("DemandForm", demandFormSchema);

// Supply submit endpoint (original contact form)
app.post("/api/supplysubmit", async (req, res) => {
  try {
    const newForm = new SupplyForm(req.body);
    await newForm.save();
    res.status(200).json({ message: "Form submitted!" });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Error saving form data" });
  }
});

// Demand submit endpoint (workspaces form)
app.post("/api/demandsubmit", async (req, res) => {
  try {
    const newForm = new DemandForm(req.body);
    await newForm.save();
    res.status(200).json({ message: "Form submitted!" });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Error saving form data" });
  }
});

app.listen(3000, () => console.log("Server running on port 3000"));
