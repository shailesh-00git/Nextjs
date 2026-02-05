import React from "react";
import Link from "next/link";

const ProfilePage = () => {
  return (
    <div>
      <h1>Intercepted one level up profile</h1>
      <Link href={"/dashboard"}>go to dashboard</Link>
    </div>
  );
};

export default ProfilePage;
