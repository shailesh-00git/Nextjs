"use client";

import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { useState } from "react";

async function fetchUsers() {
  const res = await fetch("/api/users");
  if (!res.ok) throw new Error("Failed to fetch users");
  return res.json();
}

async function deleteUser(id) {
  const res = await fetch("/api/users", {
    method: "DELETE",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ id }),
  });
  if (!res.ok) throw new Error("Failed to delete user");
  return res.json();
}

export default function UserList() {
  const queryClient = useQueryClient();
  const [deletingUserId, setDeletingUserId] = useState(null); // track current deleting user

  const { data, isLoading, isError } = useQuery({
    queryKey: ["users"],
    queryFn: fetchUsers,
  });

  const deleteMutation = useMutation({
    mutationFn: deleteUser,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["users"] });
      setDeletingUserId(null); // reset after deletion
    },
  });

  function handleDeleteUser(id) {
    setDeletingUserId(id); // mark this user as deleting
    deleteMutation.mutate(id);
  }

  if (isLoading)
    return <div className="p-20 grid place-content-center">Loading...</div>;
  if (isError) return <p>Something went wrong</p>;

  return (
    <div>
      {data && data.length > 0 ? (
        data.map((user) => (
          <div
            key={user.id}
            className="shadow-md hover:bg-gray-50 border-gray-600 rounded-xl p-3 mt-3"
          >
            <div className="flex justify-between items-center">
              <div>
                <p className="text-gray-700 font-semibold">{user.name}</p>
                <p className="text-gray-500">{user.email}</p>
              </div>
              <button
                onClick={() => handleDeleteUser(user.id)}
                disabled={deletingUserId === user.id}
                className={`px-3 py-2 rounded-lg transition-all duration-200 ${
                  deletingUserId === user.id
                    ? "bg-gray-400 cursor-not-allowed"
                    : "bg-red-400 hover:bg-red-500"
                }`}
              >
                {deletingUserId === user.id ? "Deleting..." : "Delete"}
              </button>
            </div>
          </div>
        ))
      ) : (
        <div className="text-center text-gray-500 mt-5 text-2xl">
          No users found
        </div>
      )}
    </div>
  );
}
