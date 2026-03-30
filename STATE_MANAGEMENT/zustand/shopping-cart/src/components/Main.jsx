import useItemStore from "../store/ItemStore";

// ✅ Main.jsx - must have children prop
const Main = ({ children }) => {
  const items = useItemStore((state) => state.items);

  return (
    <main className="max-w-7xl mx-auto mt-10  flex justify-center gap-x-5 items-start">
      {children}
    </main>
  );
};

export default Main;
