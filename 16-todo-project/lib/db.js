import mongoose from "mongoose";

const MONGO_URI = process.env.MONGO_DB;

if (!MONGO_URI) {
  throw new Error("Please define the mongo db uri");
}

// cache the connection
const cached = global.mongoose;

if (!cached) {
  global.mongoose = { conn: null, promise: null };
}

// function to connect db
async function connectdb() {
  const cached = global.mongoose;

  if (cached.conn) {
    return cached.conn;
  }

  if (!cached.promise) {
    cached.promise = mongoose.connect(MONGO_URI).then((mongoose) => {
      return mongoose;
    });
  }

  try {
    cached.conn = await cached.promise;
  } catch (e) {
    console.error("Failed to connect to db", e);
    throw e;
  }

  return cached.conn;
}

export default connectdb;
