import { ArrowRight } from "lucide-react";
import { useCart } from "../../../context/CartContext";

export default function ConfirmOrder() {
  const { state, clearCart } = useCart();
  
  function handleConfirm() {
    const orderData = {
      orderNumber: 1,
      orderDate: new Date().toISOString(),
      products: state.items,
      subtotal: state.total,
      shipping: 0,
      tax: 0,
      total: state.total,
    };
  
    localStorage.setItem("latestOrder", JSON.stringify(orderData));
    clearCart();
    window.location.href = "order-confirm.html";
  }

  return (
    <div className="flex justify-end mt-8">
      <button
        className="flex items-center text-blue-400 hover:text-blue-600 transition-colors"
        onClick={handleConfirm}
      >
        Confirm Order
        <ArrowRight className="ml-2 h-5 w-5" />
      </button>
    </div>
  );
}
