"use client";
import React, { useState } from "react";
import {
  Users,
  GraduationCap,
  Search,
  Plus,
  MoreVertical,
  BookOpen,
  Filter,
  Briefcase, // Added for Faculty feel
  Mail,
} from "lucide-react";

export default function Home() {
  const students = [
    {
      id: "1",
      name: "shailesh yadav",
      department: "BCA",
      email: "shailesh@gmail.com",
    },
    {
      id: "2",
      name: "shailesh yadav",
      department: "BCA",
      email: "shailesh@gmail.com",
    },
  ];

  // const [searchTerm, setSearchTerm] = useState("");

  // // Filter logic for Faculty
  // const filteredFaculty = faculty.filter(
  //   (f) =>
  //     f.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
  //     f.dept.toLowerCase().includes(searchTerm.toLowerCase()),
  // );

  return (
    <div className="min-h-screen bg-[#f8fafc] flex font-sans">
      {/* Sidebar */}
      <aside className="w-64 bg-white border-r border-slate-200 hidden lg:flex flex-col">
        <div className="p-6 flex items-center gap-3 border-b border-slate-100">
          <div className="bg-indigo-600 p-2 rounded-lg shadow-sm">
            <GraduationCap className="text-white w-6 h-6" />
          </div>
          <span className="text-xl font-bold text-slate-800 tracking-tight">
            EduAdmin
          </span>
        </div>

        <nav className="p-4 space-y-1">
          <SidebarLink icon={<Briefcase size={20} />} label="Faculty" active />
          <SidebarLink icon={<Users size={20} />} label="Students" />
          <SidebarLink icon={<BookOpen size={20} />} label="Departments" />
          <SidebarLink icon={<Filter size={20} />} label="Schedules" />
        </nav>
      </aside>

      {/* Main Content */}
      <main className="flex-1">
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
              // value={searchTerm}
              // onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>

          <button className="hidden md:flex items-center gap-2 bg-indigo-600 hover:bg-indigo-700 text-white px-5 py-2.5 rounded-xl font-medium transition-all shadow-sm">
            <Plus size={20} />
            Add student
          </button>
        </header>

        {/* Dashboard Body */}
        <div className="p-8">
          <div className="mb-8">
            <h2 className="text-2xl font-bold text-slate-800">Student List</h2>
            <p className="text-slate-500">
              List of students of different faculties.
            </p>
          </div>

          {/* Table Container */}
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
                    <td className="px-6 py-4">
                      <div className="flex flex-col">
                        <span className="font-semibold text-slate-700 group-hover:text-indigo-600 transition-colors">
                          {student.name}
                        </span>
                      </div>
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

            {/* {filteredFaculty.length === 0 && (
              <div className="p-12 text-center text-slate-500">
                No faculty found matching your search.
              </div>
            )} */}
          </div>
        </div>
      </main>
    </div>
  );
}

function SidebarLink({ icon, label, active = false }) {
  return (
    <div
      className={`flex items-center gap-3 px-4 py-3 rounded-xl cursor-pointer transition-all ${
        active
          ? "bg-indigo-50 text-indigo-600 border border-indigo-100"
          : "text-slate-500 hover:bg-slate-50 hover:text-slate-800"
      }`}
    >
      {icon}
      <span className="font-semibold text-sm">{label}</span>
    </div>
  );
}
