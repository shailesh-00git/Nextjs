import { create } from "zustand";
import { devtools, persist } from "zustand/middleware";

//creating item store
const itemStore = (set) => ({
  //initial array
  items: [],
  //actions
  // 1. add item
  addItem: (item) => {
    set((state) => {
      const existing = state.items.find((i) => i.id == item.id);
      if (existing) {
        return {
          items: state.items.map((i) =>
            i.id === item.id ? { ...i, quantity: i.quantity + 1 } : i,
          ),
        };
      } else {
        return {
          items: [...state.items, { ...item, quantity: 1 }],
        };
      }
    });
  },

  // 2. remove item (function)
  removeItem: (itemId) => {
    set((state) => ({ items: state.items.filter((i) => i.id !== itemId) }));
  },

  // increase quantity
  increaseQuantity: (itemId) => {
    set((state) => ({
      items: state.items.map((i) =>
        i.id === itemId ? { ...i, quantity: i.quantity + 1 } : i,
      ),
    }));
  },
  // decrease quantity
  decreaseQuantity: (itemId) => {
    set((state) => ({
      items: state.items
        .map((i) => (i.id === itemId ? { ...i, quantity: i.quantity - 1 } : i))
        .filter((i) => i.quantity > 0),
    }));
  },
});

// creating useItemStore hook
const useItemStore = create(devtools(persist(itemStore, { name: "items" })));

//exporting hook
export default useItemStore;
