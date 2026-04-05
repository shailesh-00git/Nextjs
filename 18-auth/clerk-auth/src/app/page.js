import { currentUser } from "@clerk/nextjs/server";
import Image from "next/image";

export default async function Home() {
  const user = await currentUser();
  // console.log(user);
  return (
    <div className="flex min-h-screen flex-col items-center gap-5">
      <h1 className="text-4xl font-bold">Welcome to Clerk Auth Example</h1>
      {user.imageUrl && (
        <Image
          src={user.imageUrl}
          alt="Profile Image"
          width={100}
          height={100}
          className="rounded-full"
        />
      )}
      <p className="text-lg mt-4">
        {user ? `Hello, ${user.firstName}!` : "You are not signed in."}
      </p>
    </div>
  );
}
