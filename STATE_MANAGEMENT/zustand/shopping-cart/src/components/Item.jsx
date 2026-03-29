import React, { useState } from "react";

const Item = ({ item }) => {
  const [hovered, setHovered] = useState(false);
  const [selectedColor, setSelectedColor] = useState(item.colors[0].name);
  const [added, setAdded] = useState(false);

  const handleAdd = () => {
    setAdded(true);
    setTimeout(() => setAdded(false), 1500);
  };

  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        fontFamily: "'DM Sans', sans-serif",
        transition: "transform 0.3s ease, box-shadow 0.3s ease",
        transform: hovered ? "translateY(-6px)" : "translateY(0)",
        boxShadow: hovered
          ? "0 24px 48px rgba(0,0,0,0.2)"
          : "0 4px 16px rgba(0,0,0,0.1)",
      }}
      className="bg-white rounded-2xl overflow-hidden w-64"
    >
      {/* Image area */}
      <div className="relative overflow-hidden bg-stone-50 h-56 flex items-center justify-center">
        {/* Decorative circle */}
        <div
          style={{
            transition: "transform 0.4s ease",
            transform: hovered ? "scale(1.08)" : "scale(1)",
          }}
          className="w-32 h-32 rounded-full bg-stone-200 flex items-center justify-center"
        >
          <span style={{ fontSize: 48 }}>{item.emoji}</span>
        </div>

        {/* Badge */}
        <div className="absolute top-3 left-3 bg-black text-white text-xs font-semibold px-2 py-1 rounded-full tracking-widest uppercase">
          {item.badge}
        </div>

        {/* Wishlist */}
        <button className="absolute top-3 right-3 w-8 h-8 bg-white rounded-full flex items-center justify-center shadow text-rose-400 hover:scale-110 transition-transform">
          ♥
        </button>
      </div>

      {/* Content */}
      <div className="p-4">
        {/* Category */}
        <p className="text-xs tracking-widest uppercase text-stone-400 font-medium mb-1">
          {item.category}
        </p>

        {/* Title */}
        <h2
          style={{ fontFamily: "'DM Serif Display', serif" }}
          className="text-gray-900 text-xl leading-tight mb-1"
        >
          {item.name}
        </h2>

        {/* Description */}
        <p className="text-stone-400 text-xs leading-relaxed mb-3">
          {item.description}
        </p>

        {/* Color selector */}
        <div className="flex items-center gap-2 mb-4">
          <span className="text-xs text-stone-400 mr-1">Color</span>
          {item.colors.map((c) => (
            <button
              key={c.name}
              onClick={() => setSelectedColor(c.name)}
              className={`w-5 h-5 rounded-full ${c.bg} transition-all ${
                selectedColor === c.name
                  ? `ring-2 ring-offset-2 ${c.ring} scale-110`
                  : "opacity-60 hover:opacity-100"
              }`}
            />
          ))}
        </div>

        {/* Price + CTA */}
        <div className="flex items-center justify-between">
          <div>
            <p className="text-xs text-stone-400 line-through">
              ${item.originalPrice.toFixed(2)}
            </p>
            <p className="text-gray-900 text-lg font-bold">
              ${item.price.toFixed(2)}
            </p>
          </div>

          <button
            onClick={handleAdd}
            style={{ transition: "all 0.2s ease" }}
            className={`text-xs font-semibold px-4 py-2 rounded-xl tracking-wide uppercase ${
              added
                ? "bg-emerald-500 text-white"
                : "bg-gray-900 text-white hover:bg-gray-700"
            }`}
          >
            {added ? "✓ Added" : "Add to cart"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Item;
