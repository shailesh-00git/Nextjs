import React from "react";
import Image from "next/image";
import Link from "next/link";

function NotFoundPage() {
  return (
    <div className="flex flex-col justify-center items-center h-screen">
      <Image
        src={"/not-found.svg"}
        alt="not-found-imge"
        height={400}
        width={400}
      ></Image>
      <Link
        href={"/"}
        className="px-6 py-2 bg-blue-500 text-2xl mt-10 rounded-lg text-white"
      >
        {" "}
        Go to home
      </Link>
    </div>
  );
}

export default NotFoundPage;
