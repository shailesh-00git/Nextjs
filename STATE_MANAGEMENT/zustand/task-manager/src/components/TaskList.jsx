import React from "react";
import Task from "./Task";

const TaskList = () => {
  return (
    <div className="space-y-2">
      <h2 className="text-lg mb-2 p-2  text-center font-bold ">
        Process Section
      </h2>
      <div className="grid grid-cols-2 gap-4">
        <Task />
        <Task />
        <Task />
        <Task />
        <Task />
        <Task />
        <Task />
        <Task />
      </div>
    </div>
  );
};

export default TaskList;
