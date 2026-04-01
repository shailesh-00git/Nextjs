import { create } from "zustand";
import { devtools, persist } from "zustand/middleware";

const taskStore = (set) => ({
  tasks: [],

  addTask: (taskData) => {
    const { title, detail } = taskData;

    set((state) => ({
      tasks: [
        ...state.tasks,
        {
          id: crypto.randomUUID(),
          title,
          detail,
          createdAt: Date.now(),
          status: "Created",
        },
      ],
    }));
  },
  deleteTask: (taskId) => {
    set((state) => ({
      tasks: state.tasks.filter((t) => t.id !== taskId),
    }));
  },
  processTask: (taskId) => {
    set((state) => ({
      tasks: state.tasks.map((task) =>
        task.id === taskId ? { ...task, status: "Processing" } : task,
      ),
    }));
  },
  completeTask: (taskId) => {
    set((state) => ({
      tasks: state.tasks.map((task) =>
        task.id === taskId ? { ...task, status: "Completed" } : task,
      ),
    }));
  },
});

const useTaskStore = create(devtools(persist(taskStore, { name: "tasks" })));

export default useTaskStore;
