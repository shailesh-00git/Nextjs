import useItemStore from "../store/ItemStore";
const Cart = () => {
  const items = useItemStore((state) => state.items);
  const removeItem = useItemStore((state) => state.removeItem);

  const totalPrice = items.reduce((acc, i) => acc + i.price * i.quantity, 0);

  // remove item
  function removeFromCart(itemId) {
    removeItem(itemId);
  }
  return (
    <div>
      {items.length !== 0 && (
        <div className="max-w-lg mx-auto p-6 border border-gray-400 rounded ">
          <h2 className="text-2xl font-bold mb-4">Your Cart</h2>
          {items.map((item) => (
            <div
              key={item.id}
              className="flex items-center justify-between border-b py-3 gap-4"
            >
              <span className="text-2xl">{item.emoji}</span>
              <div className="flex-1">
                <p className="font-semibold">{item.name}</p>
                <p className="text-sm text-stone-400">
                  ${item.price.toFixed(2)}
                </p>
              </div>
              <div className="flex items-center gap-2">
                <button className="w-7 h-7 rounded-full bg-gray-100 hover:bg-gray-200 font-bold">
                  −
                </button>
                <span className="w-4 text-center">{item.quantity}</span>
                <button className="w-7 h-7 rounded-full bg-gray-100 hover:bg-gray-200 font-bold">
                  +
                </button>
              </div>
              <button
                onClick={() => removeFromCart(item.id)}
                className="text-rose-400 hover:text-rose-600 text-sm"
              >
                ✕
              </button>
            </div>
          ))}
          <div className="flex justify-between items-center mt-6">
            <p className="text-xl font-bold">Total: ${totalPrice.toFixed(2)}</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;
