import { NextResponse } from "next/server";

export async function GET() {
  // Create a Date object instance to access formatting methods
  const now = new Date();

  try {
    return NextResponse.json(
      {
        timeStamp: now.toISOString(), // ISO format is standard for APIs
        readable: now.toLocaleString(),
        unix: now.getTime(),
        message: "Timer API called successfully",
        requestId: Math.random().toString(36).substring(2, 7), // Standardized substring
      },
      { status: 200 },
    );
  } catch (error) {
    // Crucial: You must RETURN the response here
    return NextResponse.json(
      { err: "Failed to call API", details: error.message },
      { status: 500 }, // 500 is more appropriate for a server-side catch
    );
  }
}
