"use client";
import React from "react";
import { authClient } from "../../../lib/auth-clients";
import { redirect } from "next/navigation";
const SignInPage = () => {
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [loading, setLoading] = React.useState(false);
  const HandlesignIn = async (e) => {
    e.preventDefault();
    setLoading(true);
    const { data, error } = await authClient.signIn.email(
      {
        email,
        password,
      },
      {
        onSuccess: () => {
          setLoading(false);
          redirect("/dashboard");
        },
        onError: (ctx) => {
          setLoading(false);
          alert("Sign in failed: " + ctx.error.message);
        },
      },
    );
  };
  if (loading) {
    return (
      <div className="max-w-2xl mt-7 mx-auto flex justify-center flex-col items-center gap-5 ">
        <h1 className="text-2xl text-blue-500">Signing In...</h1>
      </div>
    );
  }
  return (
    <div className="max-w-2xl mt-7 mx-auto flex justify-center flex-col items-center gap-5 ">
      <form
        className="flex flex-col gap-4 border p-5 rounded"
        onSubmit={HandlesignIn}
      >
        <h1 className="text-blue-500 text-2xl text-center">Sign In</h1>

        <input
          type="email"
          name="email"
          placeholder="Email"
          className="border p-1 rounded"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="border p-1 rounded"
        />
        <button
          type="submit"
          className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600"
          disabled={loading}
        >
          {loading ? "Signing In..." : "Sign In"}
        </button>
      </form>
    </div>
  );
};

export default SignInPage;
