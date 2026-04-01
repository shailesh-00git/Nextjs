import "./App.css";
import Main from "./components/Main";
import Header from "./components/Header";
import ProcessSection from "./components/ProcessSection";
import AddTask from "./components/AddTask";
import TaskList from "./components/TaskList";
function App() {
  return (
    <>
      <Header />
      <Main>
        <div className="grid grid-cols-3 gap-4 items-start">
          <AddTask />
          <ProcessSection>
            <TaskList />
          </ProcessSection>
        </div>

      </Main>
    </>
  );
}

export default App;
