import dbConnect from "@/lib/db";
import NotesClient from "@/components/NotesClient";
import Note from "@/models/Note";

// async function to get notes
async function getNotes() {
  await dbConnect();
  const notes = await Note.find({}).sort({ createdAt: -1 }).lean();
  return notes.map((note) => ({ ...note, _id: note._id.toString() }));
}

export default async function Home() {
  const notes = await getNotes();
  console.log(notes);

  return (
    <div className="mx-auto bg-amber-100 p-4">
      <h1 className="font-bold text-3xl text-center mb-6 text-gray-700">
        Notes App
      </h1>
      <NotesClient initialnotes={notes} />
    </div>
  );
}
