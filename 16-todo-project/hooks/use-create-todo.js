import { createTodo, getTodo } from "@/actions/todo-actions";
import { useTodoStore } from "@/store/todo-store";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";

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

//function to get todos
export function useTodos() {
  const setTodos = useTodoStore((state) => state.setTodos);
  return useQuery({
    queryKey: todoKeys.list(),
    queryFn: async () => {
      const result = await getTodo();
      if (result.success) {
        // update the zustand state with the updated data
        setTodos(result.data);
        return result.data;
      }
      throw new Error(result.error);
    },
  });
}
