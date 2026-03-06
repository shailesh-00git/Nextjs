import connectdb from "@/lib/db";

export default async function Home() {
  const conn = await connectdb();
  console.log(conn);
  return (
    <div>
      <button className="bg-gray-900 rounded-lg text-white px-4 py-2 text-xl">
        Welcome to TODO app
      </button>
    </div>
  );
}
