export default async function Home() {
  const res = await fetch("http://localhost:3000/api/timer", {
    cache: "force-cache",
    next: {
      revalidate: 10,
    },
  });
  const data = await res.json();

  return (
    <div>
      <h1>Next Response (Default) </h1>
      <p>Time:{data.readable}</p>
      <p>Reques Id:{data.requestId}</p>
    </div>
  );
}
