import {
  GraduationCap,
  Briefcase,
  Users,
  BookOpen,
  Filter,
  SidebarLink,
} from "lucide-react";
const Sidebar = () => {
  return (
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
  );
};

export default Sidebar;
