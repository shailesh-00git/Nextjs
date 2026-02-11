"use client";

import { useState } from "react";
import toast from "react-hot-toast";

function NotesClient({ initialnotes }) {
  const [notes, setNotes] = useState(initialnotes);
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [loading, setLoading] = useState(false);

  // Editing state
  const [editId, setEditId] = useState(null);
  const [editTitle, setEditTitle] = useState("");
  const [editContent, setEditContent] = useState("");

  function DiscardNote() {
    setTitle("");
    setContent("");
  }

  // CREATE NOTE
  async function CreateNote(e) {
    e.preventDefault();

    if (!title.trim() || !content.trim()) return;

    setLoading(true);
    try {
      const response = await fetch("/api/notes", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ title, content }),
      });

      const result = await response.json();

      if (result.success) {
        setNotes([result.data, ...notes]);
        toast.success("Note created successfully!");
        DiscardNote();
      }
    } catch (error) {
      console.log("Failed to create note", error);
      toast.error("Something went wrong");
    } finally {
      setLoading(false);
    }
  }

  // DELETE NOTE
  async function deleteNote(id) {
    try {
      const response = await fetch(`/api/notes/${id}`, {
        method: "DELETE",
      });

      const result = await response.json();

      if (result.success) {
        setNotes(notes.filter((note) => note._id !== id));
        toast.success("Note deleted successfully");
      }
    } catch (error) {
      console.log("Note not deleted", error);
      toast.error("Failed to delete note");
    }
  }

  // START EDIT
  function startEdit(note) {
    setEditId(note._id);
    setEditTitle(note.title);
    setEditContent(note.content);
  }

  // CANCEL EDIT
  function cancelEditing() {
    setEditId(null);
    setEditTitle("");
    setEditContent("");
  }

  // UPDATE NOTE
  async function updateNote(id) {
    if (!editTitle.trim() || !editContent.trim()) return;

    setLoading(true);

    try {
      const response = await fetch(`/api/notes/${id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          title: editTitle,
          content: editContent,
        }),
      });

      const result = await response.json();

      if (result.success) {
        setNotes(notes.map((note) => (note._id === id ? result.data : note)));

        toast.success("Note updated successfully");
        cancelEditing();
      }
    } catch (error) {
      console.log("Updating error", error);
      toast.error("Something went wrong");
    } finally {
      setLoading(false);
    }
  }

  return (
    <div>
      {/* CREATE FORM */}
      <form onSubmit={CreateNote} className="shadow-md rounded-lg bg-white p-6">
        <h1 className="font-semibold text-gray-600 text-2xl mb-4">
          Write notes...
        </h1>

        <input
          type="text"
          placeholder="Note title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="border w-full text-xl rounded-lg p-3 mb-4"
          required
        />

        <textarea
          placeholder="Write your notes..."
          rows={5}
          value={content}
          onChange={(e) => setContent(e.target.value)}
          className="p-3 text-xl w-full rounded-lg border"
          required
        />

        <div className="mt-6 space-x-4">
          <button
            type="submit"
            disabled={loading}
            className="rounded-lg px-5 py-2 bg-blue-600 text-white"
          >
            {loading ? "Creating..." : "Create Note"}
          </button>

          <button
            type="button"
            onClick={DiscardNote}
            className="rounded-lg px-5 py-2 bg-red-600 text-white"
          >
            Discard
          </button>
        </div>
      </form>

      {/* NOTES LIST */}
      <div className="mt-6 bg-white rounded-lg shadow-md p-6">
        <h2 className="text-2xl mb-4">Total Notes: {notes.length}</h2>

        {notes.length === 0 ? (
          <p>No notes. Create one!</p>
        ) : (
          notes.map((note) => (
            <div
              key={note._id}
              className="rounded-md shadow-md bg-green-50 p-6 mb-4"
            >
              {editId === note._id ? (
                <>
                  <input
                    type="text"
                    value={editTitle}
                    onChange={(e) => setEditTitle(e.target.value)}
                    className="border w-full text-xl rounded-lg p-3 mb-4"
                  />

                  <textarea
                    rows={5}
                    value={editContent}
                    onChange={(e) => setEditContent(e.target.value)}
                    className="p-3 text-xl w-full rounded-lg border"
                  />

                  <div className="mt-4 space-x-4">
                    <button
                      type="button"
                      onClick={() => updateNote(note._id)}
                      className="px-4 py-2 bg-blue-600 text-white rounded-lg"
                    >
                      Update
                    </button>

                    <button
                      onClick={cancelEditing}
                      className="px-4 py-2 bg-gray-500 text-white rounded-lg"
                    >
                      Cancel
                    </button>
                  </div>
                </>
              ) : (
                <>
                  <h3 className="font-bold text-gray-800">
                    {note.title.toUpperCase()}
                  </h3>

                  <p className="text-gray-800">{note.content}</p>

                  <p className="text-gray-400 text-sm">
                    Created: {new Date(note.createdAt).toLocaleString()}
                  </p>

                  <p className="text-gray-400 text-sm">
                    Updated: {new Date(note.updatedAt).toLocaleString()}
                  </p>

                  <div className="flex gap-4 mt-4">
                    <button
                      onClick={() => startEdit(note)}
                      className="border px-4 py-1 rounded-lg"
                    >
                      Edit
                    </button>

                    <button
                      onClick={() => deleteNote(note._id)}
                      className="px-4 py-1 bg-red-500 text-white rounded-lg"
                    >
                      Delete
                    </button>
                  </div>
                </>
              )}
            </div>
          ))
        )}
      </div>
    </div>
  );
}

export default NotesClient;
