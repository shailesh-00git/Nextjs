const Task = () => {
  return (
    <div className=" bg-gray-100 px-4 py-3 rounded flex justify-between ">
      <div>
        {" "}
        <h1>Task Title</h1>
        <p>Task Description</p>
        <p>Created at 16 may 2020</p>
      </div>
      <div className="flex flex-col justify-center gap-3">
        <button className="bg-blue-100 rounded py-1 px-4 text-sm hover:bg-blue-200 transition-all duration-150">
          Add
        </button>
        <button className="bg-blue-100 rounded py-1 px-4 text-sm hover:bg-blue-200 transition-all duration-150">
          Add
        </button>
      </div>
    </div>
  );
};

export default Task;
