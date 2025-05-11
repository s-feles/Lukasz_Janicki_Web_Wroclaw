import { CartProduct } from "../../../context/CartContext"

interface CheckoutItemProps {
  product: CartProduct;
}

function calculateItemTotal(product: CartProduct) {
  return (product.price.main + 0.01 * product.price.fractional) * product.quantity;
}

export default function CheckoutItem({ product }: CheckoutItemProps) {
  return (
    <div key={product.id} className="flex justify-between border-b pb-3 mb-3">
      <div className="flex-1">
      <p className="font-medium">{product.name}</p>
      <div className="flex text-sm text-gray-200">
        <span>
          {(product.price.main + 0.01 * product.price.fractional).toFixed(2) +
            " zł × " +
            product.quantity}
        </span>
      </div>
      </div>
      <div className="text-right">
        <p className="font-medium">{calculateItemTotal(product).toFixed(2)} zł</p>
      </div>
    </div>
  );
}
