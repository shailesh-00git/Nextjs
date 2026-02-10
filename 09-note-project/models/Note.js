import mongoose from "mongoose";
const NoteSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
    maxLength: 100,
  },
  content: { type: String, required: true, maxLength: 2000 },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  updatedAt: { type: Date, default: Date.now },
});

//updating the time and date in every update or save

NoteSchema.pre("save", function (next) {
  this.updatedAt = Date.now();
});

//exporting the model

const Note = mongoose.models.Note || mongoose.model("Note", NoteSchema);
export default Note;
