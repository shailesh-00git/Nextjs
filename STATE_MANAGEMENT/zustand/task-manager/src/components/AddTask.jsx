import { useState, useRef } from "react";
import useTaskStore from "../store/taskStore";

function AddTask() {
  const [title, setTitle] = useState("");
  const [detail, setDetail] = useState("");
  const formRef = useRef(null);
  const addTask = useTaskStore((state) => state.addTask);
  //function to handle  submit data
  function handleSubmit(e) {
    e.preventDefault();
    // 1. Check if values exist before sending
    if (!title.trim() || !detail.trim()) {
      alert("Please fill in both fields");
      return;
    }

    // 2. Send the object
    addTask({
      title: title,
      detail: detail,
    });

    // from reset
    formRef.current?.reset();
    setTitle("");
    setDetail("");
  }
  return (
    <div className="border p-2 rounded border-gray-300 col-span-1">
      <h2 className="text-lg mb-2  p-2 text-center font-bold">Add Task</h2>
      <form className="space-y-4" ref={formRef} onSubmit={handleSubmit}>
        <div className=" px-4">
          <input
            className="border w-full rounded border-gray-100 py-2 px-3"
            type="text"
            onChange={(e) => setTitle(e.target.value)}
            placeholder="Title"
          />
        </div>
        <div className=" px-4">
          <textarea
            className="border w-full rounded border-gray-100 py-2 px-3"
            type="text"
            rows={4}
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
