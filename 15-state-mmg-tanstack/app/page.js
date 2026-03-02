import UserList from "@/components/users-list";
import { Divide } from "lucide-react";
import Image from "next/image";

export default function Home() {
  return (
    <div className="container mx-auto p-6 max-w-9xl">
      <h1 className=" text-center text-4xl font-semibold text-gray-800 mb-8">
        TanStack Query Demo
      </h1>
      <div className="">
        <div className="space-y-5 border rounded-2xl p-5 border-black">
          <UserList></UserList>
        </div>
      </div>
    </div>
  );
}
