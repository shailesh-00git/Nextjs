import React from "react";

const Page = async ({ params }) => {
  const resolvedParams = await params;

  return <div>{resolvedParams.slug?.join("/")}</div>;
};

export default Page;
