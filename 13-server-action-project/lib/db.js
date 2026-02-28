import mongoose from "mongoose";
const MONGODB_URI = process.env.MONGODB_URI;
let isConnected = false;

export default async function dbConnect() {
  if (isConnected) {
    console.log("Already connected to database");
    return;
  }
  try {
    const db = await mongoose.connect(MONGODB_URI);
    isConnected = db.connections[0].readyState === 1;
    console.log("Connected to database", db);
    console.log(db);
  } catch (error) {
    console.log("Failed to connect to database", error);
  }
}
