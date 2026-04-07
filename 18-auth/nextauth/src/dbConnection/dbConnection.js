import { mongoose } from "mongoose";
export function connectDB() {
  try {
    const connection = mongoose.connect(process.env.MONGODB_URI);
    if (connection) {
      console.log("mongodb connected sucessfully");
      console.log(connection); // Log the host of the connected database
    }
    return connection;
  } catch (error) {
    console.error("Error connecting to MongoDB:", error);
  }
}
