import Title from "./components/Title";
import CheckoutItem from "./components/CheckoutItem";
import ConfirmOrder from "./components/ConfirmOrder";
import { useCart, CartProduct } from "../../context/CartContext";
import { ButtonLeft } from "../../components/common/Buttons";

interface CheckoutProps {
  shippingCost?: number;
  taxRate?: number;
}

// Checkout page listing the order.
// Tax and shipping prices, here and in other places where they appear, are set to 0.
// I would implement appropriate calculating functions if there was such need.

export default function Checkout({ shippingCost, taxRate }: CheckoutProps) {
  const { state } = useCart();

  const getPrice: (product: CartProduct) => number = (product) => {
    return product.price.main + 0.01 * product.price.fractional;
  };

  const getSubtotal: (product: CartProduct) => number = (product) => {
    return getPrice(product) * product.quantity;
  };

  const getTotal = () => {
    return state.items.reduce((total, item) => total + getSubtotal(item), 0);
  }
  return (
    <div className="container mx-auto py-4 px-4 md:px-6 rounded-lg">
      <ButtonLeft text={"Powrót do koszyka"} link={"/cart"} />
      <Title />
      <div className="space-y-4 mb-3">
        {state.items.map((product) => (
          <CheckoutItem key={product.id} product={product} />
        ))}
      </div>
      <div className="space-y-3 mb-3">
        <div className="flex justify-between text-sm pt-1">
          <span className="text-gray-200">Koszt zakupów</span>
          <span className="font-medium">{getTotal().toFixed(2)} zł</span>
        </div>

        <div className="flex justify-between text-sm">
          <span className="text-gray-200">Koszt wysyłki</span>
          <span className="font-medium">
            {(shippingCost ? shippingCost : 0).toFixed(2)} zł
          </span>
        </div>

        <div className="flex justify-between text-sm pb-1">
          <span className="text-gray-200">
            Podatek ({(taxRate ? taxRate * 100 : 0).toFixed(0)}%)
          </span>
          <span className="font-medium">{(0).toFixed(2)} zł</span>
        </div>

        <div className="flex justify-between font-bold text-lg pt-2 border-t mt-2">
          <span>Razem</span>
          <span>{getTotal().toFixed(2)} zł</span>
        </div>
      </div>
      <ConfirmOrder />
    </div>
  );
}
