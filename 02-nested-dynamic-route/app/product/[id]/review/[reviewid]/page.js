export default async function Page({ params }) {
  const resolvedParams = await params;
  const id = resolvedParams.id;
  const reviewid = resolvedParams.reviewid;

  return (
    <div>
      <h1>Page ID: {id}</h1>
      <h1>Review ID: {reviewid}</h1>
    </div>
  );
}
