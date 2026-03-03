import AddUser from "@/components/add-user";
import UserList from "@/components/users-list";

export default function Home() {
  return (
    <div className="container mx-auto p-6 max-w-9xl">
      <h1 className=" text-center  text-2xl md:text-4xl font-semibold text-gray-800 mb-8">
        TanStack Query Demo
      </h1>
      <div className="">
        <div className="space-y-5 border rounded-2xl p-4 border-black grid grid-cols-1 md:grid-cols-2 gap-4">
          <AddUser></AddUser>
          <UserList></UserList>
        </div>
      </div>
    </div>
  );
}
