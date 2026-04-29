import mongoose from "mongoose";

export async function connectDB() {
  try {
    await mongoose.connect(process.env.MONGODB_URI);

    const connection = mongoose.connection;

    connection.on("connected", () => {
      console.log("MongoDB connected");
    });

    connection.on("error", (err) => {
      console.log("Failed to connect to MongoDB: " + err);
      process.exit();
    });
  } catch (error) {
    console.error("Error connecting to MongoDB:", error);
  }
}