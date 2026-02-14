import { notFound } from "next/navigation";
import React from "react";

const Reviews = async ({ params }) => {
  const { id } = await params;

  //If the id > N show not found page either of nextjs or custom
  if (parseInt(id) > 20) {
    notFound();
  }
  return <div>ID: {id}</div>;
};

export default Reviews;
