import { createTodo } from "@/actions/todo-actions";
import { createTodoSchema } from "@/validations/todo";
import { useTodoStore } from "@/store/todo-store";
import { useMutation, useQueryClient } from "@tanstack/react-query";

export const todoKeys = {
  all: ["todo"],
  list: () => [...todoKeys.all, "lists"],
};
export function useCreateTodo() {
  const queryClient = useQueryClient();
  const addTodo = useTodoStore((state) => state.addTodo);
  return useMutation({
    mutationFn: (data) => createTodo(data),
    onSuccess: (result) => {
      if (result.success) {
        addTodo(result.data);
        queryClient.invalidateQueries({ queryKey: todoKeys.list() });
      }
    },
  });
}
