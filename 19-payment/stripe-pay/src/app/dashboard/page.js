"use client";

import { authClient } from "../../lib/auth-client";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

const Dashboard = () => {
  const router = useRouter();
  const { data: session, isPending } = authClient.useSession();

  // Handle the redirect inside useEffect to avoid the "Router update" error
  useEffect(() => {
    if (!isPending && !session) {
      router.push("/signin");
    }
  }, [session, isPending, router]);

  const handleLogout = async () => {
    await authClient.signOut({
      fetchOptions: {
        onSuccess: () => {
          router.push("/signin");
        },
      },
    });
  };

  // 1. Show a loading state while checking the session
  if (isPending) {
    return (
      <div className="flex h-screen items-center justify-center bg-[#fafafa]">
        <div className="animate-pulse text-slate-400">Loading...</div>
      </div>
    );
  }

  // 2. Return null if no session (the useEffect will handle the redirect)
  if (!session) {
    return null;
  }

  return (
    <div className="flex min-h-screen flex-col items-center justify-center gap-6 bg-[#fafafa] p-6 text-slate-900">
      <div className="flex flex-col items-center gap-2">
        <h1 className="text-3xl font-semibold tracking-tight">
          Hello, <span className="text-indigo-600">{session.user.name}</span>
        </h1>
        <p className="text-slate-500">Welcome to your dashboard</p>
      </div>

      <button
        onClick={handleLogout}
        className="rounded-xl border border-red-200 bg-white px-6 py-2 text-sm font-bold text-red-600 
                   shadow-sm transition-all hover:bg-red-50 hover:text-red-700 active:scale-95"
      >
        Logout
      </button>
    </div>
  );
};

export default Dashboard;
