import { Product } from "../Main/components/ProductCard";
import BackToProducts from "./components/BackToProducts";
import Title from "./components/Title";
import ProceedToCheckout from "./components/Proceed";
import CartContents from "./components/CartContents";
import { useCart } from "../../context/CartContext";

export interface CartProduct extends Product {
  quantity: number;
}

export default function Cart() {
  const { state } = useCart();
  return (
    <div className="container mx-auto py-4 px-4 md:px-6">
      <BackToProducts />
      <Title />
      <CartContents />
      {state.items.length > 0 ? <ProceedToCheckout /> : <></>}
    </div>
  )
}