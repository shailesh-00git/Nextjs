import { useState } from "react";
import useTaskStore from "../store/taskStore";

function AddTask() {
  const addTask = useTaskStore((state) => state.addTask);

  const [title, setTitle] = useState("");
  const [detail, setDetail] = useState("");
  //function to handle  submit data
  const handleSubmit = (e) => {
    e.preventDefault();

    if (!title.trim()) return;

    addTask({ title, detail });

    setTitle("");
    setDetail("");
  };
  return (
    <div className="border p-2 rounded border-gray-300 col-span-1">
      <h2 className="text-lg mb-2  p-2 text-center font-bold">Add Task</h2>
      <form className="space-y-4" onSubmit={handleSubmit}>
        <div className=" px-4">
          <input
            className="border w-full rounded border-gray-100 py-2 px-3"
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="Title"
          />
        </div>
        <div className=" px-4">
          <textarea
            className="border w-full rounded border-gray-100 py-2 px-3"
            type="text"
            rows={4}
            value={detail}
            onChange={(e) => setDetail(e.target.value)}
            placeholder="Details of task ..."
          />
        </div>
        <div className="px-4 grid place-content-center mt-6 mb-3">
          <input
            type="submit"
            value="Add Task"
            className="bg-green-700 text-white w-50 py-2 rounded "
          />
        </div>
      </form>
    </div>
  );
}

export default AddTask;
