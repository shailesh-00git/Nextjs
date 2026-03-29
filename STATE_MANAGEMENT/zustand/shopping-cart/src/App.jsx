import "./App.css";
import Header from "./components/Header";
import ItemList from "./components/ItemList";
import Main from "./components/Main";
function App() {
  return (
    <div>
      <Header />
      <Main>
        <ItemList />
      </Main>
    </div>
  );
}
export default App;
