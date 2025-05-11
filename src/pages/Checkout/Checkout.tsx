import Title from "./components/Title";
import BackToCart from "./components/BackToCart";
import CheckoutItem from "./components/CheckoutItem";
import { CartProduct } from "../Cart/Cart";
import ConfirmOrder from "./components/ConfirmOrder";

interface CheckoutProps {
  products: CartProduct[];
  shippingCost?: number;
  taxRate?: number;
}

export default function Checkout({
  products,
  shippingCost,
  taxRate
}: CheckoutProps) {
  return (
    <div className="container mx-auto py-4 px-4 md:px-6 rounded-lg">
      <BackToCart />
      <Title />
      <div className="space-y-4 mb-3">
        {products.map((product) => <CheckoutItem key={product.id} product={product} />)}
      </div>
      <div className="space-y-3 mb-3">
        <div className="flex justify-between text-sm pt-1">
          <span className="text-gray-200">Subtotal</span>
          <span className="font-medium">${(3).toFixed(2)}</span>
        </div>
        
        <div className="flex justify-between text-sm">
          <span className="text-gray-200">Shipping</span>
          <span className="font-medium">${(shippingCost ? shippingCost : 0).toFixed(2)}</span>
        </div>
        
        <div className="flex justify-between text-sm pb-1">
          <span className="text-gray-200">Tax ({(taxRate ? (taxRate * 100) : 0).toFixed(0)}%)</span>
          <span className="font-medium">${(8).toFixed(2)}</span>
        </div>
        
        <div className="flex justify-between font-bold text-lg pt-2 border-t mt-2">
          <span>Total</span>
          <span>${(12).toFixed(2)}</span>
        </div>
      </div>
      <ConfirmOrder />
    </div>
  );
}