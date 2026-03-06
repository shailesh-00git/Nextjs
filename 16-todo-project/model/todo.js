import mongoose from "mongoose";
const TODOSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: [true, "Title is required"],
      trim: true,
      maxlength: [100, "Title cannot more than 100 characters"],
    },
    description: {
      type: String,
      required: [description, "Title is required"],
      trim: true,
      maxlength: [500, "Description cannot more than 500 characters"],
    },
    completed: {
      type: Boolean,
      default: false,
    },
    priority: { type: String, enum: ["low", "medium", "high"] },
    default: "medium",
  },
  {
    // this aad the createdAt and UpdatedAt time autometically
    timestamps: true,
  },
);
export default mongoose.models.TODO || mongoose.model("TODO", TODOSchema);
