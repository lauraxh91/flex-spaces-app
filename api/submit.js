import mongoose from 'mongoose';

const MONGODB_URI = 'mongodb+srv://laurax:xNJhtqCETbTl0i7Z@cluster0.e0y97o4.mongodb.net/contact-form?retryWrites=true&w=majority&appName=Cluster0';

let cached = global.mongoose;

if (!cached) {
  cached = global.mongoose = { conn: null, promise: null };
}

async function connectToDatabase() {
  if (cached.conn) return cached.conn;
  if (!cached.promise) {
    cached.promise = mongoose.connect(uri, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    }).then((mongoose) => mongoose);
  }
  cached.conn = await cached.promise;
  return cached.conn;
}

// Mongoose schema must be defined once in Vercel serverless
const formSchema = new mongoose.Schema({
  name: String,
  email: String,
  phone: String,
  comment: String,
  createdAt: { type: Date, default: Date.now },
});

let Form;
try {
  Form = mongoose.model('Form');
} catch {
  Form = mongoose.model('Form', formSchema);
}

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method Not Allowed' });
  }

  const { name, email, phone, comment } = req.body;

  try {
    await connectToDatabase();
    const newForm = new Form({ name, email, phone, comment });
    await newForm.save();
    return res.status(200).json({ message: 'Form submitted successfully!' });
  } catch (error) {
    console.error('❌ Submission error:', error);
    return res.status(500).json({ message: 'Internal Server Error' });
  }
}
