"use client";

import { useQuery } from "@tanstack/react-query";

async function fetchUsers() {
  const response = await fetch("/api/users");
  if (!response.ok) {
    throw new Error("Failed to fetch users");
  }
  return response.json();
}

export default function UserList() {
  const { data, isLoading, isError } = useQuery({
    queryKey: ["users"],
    queryFn: fetchUsers,
  });

  if (isLoading) return <p>Loading...</p>;
  if (isError) return <p>Something went wrong</p>;

  return (
    <div>
      {data.map((user) => (
        <div
          className="shadow-md hover:bg-gray-50  border-gray-600 rounded-xl p-3 mt-3"
          key={user.id}
        >
          <div className="flex justify-between items-center ">
            <div>
              <p className="text-gray-700 font-semibold ">{user.name}</p>
              <p className="text-gray-500">{user.email}</p>
            </div>
            <div className="space-x-3">
              <button className="bg-blue-400 text-white px-4 py-2 rounded-lg hover:bg-blue-500 transition-all duration-200">
                update
              </button>
              <button className="bg-red-400 text-white px-3 py-2 rounded-lg hover:bg-red-500 transition-all duration-200">
                delete
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
