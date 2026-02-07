import { NextResponse } from "next/server";

const products = [
  {
    id: 1,
    name: "Running Shoes",
    brand: "Nike",
    price: 1200,
    inStock: true,
  },
  {
    id: 2,
    name: "Sneakers",
    brand: "Adidas",
    price: 1500,
    inStock: false,
  },
  {
    id: 3,
    name: "Formal Shoes",
    brand: "Clarks",
    price: 2200,
    inStock: true,
  },
  {
    id: 4,
    name: "Casual Shoes",
    brand: "Puma",
    price: 1100,
    inStock: true,
  },
  {
    id: 5,
    name: "Training Shoes",
    brand: "Reebok",
    price: 1800,
    inStock: false,
  },
];
export async function GET() {
  try {
    return NextResponse.json(
      {
        success: true,
        data: products,
        total: products.length,
      },
      { status: 200 },
    );
  } catch (error) {
    return NextResponse.json(
      { success: false, error: "failed to get products" },
      { status: 500 },
    );
  }
}
