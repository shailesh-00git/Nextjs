import { connectDB } from "@/dbConnection/dbConnection";

export default async function Home() {
  await connectDB();
  return (
    <div>
      <h1>Home page</h1>
    </div>
  );
}
