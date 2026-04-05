import { mongoose } from "mongoose";
export function connectDB() {
  try {
    const connection = mongoose.connect(process.env.MONGODB_URI);
    if (connection) {
      console.log("mongodb connected sucessfully");
    }
    return connection;
  } catch (error) {
    console.error("Error connecting to MongoDB:", error);
  }
}
