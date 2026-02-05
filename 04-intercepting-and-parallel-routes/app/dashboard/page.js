import Link from "next/link";
import React from "react";

const DashboardPage = () => {
  return (
    <div>
      <h1>reports page</h1>
      <Link href={"/dashboard/reports"}>view reports</Link>
      <br></br>
      <Link href={"/profile"}>view profile</Link>
      <br></br>
      <Link href={"/dashboard/section"}>view section</Link>
    </div>
  );
};

export default DashboardPage;
