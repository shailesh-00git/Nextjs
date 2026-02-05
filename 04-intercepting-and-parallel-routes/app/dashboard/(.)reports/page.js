import Link from "next/link";
import React from "react";

const InterceptedRoutes = () => {
  return (
    <div>
      {" "}
      <h1>Intercepted Report page modal</h1>
      <Link href={"/dashboard"}>Go back to dashboard</Link>
    </div>
  );
};

export default InterceptedRoutes;
