import { headers } from "next/headers";
import { NextResponse } from "next/server";

export async function GET(request) {
  //  getting request headers
  // const requestHeaders = request.headers;
  //const authHeader = requestHeaders.get("Authorization");
  //console.log(authHeader);

  //getting header list
  const headerList = await headers();
  const authHeader = headerList.get("Authorization");
  console.log(authHeader);

  return new Response("<h1>Profile Page<h1>", {
    headers: {
      "Content-Type": "text/html",

      //custom header
      "X-Custom-Header": "He He He",
    },
  });
}
