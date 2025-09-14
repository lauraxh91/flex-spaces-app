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
  if (req.method !== "GET") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  try {
    const client = await connectToDatabase();
    const db = client.db(dbName);
    const collection = db.collection("demandsubmissions");

    // Get tracking code analytics
    const trackingStats = await collection
      .aggregate([
        {
          $group: {
            _id: "$tracking_code",
            count: { $sum: 1 },
            latestSubmission: { $max: "$timestamp" },
          },
        },
        {
          $sort: { count: -1 },
        },
      ])
      .toArray();

    // Get total submissions
    const totalSubmissions = await collection.countDocuments();

    // Get recent submissions (last 7 days)
    const sevenDaysAgo = new Date();
    sevenDaysAgo.setDate(sevenDaysAgo.getDate() - 7);

    const recentSubmissions = await collection.countDocuments({
      timestamp: { $gte: sevenDaysAgo },
    });

    // Get submissions by day for the last 30 days
    const thirtyDaysAgo = new Date();
    thirtyDaysAgo.setDate(thirtyDaysAgo.getDate() - 30);

    const dailyStats = await collection
      .aggregate([
        {
          $match: {
            timestamp: { $gte: thirtyDaysAgo },
          },
        },
        {
          $group: {
            _id: {
              year: { $year: "$timestamp" },
              month: { $month: "$timestamp" },
              day: { $dayOfMonth: "$timestamp" },
            },
            count: { $sum: 1 },
          },
        },
        {
          $sort: { "_id.year": 1, "_id.month": 1, "_id.day": 1 },
        },
      ])
      .toArray();

    return res.status(200).json({
      trackingStats,
      totalSubmissions,
      recentSubmissions,
      dailyStats,
      lastUpdated: new Date(),
    });
  } catch (err) {
    console.error(err);
    return res.status(500).json({ error: "Error fetching analytics" });
  }
}
