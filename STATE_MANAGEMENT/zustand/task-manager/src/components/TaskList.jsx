import useTaskStore from "../store/taskStore";
import Task from "./Task";

const TaskList = () => {
  const tasks = useTaskStore((state) => state.tasks);

  if (tasks.length === 0) {
    return <p className="text-center text-2xl p-34">No tasks yet 🚀</p>;
  }

  return (
    <div className="grid grid-cols-2 gap-3 p-4">
      {tasks.map((task) => (
        <Task key={task.id} task={task} />
      ))}
    </div>
  );
};

export default TaskList;
