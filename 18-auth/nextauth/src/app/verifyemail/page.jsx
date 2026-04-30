"use client";
import axios from "axios";
import { useSearchParams } from "next/navigation";
import { useRouter } from "next/navigation";
import { useState } from "react";
import toast from "react-hot-toast";

export default function VerifyEmailPage() {
  const searchParams = useSearchParams();
  const token = searchParams.get("token");
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();

  //function
  async function handleVerify(e) {
    e.preventDefault();
    try {
      setIsLoading(true);
      const response = await axios.post("/api/users/verifyemail", { token });
      if (response.status === 200) {
        toast.success("Email verified successfully");
      }
      router.push("/login");
    } catch (error) {
      toast.error("failed to verify email");
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <div className="min-h-screen grid place-content-center bg-gray-300">
      <div className="max-w-100 mx-auto shadow-md p-6 rounded-xl bg-slate-100 ">
        <h1 className="text-center text-3xl mb-5 mt-4 font-bold">
          Click to verify
        </h1>
        <p className="text-center text-slate-600">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Error culpa
          voluptas minima nam officia dolore, animi assumenda ab amet
          repudiandae a suscipit voluptates architecto, perferendis eaque quia
          rerum. Similique, ipsam?
        </p>
        <form onSubmit={handleVerify} className="space-y-4">
          <button
            className="p-2 w-full mt-4 text-xl rounded-2xl bg-blue-400 text-white disabled:opacity-90"
            disabled={isLoading}
          >
            {isLoading ? "Verifying..." : "verify"}
          </button>
        </form>
      </div>
    </div>
  );
}
