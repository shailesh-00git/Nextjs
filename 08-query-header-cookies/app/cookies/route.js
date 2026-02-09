import { cookies } from "next/headers";
import { NextResponse } from "next/server";

export async function GET(request) {
  //reading cookies from the request
  // const theme = request.cookies.get("theme");
  // console.log("cookies", theme);

  const cookieStore = await cookies();
  const resultPerPage = cookieStore.get("resultPerPage");
  console.log("resultPerPage", resultPerPage);
  cookieStore.delete("resultPerPage");

  // return new Response("setting cookies", {
  //   headers: {
  //     "Set-Cookie": "theme=dark",
  //     "Set-Cookie": "resultPerPage=20",
  //   },
  // });
  return NextResponse.json({ message: " cookie deleted sucessfully" });
}
