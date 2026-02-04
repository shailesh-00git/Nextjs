import React from "react";

const Page = async ({ params }) => {
  const resolvedParams = await params;

  return (
    <div>
      <h1> welcomw to feature</h1>
      <h1>
        {" "}
        optional catch all segment the enhanced version of catch all segmnent
      </h1>
      {resolvedParams.slug?.join("/")}
    </div>
  );
};

export default Page;
