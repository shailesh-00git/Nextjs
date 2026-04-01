import useTaskStore from "../store/taskStore";

const Task = ({ task }) => {
  const deleteTask = useTaskStore((state) => state.deleteTask);
  const processTask = useTaskStore((state) => state.processTask);
  const completeTask = useTaskStore((state) => state.completeTask);
  return (
    <div className="border border-gray-300 p-3 rounded grid grid-cols-3">
      <div className="col-span-2 flex flex-col justify-between">
        <div>
          <h3 className="font-bold">{task.title}</h3>
          <p className="text-sm text-gray-600">{task.detail || "No details"}</p>
        </div>
        <div>
          <p className="font-mono mt-2 bg-green-100 rounded py-1  pl-2">
            Status:{" "}
            {task.status === "Created" && (
              <span className="text-green-500">{task.status}</span>
            )}
            {task.status === "Processing" && (
              <span className="text-blue-500">{task.status}...</span>
            )}
            {task.status === "Completed" && (
              <span className="text-red-500">{task.status}</span>
            )}
          </p>
        </div>
      </div>

      <div className="col-span-1 flex flex-col justify-center items-end gap-2">
        {task.status === "Created" && (
          <button
            onClick={() => processTask(task.id)}
            className="bg-green-500 text-white px-2 py-1 rounded text-xm"
          >
            Process
          </button>
        )}

        {task.status === "Processing" && (
          <button
            onClick={() => completeTask(task.id)}
            className="bg-green-500 text-white px-2 py-1 rounded text-xm"
          >
            Complete
          </button>
        )}

        <button
          onClick={() => deleteTask(task.id)}
          className="bg-red-500 text-white px-2 py-1 rounded text-xm"
        >
          Delete
        </button>
      </div>
    </div>
  );
};

export default Task;
