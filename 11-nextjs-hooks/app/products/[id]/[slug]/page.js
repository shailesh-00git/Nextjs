"use client";
import { useParams } from "next/navigation";

function ProductsIdSlugPage() {
  // useParams only used in the client components
  const params = useParams();
  console.log(params);

  return (
    <div>
      ProductsIdSlugPage
      <p>{params.id}</p>
      <p>{params.slug}</p>
    </div>
  );
}

export default ProductsIdSlugPage;
