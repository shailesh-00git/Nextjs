"use client";

import { useParams } from "next/navigation";

function ProductsIdSlugPage() {
  const params = useParams();
  console.log(params);

  return <div>ProductsIdSlugPage</div>;
}

export default ProductsIdSlugPage;
