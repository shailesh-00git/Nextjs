export default async function Page({ params }) {
  const resolvedParams = await params;
  const id = resolvedParams.id;

  return (
    <div>
      <h1>Page ID: {id}</h1>
    </div>
  );
}
