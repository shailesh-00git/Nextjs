import { Search, Plus } from "lucide-react";
import prisma from "@/lib/prisma";
import Link from "next/link";

async function Home() {
  const students = await prisma.post.findMany();

  return (
    <div className="min-h-screen bg-[#f8fafc] font-sans">
      {/* Top Header */}
      <header className="h-20 bg-white border-b border-slate-200 flex items-center justify-between px-8 sticky top-0 z-10">
        <div className="relative w-full max-w-md">
          <Search
            className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400"
            size={18}
          />
          <input
            type="text"
            placeholder="Search faculty or department..."
            className="w-full pl-10 pr-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 transition-all outline-none text-slate-600"
          />
        </div>
        <Link href="/admit">
          <button className="hidden md:flex items-center gap-2 bg-indigo-600 hover:bg-indigo-700 text-white px-5 py-2.5 rounded-xl font-medium transition-all shadow-sm">
            <Plus size={20} />
            Add Student
          </button>
        </Link>
      </header>

      {/* Dashboard Body */}
      <main className="p-8">
        <div className="mb-8">
          <h2 className="text-2xl font-bold text-slate-800">Student List</h2>
          <p className="text-slate-500">
            List of students of different faculties.
          </p>
        </div>

        {/* Table */}
        <div className="bg-white rounded-2xl border border-slate-200 overflow-hidden">
          <table className="w-full text-left">
            <thead>
              <tr className="bg-slate-50/50 border-b border-slate-200">
                <th className="px-6 py-4 text-xs font-semibold text-slate-500 uppercase tracking-wider">
                  Student ID
                </th>
                <th className="px-6 py-4 text-xs font-semibold text-slate-500 uppercase tracking-wider">
                  Student Name
                </th>
                <th className="px-6 py-4 text-xs font-semibold text-slate-500 uppercase tracking-wider">
                  Department
                </th>
                <th className="px-6 py-4 text-xs font-semibold text-slate-500 uppercase tracking-wider">
                  Email
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {students.map((student) => (
                <tr
                  key={student.id}
                  className="hover:bg-slate-50 transition-colors group"
                >
                  <td className="px-6 py-4 text-sm font-medium text-slate-400 font-mono">
                    {student.id}
                  </td>
                  <td className="px-6 py-4 font-semibold text-slate-700 group-hover:text-indigo-600 transition-colors">
                    {student.name}
                  </td>
                  <td className="px-6 py-4 text-sm text-slate-600 font-medium">
                    {student.department}
                  </td>
                  <td className="px-6 py-4 text-sm text-slate-600 font-medium">
                    {student.email}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </main>
    </div>
  );
}

export default Home;
