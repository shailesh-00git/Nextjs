import { TodoForm } from "@/components/todo-form";
import { TodoList } from "@/components/list";
import TodoFilter from "@/components/todo-filter";

export default async function Home() {
  return (
    <div className="min-h-screen bg-gray-100">
      <div className="max-w-2xl mx-auto py-4 px-8">
        <header className="text-center mb-8 p-3">
          <h1 className="text-4xl font-bold text-gray-800">TODO APP</h1>
          <p className="text-gray-500">
            Made with nextJS, Zustand, TansTack ,Zod and mongoose
          </p>
        </header>
        <main>
          <TodoForm />
          <TodoFilter />
          <TodoList />
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
