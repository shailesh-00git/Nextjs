import dbConnect from "@/lib/db";
import NotesClient from "@/components/NotesClient";

export default async function Home() {
  await dbConnect();
  return (
    <div className="mx-auto bg-amber-100 p-4">
      <h1 className="font-bold text-3xl text-center mb-6 text-gray-700">
        Notes App
      </h1>
      <NotesClient />
    </div>
  );
}
