"use client";

import { useTodos } from "@/hooks/use-create-todo";
import { Card, CardContent } from "./ui/card";
import { Loader2, ClipboardList } from "lucide-react";
import { useTodoStore } from "@/store/todo-store";
import TodoItem from "./todo-item";
import { useMemo } from "react";

export const TodoList = () => {
  const { data: todos, isLoading, error } = useTodos();

  // Get only the filter status from the store, not the items themselves
  const filterStatus = useTodoStore((state) => state.filterStatus);

  // Derived State: Filter the todos whenever the data or the filter changes
  const displayTodos = useMemo(() => {
    if (!todos) return [];
    if (filterStatus === "completed") return todos.filter((t) => t.completed);
    if (filterStatus === "active") return todos.filter((t) => !t.completed);
    return todos;
  }, [todos, filterStatus]);

  // 1. Loading State
  if (isLoading) {
    return (
      <Card className="border-none shadow-none bg-transparent">
        <CardContent className="p-8 flex justify-center">
          <Loader2 className="animate-spin text-primary" />
        </CardContent>
      </Card>
    );
  }

  // 2. Error State
  if (error) {
    return (
      <Card className="border-destructive/50">
        <CardContent className="p-8 text-center text-destructive">
          <p>Error loading: {error.message}</p>
        </CardContent>
      </Card>
    );
  }

  // 3. Empty State (No todos exist at all)
  if (!todos || todos.length === 0) {
    return (
      <Card className="border-dashed">
        <CardContent className="p-12 text-center text-muted-foreground">
          <ClipboardList className="mx-auto mb-2 opacity-20" size={40} />
          <p>No todos yet. Create your first task above!</p>
        </CardContent>
      </Card>
    );
  }

  // 4. Filtered Empty State (Todos exist, but none match the filter)
  if (displayTodos.length === 0) {
    return (
      <div className="p-8 text-center text-muted-foreground">
        No todos match the "<strong>{filterStatus}</strong>" filter.
      </div>
    );
  }

  // 5. Success State
  return (
    <div className="space-y-4">
      {displayTodos.map((todo) => (
        <TodoItem key={todo._id} todo={todo} />
      ))}
    </div>
  );
};
