async function createPost(formData) {
  "use server";
  const name = formData.get("name");
  const email = formData.get("email");
  const dep = formData.get("department");

  console.log("Form Data received:", { name, email, dep });
}

export default function Admit() {
  return (
    <main className="max-w-7xl mx-auto m-5">
      <h1 className="text-3xl font-semibold mb-5 text-center">Admit student</h1>

      {/* USE lowercase 'form' for Server Actions */}
      <form action={createPost} className="p-5 rounded-lg border w-100">
        <div className="mb-3">
          <label htmlFor="name" className="block mb-2 text-2xl">
            Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            className="w-full border rounded-lg p-2 text-slate-700"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="email" className="block mb-2 text-2xl">
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            className="w-full border rounded-lg p-2 text-slate-700"
          />
        </div>
        <div>
          <label htmlFor="department" className="block mb-2 text-2xl">
            Department
          </label>
          <select
            name="department"
            required
            className="w-full border rounded-lg p-2 text-slate-700"
          >
            <option value="">Choose Department</option>
            <option value="BCA">BCA</option>
            <option value="CSIT">CSIT</option>
            <option value="Civil">Civil</option>
          </select>
        </div>
        <button
          type="submit"
          className="px-2 py-2 bg-green-800 text-white w-full text-lg rounded-2xl mt-5 hover:bg-green-700 transition-colors"
        >
          Create
        </button>
      </form>
    </main>
  );
}
