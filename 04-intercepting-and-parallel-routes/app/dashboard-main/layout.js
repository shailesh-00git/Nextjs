import Link from "next/link";
import React from "react";

const DashboardLayout = ({ feeds, stats, tab1, tab2 }) => {
  return (
    <>
      <div className=" max-w-6xl mx-auto mt-10 border flex gap-10 p-5 justify-between">
        <div className="border p-5 ">{feeds}</div>
        <div className="border p-5 ">{stats}</div>
      </div>

      <div className="max-w-6xl p-10 mx-auto">
        <Link
          className="px-6 py-2 rounded-lg bg-amber-500  text-white"
          href={"/dashboard-main/tab1"}
        >
          Tab1
        </Link>
        <br></br>
        <br></br>
        <Link
          className="px-6 py-2 rounded-lg bg-amber-500 text-white"
          href={"/dashboard-main/tab2"}
        >
          Tab2
        </Link>
        <div>
          {tab1}
          {tab2}
        </div>
      </div>
    </>
  );
};

export default DashboardLayout;
