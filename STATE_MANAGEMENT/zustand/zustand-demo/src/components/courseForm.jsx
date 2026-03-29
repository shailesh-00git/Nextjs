import React, { useState } from "react";
import useCourseStore from "../store/courseStore";

const CourseForm = () => {
  const addCourse = useCourseStore((state) => state.addCourse);
  const [title, setTitle] = useState("");

  function handleCourseSubmit() {
    if (!title) {
      return alert("Please enter the course title...");
    }

    addCourse({
      id: Date.now(),
      title: title,
    });

    setTitle("");
  }

  return (
    <div className="max-w-xl p-5 border rounded-md ">
      <div>
        <h1 className="font-bold text-center text-2xl mb-5">Add Course</h1>
        <input
          type="text"
          placeholder="Course Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="w-full border mb-5 p-2 rounded-md"
        />
        <button
          className="btn py-2 w-full bg-green-700 text-white rounded-2xl"
          onClick={handleCourseSubmit}
        >
          Add Course
        </button>
      </div>
    </div>
  );
};

export default CourseForm;
