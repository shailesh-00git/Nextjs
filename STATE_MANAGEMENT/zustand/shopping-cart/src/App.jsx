import "./App.css";
import Cart from "./components/cart";
import Header from "./components/Header";
import ItemList from "./components/ItemList";
import Main from "./components/Main";
function App() {
  return (
    <div>
      <Header />
      <Main>
        <ItemList />
        <Cart />
      </Main>
    </div>
  );
}
export default App;
