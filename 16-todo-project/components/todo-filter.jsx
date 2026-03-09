"use client";
import { useTodoStore } from "@/store/todo-store";
import { Button } from "@base-ui/react";
import { Card } from "./ui/card";

function TodoFilter() {
  const { filter, setFilter, completedCount, activeCount } = useTodoStore();

  const filters = [
    { key: "all", label: "All", count: activeCount() + completedCount() },
    { key: "active", label: "Active", count: activeCount() },
    { key: "completed", label: "Completed", count: completedCount() },
  ];

  return (
    <Card className="mb-6">
      <div className="flex items-center justify-center">
        <div className="flex gap-2">
          {filters.map(({ key, label, count }) => (
            <Button
              key={key}
              variant={filter === key ? "default" : "outline"}
              size="sm"
              onClick={() => setFilter(key)}
              className="relative"
            >
              {label}
              {count > 0 && (
                <span className="ml-2 bg-muted-foreground text-white rounded-full px-2 text-xs">
                  {count}
                </span>
              )}
            </Button>
          ))}
        </div>
      </div>
    </Card>
  );
}

export default TodoFilter;
