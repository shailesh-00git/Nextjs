import { create } from "zustand";

// persist used for local storage in the browser
import { devtools, persist } from "zustand/middleware";

//ctrate course store
// set is compulsory and used to set or change the satte of an variable
const courseStore = (set) => ({
  // initial state of the variable
  courses: [],

  // actions
  // to add the course
  addCourse: (course) => {
    set((state) => ({
      courses: [course, ...state.courses],
    }));
  },

  // to remove the course
  removeCourse: (courseId) => {
    set((state) => ({
      courses: state.courses.filter((c) => c.id !== courseId),
    }));
  },

  // toggle the status
  toggleCourse: (id) =>
    set((state) => ({
      courses: state.courses.map((c) =>
        c.id === id ? { ...c, completed: !c.completed } : c,
      ),
    })),
});

//creating hook of usestore
const useCourseStore = create(
  devtools(persist(courseStore, { name: "courses" })),
);

//exporting the courseStore hook
export default useCourseStore;
