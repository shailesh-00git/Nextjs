import Item from "./Item";
import { items } from "../store/data";
import useItemStore from "../store/ItemStore";

const ItemList = () => {
  const cartItems = useItemStore((state) => state.items);
  return (
    <div
      className={`grid ${cartItems.length != 0 ? "grid-cols-3" : "grid-cols-4"} gap-y-5 flex-1`}
    >
      {items.map((item) => (
        <Item key={item.id} item={item} />
      ))}
    </div>
  );
};

export default ItemList;
