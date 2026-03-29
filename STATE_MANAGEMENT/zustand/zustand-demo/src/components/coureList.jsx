import useCourseStore from "../store/courseStore";
import { useShallow } from "zustand/react/shallow";

const CourseList = () => {
  const { courses, removeCourse, toggleCourse } = useCourseStore(
    useShallow((state) => ({
      courses: state.courses,
      removeCourse: state.removeCourse,
      toggleCourse: state.toggleCourse,
    })),
  );

  // course remove function
  function handleCourseRemove(id) {
    removeCourse(id);
  }

  //toggle function
  function handleCourseToggle(id) {
    toggleCourse(id);
  }
  if (courses.length === 0) {
    return (
      <div className="border flex-1 grid place-content-center py-20">
        <h1 className="text-3xl">No Courses</h1>
      </div>
    );
  }
  return (
    <div className="border rounded-md p-5 flex-1 grid md:grid-cols-3 grid-cols-1 gap-5">
      {courses.map((course) => (
        <div
          key={course.id}
          className={`border py-3 px-5 mb-2 rounded-md grid grid-cols-1 gap-2 bg-gray-100 hover:bg-gray-200 transition-all duration-150  ${course.completed && "opacity-30"}`}
        >
          <h2 className="text-2xl px-3">{course.title}</h2>
          <div className="grid grid-cols-2 place-items-center">
            <button
              onClick={(e) => handleCourseRemove(course.id)}
              className=" px-3 rounded-md bg-red-200 py-1 hover:bg-red-300 transition-all duration-150"
            >
              Remove
            </button>
            <button
              onClick={(e) => handleCourseToggle(course.id)}
              disabled={course.completed}
              className={`px-3 rounded-md bg-blue-200 py-1 hover:bg-blue-300 transition-all duration-150 disabled:cursor-not-allowed`}
            >
              {course.completed ? "completed" : "complete"}
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CourseList;
