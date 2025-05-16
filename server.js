import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

const MONGODB_URI = process.env.MONGODB_URI;

mongoose.connect(MONGODB_URI).then(() => console.log('Connected to MongoDB')).catch(err => console.error(err));

const formSchema = new mongoose.Schema({
  name: String,
  email: String,
  phone: String,
  comment: String,
});

const Form = mongoose.model('Form', formSchema);

app.post('/submit', async (req, res) => {
  try {
    const newForm = new Form(req.body);
    await newForm.save();
    res.status(200).json({ message: 'Form submitted!' });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Error saving form data' });
  }
});

app.listen(3000, () => console.log('Server running on port 3000'));
