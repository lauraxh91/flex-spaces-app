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

    const {
      email,
      name,
      phone,
      frequency,
      comment,
      important_factor,
      tracking_code,
    } = req.body;

    // Validate tracking code format (16 character hex string)
    const isValidTrackingCode =
      tracking_code &&
      typeof tracking_code === "string" &&
      /^[A-F0-9]{16}$/.test(tracking_code);

    await collection.insertOne({
      email,
      name,
      phone,
      frequency,
      comment,
      important_factor,
      tracking_code: isValidTrackingCode ? tracking_code : "unknown",
      timestamp: new Date(),
      userAgent: req.headers["user-agent"] || "unknown",
      ip:
        req.headers["x-forwarded-for"] ||
        req.connection.remoteAddress ||
        "unknown",
    });

    return res.status(200).json({ message: "Form submitted!" });
  } catch (err) {
    console.error(err);
    return res.status(500).json({ error: "Error saving form data" });
  }
}
