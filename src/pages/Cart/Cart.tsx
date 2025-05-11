import BackToProducts from "./components/BackToProducts";
import Title from "./components/Title";
import ProceedToCheckout from "./components/Proceed";
import CartContents from "./components/CartContents";
import { useCart } from "../../context/CartContext";

// Cart page as appears after clicking the cart icon or "See your cart" on the main page.
// The cart does not support adding new products (ones that weren't in it previously)
// for the same reason a lot of online shops do not do it either.

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