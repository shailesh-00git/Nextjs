import mongoose from "mongoose";

//getting the mongo db url from the .env folder
const MONGODB_URI = process.env.MONGODB_URL;

// states for the database connections
// check whether connected to database or not

let isConnect = false;

async function dbConnect() {
  //checking the connection
  if (isConnect) {
    console.log("mongo db is already connected");
    return;
  }
  try {
    const db = await mongoose.connect(MONGODB_URI);
    isConnect = db.connections[0].readyState === 1;
    console.log("connected to mongo db", db);
  } catch (error) {
    console.log("failed to conect to mongo db", error);
    throw error;
  }
}
export default dbConnect;
