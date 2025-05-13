import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';

// MongoDB Connection
mongoose.connect('mongodb+srv://laurax:xNJhtqCETbTl0i7Z@cluster0.e0y97o4.mongodb.net/contact-form?retryWrites=true&w=majority&appName=Cluster0', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .then(() => console.log('✅ Connected to MongoDB'))
  .catch((err) => console.error('❌ MongoDB Connection Error:', err));

// Define schema + model
const formSchema = new mongoose.Schema({
  name: String,
  email: String,
  phone: String,
  comment: String,
  createdAt: { type: Date, default: Date.now },
});

const Form = mongoose.model('Form', formSchema);

// Init app
const app = express();
const port = 5000;

app.use(cors());
app.use(bodyParser.json());

// Handle form submissions
app.post('/submit', async (req, res) => {
  const { name, email, phone, comment } = req.body;
  try {
    const newForm = new Form({ name, email, phone, comment });
    await newForm.save();
    res.status(200).json({ message: 'Form submitted successfully!' });
  } catch (err) {
    console.error('Error saving form:', err);
    res.status(500).json({ message: 'Server error. Please try again later.' });
  }
});

// Start the server
app.listen(port, () => {
  console.log(`🚀 Server is running on http://localhost:${port}`);
});
