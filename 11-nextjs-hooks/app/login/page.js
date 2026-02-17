"use client";

// CHANGE: next/router -> next/navigation
import { useRouter } from "next/navigation";

const LoginPage = () => {
  const router = useRouter();

  function handleClick() {
    // This will now work as expected
    router.replace("/products");
  }

  return (
    <div style={{ padding: "20px" }}>
      <h1>This is login page</h1>
      <button
        onClick={handleClick}
        style={{ padding: "8px 16px", cursor: "pointer" }}
      >
        Go to home page
      </button>
    </div>
  );
};

export default LoginPage;
