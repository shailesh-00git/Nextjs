import { auth } from "../../lib/auth";
import { headers } from "next/headers";
const DashboardPage = async () => {
  const session = await auth.api.getSession({
    headers: await headers(), // you need to pass the headers object.
  });

  return (
    <div className="max-w-7xl mx-auto p-5 flex justify-center flex-col items-center gap-5">
      <h1 className="text-3xl">Welcome to the Dashboard</h1>
      <h1 className="text-4xl text-amber-700">{session.user.name}</h1>
    </div>
  );
};

export default DashboardPage;
