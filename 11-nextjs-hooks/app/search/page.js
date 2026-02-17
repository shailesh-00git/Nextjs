"use client";

import { useSearchParams } from "next/navigation";

function SearchPage() {
  const searshParams = useSearchParams();

  //get single query params only
  const catrgory = searshParams.get("category");
  const product = searshParams.get("product");

  //give all the query params at once
  const allprams = Array.from(searshParams.entries());
  console.log(allprams);

  return (
    <div>
      <p>category: {catrgory}</p>
      <p>Product: {product}</p>
    </div>
  );
}

export default SearchPage;
