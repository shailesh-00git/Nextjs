"use client";
import { useState } from "react";
import { authClient } from "../../../lib/auth-clients";
import { redirect } from "next/navigation";
const SignUpPage = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const { data, error: signupError } = await authClient.signUp.email(
      {
        name,
        email,
        password,
      },
      {
        onRequest: () => setLoading(true),
        onSuccess: () => {
          setLoading(false);
          setName("");
          setEmail("");
          setPassword("");
          redirect("/dashboard");
        },
        onError: (ctx) => {
          setLoading(false);
          alert("Signup failed: " + ctx.error.message);
        },
      },
    );
  };

  // handle google sign up
  const handleGoogleSignUp = async () => {
    await authClient.signIn.social({
      provider: "google", // the name of the provider you want to use
      callbackURL: "/dashboard",
    });
  };

  return (
    <div className="max-w-7xl mx-auto p-5">
      <div className="max-w-md mx-auto p-6 bg-gray-100 shadow-md rounded-lg flex flex-col gap-5">
        <h1 className="text-2xl font-semibold text-center mb-4">Sign Up</h1>
        <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Name"
            className="border border-gray-400 p-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
          <input
            type="email"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Email"
            className="border border-gray-400 p-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
          <input
            type="password"
            name="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Password"
            className="border border-gray-400 p-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
          />

          <button
            type="submit"
            disabled={loading}
            className={`bg-blue-500 text-white p-2 rounded hover:bg-blue-600 transition-colors ${
              loading ? "opacity-50 cursor-not-allowed" : ""
            }`}
          >
            {loading ? "Signing Up..." : "Sign Up"}
          </button>
        </form>
        <div className="flex items-center gap-2">
          <hr className="flex-grow border-gray-400" />
          <span className="text-gray-500">or</span>
          <hr className="flex-grow border-gray-400" />
        </div>
        <button
          onClick={handleGoogleSignUp}
          className="bg-red-500 text-white p-2 rounded hover:bg-red-600 transition-colors"
        >
          Sign Up with Google
        </button>
      </div>
    </div>
  );
};

export default SignUpPage;
