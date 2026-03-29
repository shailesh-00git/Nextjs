const Header = () => {
  return (
    <div className="text-center p-4 bg-gray-100 flex justify-between px-20">
      <h2 className="text-3xl ">Shopping Cart</h2>
      <div className="text-2xl">
        <ul className="flex gap-10">
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="/">cart</a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
