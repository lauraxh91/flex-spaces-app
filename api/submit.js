import mongoose from 'mongoose';

const MONGODB_URI = 'mongodb+srv://laurax:xNJhtqCETbTl0i7Z@cluster0.e0y97o4.mongodb.net/contact-form?retryWrites=true&w=majority&appName=Cluster0';

const formSchema = new mongoose.Schema({
  name: String,
  email: String,
  phone: String,
  comment: String,
});

const Form = mongoose.models.Form || mongoose.model('Form', formSchema);

async function connectDB() {
  if (mongoose.connection.readyState === 0) {
    await mongoose.connect(MONGODB_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
  }
}

export default async function handler(req, res) {
  if (req.method === 'POST') {
    try {
      await connectDB();
      const { name, email, phone, comment } = req.body;
      const newForm = new Form({ name, email, phone, comment });
      await newForm.save();
      res.status(200).json({ message: 'Form submitted successfully!' });
    } catch (error) {
      console.error('Error submitting form:', error);
      res.status(500).json({ message: 'Server error' });
    }
  } else {
    res.status(405).json({ message: 'Method Not Allowed' });
  }
}
