import { useEffect } from "react";
import { useCart } from "./CartContext";

export default function PermaCart() {
  const { state, addItem, clearCart } = useCart();

  useEffect(() => {
    try {
      const savedCart = localStorage.getItem("cart");
      if (savedCart) {
        const cart = JSON.parse(savedCart);
        clearCart();
        cart.items.forEach((item: any) => {
          for (let i = 0; i < item.quantity; i++) {
            addItem(item);
          }
        });
      }
    } catch (err) {
      console.error("Failed to fetch cart from local storage: ", err);
    }
  }, []);

  useEffect(() => {
    try {
      localStorage.setItem('cart', JSON.stringify(state));
    } catch (err) {
      console.error('Failed to save cart to local storage: ', err);
    }
  }, [state]);

  return null;
}
