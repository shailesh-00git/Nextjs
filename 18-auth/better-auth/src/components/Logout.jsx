"use client";
import { authClient } from "../lib/auth-clients";
import { redirect, useRouter } from "next/navigation";
import React from "react";
async function handleLogout() {
  await authClient.signOut({
    fetchOptions: {
      onSuccess: () => {
        redirect("/auth/signin");
      },
    },
  });
}
const Logout = () => {
  return (
    <div>
      <button
        onClick={handleLogout}
        className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600"
      >
        Logout
      </button>
    </div>
  );
};

export default Logout;
