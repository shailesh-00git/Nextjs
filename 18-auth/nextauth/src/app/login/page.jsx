"use client";
import axios from "axios";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";

export default function LoginPage() {
  const router = useRouter();

  const [user, setUser] = useState({
    email: "",
    password: "",
  });
  const [isLoading, setIsLoading] = useState(false);
  const [btnDisabled, setBtnDisabled] = useState(true);
  const [hasError, setHasError] = useState(false);

  //function
  async function handleLogin(e) {
    e.preventDefault();
    try {
      setIsLoading(true);
      setHasError(false);
      const response = await axios.post("/api/users/login", user);
      // console.log(response);

      if (response.status === 200) {
        toast.success("Login successful");
        router.push("/profile");
        setUser({ email: "", password: "" });
      }
    } catch (error) {
      if (error.response.status == 400) {
        toast.error("User doesnot exist");
      } else if (error.response.status == 401) {
        toast.error("Invalid email or password");
      } else if (error.response.status == 403) {
        toast.error("Unverified user!, verify first");
      }
      setHasError(true);
    } finally {
      setIsLoading(false);
    }
  }
  //  only able to click onSubmit
  useEffect(() => {
    setHasError(false);
    if (user.email.length > 0 && user.password.length > 0) {
      setBtnDisabled(false);
    } else {
      setBtnDisabled(true);
    }
  }, [user]);

  return (
    <div className="min-h-screen grid place-content-center bg-gray-300">
      <div className="max-w-100 mx-auto shadow-md p-5 rounded-xl bg-slate-100 ">
        <h1 className="text-center text-3xl mb-8 mt-4 font-bold">Login</h1>
        <form onSubmit={handleLogin} className="space-y-4">
          <input
            type="email"
            placeholder="email"
            value={user.email}
            onChange={(e) => setUser({ ...user, email: e.target.value })}
            className=" rounded-xl  bg-slate-200 py-2 px-4 w-full focus:outline-0 focus:ring-1 focus:ring-blue-300"
          />
          <input
            type="password"
            placeholder="password"
            value={user.password}
            onChange={(e) => setUser({ ...user, password: e.target.value })}
            className=" rounded-xl  bg-slate-200 py-2 px-4 w-full focus:outline-0 focus:ring-1 focus:ring-blue-300"
          />

          <button
            className="p-2 w-full mt-3 text-xl rounded-2xl bg-blue-400 text-white disabled:opacity-70"
            disabled={isLoading || btnDisabled || hasError}
          >
            {isLoading ? "Loging..." : "Login"}
          </button>
        </form>
        <div className="m-4 text-center">
          <p className="text-slate-600">
            Don&apos;t have account?{" "}
            <Link href={"/signup"} className="text-blue-500 hover:underline">
              signup
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
