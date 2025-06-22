import { MongoClient } from "mongodb";

const uri = process.env.MONGODB_URI;
const dbName = process.env.MONGODB_DB;

let cachedClient = null;

async function connectToDatabase() {
  if (cachedClient) return cachedClient;

  const client = new MongoClient(uri);
  await client.connect();
  cachedClient = client;
  return client;
}

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  try {
    const client = await connectToDatabase();
    const db = client.db(dbName);
    const collection = db.collection("demandsubmissions");

    const { name, email, phone, comment } = req.body;

    await collection.insertOne({ name, email, phone, comment });

    return res.status(200).json({ message: "Form submitted!" });
  } catch (err) {
    console.error(err);
    return res.status(500).json({ error: "Error saving form data" });
  }
}
