import { Product } from "../Main/components/ProductCard";
import BackToProducts from "./components/BackToProducts";
import Title from "./components/Title";
import ProceedToCheckout from "./components/Proceed";
import CartContents from "./components/CartContents";

export interface CartProduct extends Product {
  quantity: number;
}

const initialCartItems: CartProduct[] = [
  {
    id: 1,
    name: "Banany BIO",
    price: {
      main: 3,
      fractional: 49,
    },
    quantity: 2,
  },
  {
    id: 2,
    name: "Mleko 3.2%",
    price: {
      main: 2,
      fractional: 89,
    },
    quantity: 2
  },
  {
    id: 3,
    name: "Chleb Żytni",
    price: {
      main: 4,
      fractional: 15,
    },
    quantity: 1
  },
  {
    id: 4,
    name: "Jaja 6 sztuk",
    price: {
      main: 6,
      fractional: 99,
    },
    quantity: 1
  },
  {
    id: 5,
    name: "Łosoś wędzony",
    price: {
      main: 5,
      fractional: 20,
    },
    quantity: 2
  }
];

export default function Cart() {
  return (
    <div className="container mx-auto py-4 px-4 md:px-6">
      <BackToProducts />
      <Title />
      <CartContents products={initialCartItems} />
      <ProceedToCheckout />
    </div>
  )
}