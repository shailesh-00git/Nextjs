import { TodoForm } from "@/components/todo-form";
import connectdb from "@/lib/db";

export default async function Home() {
  return (
    <div className="min-h-screen bg-cyan-50">
      <div className="max-w-2xl mx-auto py-4 px-8">
        <header className="text-center mb-8 p-3">
          <h1 className="text-4xl font-bold text-gray-800">TODO APP</h1>
          <p className="text-gray-500">
            Made with nextJS, Zustand, TansTack ,Zod and mongoose
          </p>
        </header>
        <main>
          <TodoForm />
        </main>
      </div>
      <footer className="text-center mt-12 text-gray-400">
        <p>
          This app demonstrates the cured operation with modern react patterns
        </p>
      </footer>
    </div>
  );
}
