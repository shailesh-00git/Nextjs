"use client";

import { useState } from "react";

function NotesClient() {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [loading, setLoading] = useState(false);

  function DiscardNote() {
    setTitle("");
    setContent("");
  }

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
      console.log(result);
      setLoading(false);
      // reset form after success
      setTitle("");
      setContent("");
    } catch (error) {
      console.log("Failed to create note", error);
    }
  }

  return (
    <div className="space-x-6">
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
    </div>
  );
}

export default NotesClient;
