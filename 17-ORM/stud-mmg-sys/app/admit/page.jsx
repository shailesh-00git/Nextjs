import { createPost } from "@/app/actions/postActions";
import { User, Mail, GraduationCap, ArrowRight } from "lucide-react";

export default function Admit() {
  return (
    <main className="min-h-screen bg-white flex items-center justify-center p-6 font-sans text-slate-900">
      <div className="w-full max-w-md border border-slate-200 rounded-xl p-8 shadow-lg">
        {/* Simple Icon Header */}
        <div className="flex flex-col items-center mb-10">
          <h1 className="text-xl font-semibold tracking-tight text-slate-800">
            New Admission
          </h1>
          <p className="text-slate-400 text-sm">Enter student details</p>
        </div>

        <form action={createPost} className="space-y-6">
          {/* Name Field - Rounded Pill */}
          <div className="space-y-1.5">
            <label
              htmlFor="name"
              className="text-[11px] font-bold text-slate-400 uppercase tracking-widest ml-4"
            >
              Full Name
            </label>
            <div className="relative">
              <User
                className="absolute left-5 top-1/2 -translate-y-1/2 text-slate-300"
                size={18}
              />
              <input
                type="text"
                id="name"
                name="name"
                required
                placeholder="Student name"
                className="w-full pl-12 pr-6 py-3.5 bg-slate-50 border-none rounded-full outline-none focus:ring-2 focus:ring-slate-200 transition-all text-sm font-medium placeholder:text-slate-300"
              />
            </div>
          </div>

          {/* Email Field */}
          <div className="space-y-1.5">
            <label
              htmlFor="email"
              className="text-[11px] font-bold text-slate-400 uppercase tracking-widest ml-4"
            >
              Email Address
            </label>
            <div className="relative">
              <Mail
                className="absolute left-5 top-1/2 -translate-y-1/2 text-slate-300"
                size={18}
              />
              <input
                type="email"
                id="email"
                name="email"
                required
                placeholder="student@example.com"
                className="w-full pl-12 pr-6 py-3.5 bg-slate-50 border-none rounded-full outline-none focus:ring-2 focus:ring-slate-200 transition-all text-sm font-medium placeholder:text-slate-300"
              />
            </div>
          </div>

          {/* Department Selection */}
          <div className="space-y-1.5">
            <label
              htmlFor="department"
              className="text-[11px] font-bold text-slate-400 uppercase tracking-widest ml-4"
            >
              Department
            </label>
            <select
              id="department"
              name="department"
              required
              className="w-full px-6 py-3.5 bg-slate-50 border-none rounded-full outline-none focus:ring-2 focus:ring-slate-200 transition-all text-sm font-medium text-slate-600 appearance-none cursor-pointer"
            >
              <option value="">Select Dept</option>
              <option value="BCA">BCA</option>
              <option value="CSIT">CSIT</option>
              <option value="Civil">Civil</option>
            </select>
          </div>

          {/* Submit Button - Soft Dark */}
          <div className="pt-4">
            <button
              type="submit"
              className="w-full bg-slate-900 text-white py-4 rounded-full font-bold text-sm flex items-center justify-center gap-2 hover:bg-slate-800 active:scale-[0.98] transition-all shadow-lg shadow-slate-100"
            >
              Confirm Admission
              <ArrowRight size={16} />
            </button>
          </div>
        </form>
      </div>
    </main>
  );
}
