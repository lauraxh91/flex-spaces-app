import mongoose from 'mongoose';

const MONGODB_URI = process.env.MONGODB_URI || 'mongodb+srv://laurax:xNJhtqCETbTl0i7Z@cluster0.e0y97o4.mongodb.net/contact-form?retryWrites=true&w=majority&appName=Cluster0';

if (!MONGODB_URI) {
  throw new Error('❌ MONGODB_URI is not defined in environment variables');
}

// Global cache to prevent repeated connections in serverless
let cached = global.mongoose;
if (!cached) {
  cached = global.mongoose = { conn: null, promise: null };
}

async function connectToDatabase() {
  if (cached.conn) return cached.conn;

  if (!cached.promise) {
    console.log('🔌 Connecting to MongoDB...');
    cached.promise = mongoose.connect(MONGODB_URI, {
      serverSelectionTimeoutMS: 5000, // Fail quickly if DB is unreachable
    }).then((mongoose) => {
      console.log('✅ MongoDB connected');
      return mongoose;
    });
  }

  cached.conn = await cached.promise;
  return cached.conn;
}

// Define schema once
const formSchema = new mongoose.Schema({
  name: String,
  email: String,
  phone: String,
  comment: String,
  createdAt: { type: Date, default: Date.now },
});

// Prevent OverwriteModelError
const Form = mongoose.models.Form || mongoose.model('Form', formSchema);

// API handler
export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method Not Allowed' });
  }

  const { name, email, phone, comment } = req.body;

  if (!name || !email || !comment) {
    return res.status(400).json({ message: 'Missing required fields' });
  }

  try {
    await connectToDatabase();

    const newForm = new Form({ name, email, phone, comment });
    await newForm.save();

    console.log('✅ Form data saved:', { name, email });

    return res.status(200).json({ message: 'Form submitted successfully!' });
  } catch (error) {
    console.error('❌ Submission error:', error);
    return res.status(500).json({ message: 'Internal Server Error' });
  }
}
