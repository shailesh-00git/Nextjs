import "./App.css";
import CourseList from "./components/coureList";
import CourseForm from "./components/courseForm";

function App() {
  return (
    <div className="flex justify-center mt-10 items-start gap-5 max-w-6xl mx-auto">
      <CourseForm />
      <CourseList />
    </div>
  );
}

export default App;
