"use client";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useState } from "react";

export default function AddUser() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const queryClient = useQueryClient();
  // this function users to the array list
  async function addUser(userData) {
    const response = await fetch("/api/users", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(userData),
    });

    if (!response.ok) throw new Error("Failed to add user");

    return response.json();
  }

  // use mutation function is use to mutate the list
  const mutation = useMutation({
    mutationFn: addUser,
    //this onsucces is used to live change on page as the list changes
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["users"] });
      // then after the sucessful add cear the form data
      setName("");
      setEmail("");
      setError("");
    },
    onError: (err) => {
      setError(err.message || "Failed to add user");
    },
  });

  function handleSubmit(e) {
    e.preventDefault();
    const trimmedName = name.trim();
    const trimmedEmail = email.trim();

    if (!trimmedName || !trimmedEmail) {
      setError("Please fill in all fields");
      return;
    }

    if (!trimmedEmail.includes("@")) {
      setError("Please enter a valid email");
      return;
    }

    setError("");
    mutation.mutate({ name: trimmedName, email: trimmedEmail });
  }

  return (
    <div className="rounded-lg shadow-lg p-5">
      <h1 className="text-center mb-4 font-semibold text-2xl">Add User</h1>

      {error && (
        <div className="mb-4 p-3 bg-red-100 text-red-700 rounded-md">
          {error}
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="name" className="block font-medium mb-1">
            User Name
          </label>
          <input
            type="text"
            value={name}
            id="name"
            onChange={(e) => setName(e.target.value)}
            className="border p-2 w-full rounded-md"
          />
        </div>

        <div>
          <label htmlFor="email" className="block font-medium mb-1">
            User Email
          </label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="border p-2 w-full rounded-md"
          />
        </div>

        <button
          disabled={mutation.isPending}
          type="submit"
          className="py-2 bg-green-900 text-white rounded-md px-4"
        >
          {mutation.isPending ? "Adding..." : "Add"}
        </button>
      </form>
    </div>
  );
}
