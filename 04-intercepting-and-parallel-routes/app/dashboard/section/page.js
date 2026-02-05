import Link from "next/link";
import React from "react";

function SectionPage() {
  return (
    <div>
      <h1>Section page</h1>
      <Link href={"/setting"}>view setting</Link>
      <br></br>
      <Link href={"/admin"}>view admin</Link>
    </div>
  );
}

export default SectionPage;
