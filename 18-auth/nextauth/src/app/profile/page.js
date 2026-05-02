"use client";
import axios from "axios";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import toast from "react-hot-toast";

const ProfilePage = () => {
  const router = useRouter();
  const [data, setData] = useState({ id: "", username: "", email: "" });
  const [hasData, setHasData] = useState(false);

  //get user detaails
  const getUserdetail = async () => {
    const res = await axios.post("/api/users/me");
    const data = res.data.data;
    // console.log(data);
    setData({ id: data._id, username: data.username, email: data.email });
  };

  //function handle logout
  async function handleLogout() {
    try {
      await axios.post("/api/users/logout");
      toast.success("User logout successfully");
      router.push("/login");
    } catch (error) {
      console.log(error.message);
      toast.error(error.message);
    }
  }
  useEffect(() => {
    if (data.email || data.id || data.username) {
      setHasData(true);
    }
  }, [data]);
  return (
    <div className="h-screen p-5 mx-auto">
      <div className="py-10 w-2xl">
        <h1 className="text-4xl text-center text-slate-900">Profile page</h1>
        <hr></hr>

        <div className="text-center p-5">
          {data && (
            <>
              <p className="text-blue-500">{data.id}</p>
              <p className="text-green-500">{data.username}</p>
              <p className="text-orange-500">{data.email}</p>
            </>
          )}
        </div>
      </div>
      <hr></hr>
      <div className="p-5 justify-around flex flex-col items-center">
        <button
          onClick={handleLogout}
          className="p-2 w-50  mt-3 text-xl rounded-2xl bg-blue-400 text-white disabled:opacity-70"
        >
          logout
        </button>
        <button
          disabled={hasData}
          onClick={getUserdetail}
          className="p-2 w-50 mt-3 text-xl rounded-2xl bg-green-500 text-white disabled:opacity-70"
        >
          get user detail
        </button>
      </div>
    </div>
  );
};
export default ProfilePage;
