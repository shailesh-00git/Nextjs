"use client";

import { useState } from "react";
import toast from "react-hot-toast";

function NotesClient({ initialnotes }) {
  const [notes, setNotes] = useState(initialnotes);
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [loading, setLoading] = useState(false);

  function DiscardNote() {
    setTitle("");
    setContent("");
  }

  // function to create note
  async function CreateNote(e) {
    e.preventDefault();

    if (!title.trim() || !content.trim()) return;

    setLoading(true);
    try {
      const response = await fetch("/api/notes", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ title, content }),
      });

      const result = await response.json();
      setLoading(false);
      // dispaly the note created when created immediately
      if (result.success) {
        setNotes([result.data, ...notes]);
        toast.success("Notes creates sucessfully!");
        DiscardNote();
      }
    } catch (error) {
      console.log("Failed to create note", error);
      toast.error("something went wrong");
    }
  }

  // function to delete note
  async function deleteNote(id) {
    try {
      const response = await fetch(`/api/notes/${id}`, { method: "DELETE" });
      const result = await response.json();
      if (result.success) {
        setNotes(notes.filter((notes) => notes._id !== id));
        toast.success("notes deleted sucessfully");
      }
    } catch (error) {
      console.log("notes are not deleted", error);
      toast.error("Failed to delete notes");
    }
  }

  return (
    <div className="">
      <form onSubmit={CreateNote} className="shadow-md rounded-lg bg-white p-6">
        <h1 className="font-semibold text-gray-600 text-2xl mb-2">
          Write notes...
        </h1>

        <div>
          <input
            type="text"
            placeholder="Note title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="border border-gray-400 w-full text-xl rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-400"
            required
          />

          <textarea
            placeholder="Write your notes..."
            rows={5}
            value={content}
            onChange={(e) => setContent(e.target.value)}
            className="p-3 text-xl text-gray-800 mt-6 w-full rounded-lg border border-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-400"
            required
          />
        </div>

        <div className="mt-8 space-x-6">
          <button
            type="submit"
            disabled={loading}
            className="rounded-lg px-5 py-3 bg-blue-600 text-white font-semibold hover:bg-blue-700 disabled:opacity-60"
          >
            {loading ? "Creating..." : "Create Note"}
          </button>

          <button
            type="button"
            onClick={DiscardNote}
            className="rounded-lg px-4 py-3 bg-red-700 text-white font-semibold hover:bg-red-800"
          >
            Discard
          </button>
        </div>
      </form>

      <div className="mt-2 bg-white rounded-lg shadow-md max-w-8xl mx-auto p-6">
        <h2 className="text-2xl p-1">Total Notes: {notes.length}</h2>
        {notes.length === 0 ? (
          <p className="text-gray-600">No notes.First create note !</p>
        ) : (
          notes.map((note) => (
            <div
              className="rounded-md shadow-md bg-green-50 p-6 mb-2 flex justify-between items-center"
              key={note._id}
            >
              <div>
                <h3 className="font-bold text-gray-800">
                  {note.title.toUpperCase()}
                </h3>
                <p className="text-gary-800">{note.content}</p>
                <p className="text-gray-400">
                  created: {new Date(note.createdAt).toLocaleString()}
                </p>
                <p className="text-gray-400">
                  updated: {new Date(note.updatedAt).toLocaleString()}
                </p>
              </div>
              <div className="flex gap-4">
                <button className="border-2 py-1 px-4 rounded-lg border-green-500 text-gray-800">
                  edit
                </button>
                <button
                  className="px-4 py-1 rounded-lg bg-red-400 text-white"
                  onClick={() => deleteNote(note._id)}
                >
                  delete
                </button>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
}

export default NotesClient;
