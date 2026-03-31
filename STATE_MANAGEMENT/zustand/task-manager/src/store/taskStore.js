import { create } from "zustand";
import { devtools, persist } from "zustand/middleware";

const taskStore = (set) => ({
  tasks: [],
  addTask: (title, detail) => {
    set((state) => {
      return {
        tasks: [
          ...state.tasks,
          {
            id: crypto.randomUUID(),
            title: title,
            detail: detail,
            createdAt: Date.now(),
            status: "TODO",
          },
        ],
      };
    });
  },
});

const useTaskStore = create(devtools(persist(taskStore, { name: "tasks" })));
export default useTaskStore;
