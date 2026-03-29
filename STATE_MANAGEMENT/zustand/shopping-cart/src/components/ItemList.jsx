import Item from "./Item";
import { items } from "../store/data";

const ItemList = () => {
  return (
    <div className="p-2 grid grid-cols-4 gap-y-5">
      {items.map((item) => (
        <Item key={item.id} item={item} />
      ))}
    </div>
  );
};

export default ItemList;
