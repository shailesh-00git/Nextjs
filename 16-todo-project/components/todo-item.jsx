"use client";

import { useState } from "react";
import { Checkbox } from "./ui/checkbox";
import { Card, CardContent } from "./ui/card";
import { Button } from "./ui/button";
import { Trash2, Loader2 } from "lucide-react";
import { cn } from "@/lib/utils";
// Optional: import { useUpdateTodo, useDeleteTodo } from "@/hooks/use-todo-mutations";

const TodoItem = ({ todo }) => {
  const [isDeleting, setIsDeleting] = useState(false);
  const [isUpdating, setIsUpdating] = useState(false);

  // These would come from your custom mutation hooks
  // const { mutate: updateTodo } = useUpdateTodo();
  // const { mutate: deleteTodo } = useDeleteTodo();

  const handleToggle = async () => {
    setIsUpdating(true);
    try {
      // await updateTodo({ id: todo._id, completed: !todo.completed });
      console.log("Toggled:", todo._id);
    } finally {
      setIsUpdating(false);
    }
  };

  const handleDelete = async () => {
    setIsDeleting(true);
    try {
      // await deleteTodo(todo._id);
      console.log("Deleted:", todo._id);
    } finally {
      setIsDeleting(false);
    }
  };

  return (
    <Card
      className={cn(
        "transition-all duration-200",
        todo.completed ? "bg-muted/50 opacity-70" : "bg-card",
      )}
    >
      <CardContent className="p-4 flex items-center justify-between gap-4">
        <div className="flex items-center gap-3 flex-1">
          {isUpdating ? (
            <Loader2 className="h-4 w-4 animate-spin text-primary" />
          ) : (
            <Checkbox
              id={todo._id}
              checked={todo.completed}
              onCheckedChange={handleToggle}
              disabled={isDeleting}
            />
          )}

          <label
            htmlFor={todo._id}
            className={cn(
              "text-sm font-medium leading-none cursor-pointer select-none",
              todo.completed && "line-through text-muted-foreground",
            )}
          >
            {todo.title || todo.text}
          </label>
        </div>

        <Button
          variant="ghost"
          size="icon"
          onClick={handleDelete}
          disabled={isDeleting || isUpdating}
          className="text-muted-foreground hover:text-destructive hover:bg-destructive/10"
        >
          {isDeleting ? (
            <Loader2 className="h-4 w-4 animate-spin" />
          ) : (
            <Trash2 className="h-4 w-4" />
          )}
        </Button>
      </CardContent>
    </Card>
  );
};

export default TodoItem;
