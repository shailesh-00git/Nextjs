import { headers } from "next/headers";
import { auth } from "../../lib/auth"; // path to your Better Auth server instance
import { redirect } from "next/navigation";
export default async function AuthLayout({ children }) {
  const session = await auth.api.getSession({
    headers: await headers(), // you need to pass the headers object.
  });
  if (session) {
    redirect("/dashboard");
  }

  return <div>{children}</div>;
}
