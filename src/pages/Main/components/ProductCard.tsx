import { useCart } from "../../../context/CartContext";

export interface Product {
  id: number;
  name: string;
  price: {
    main: number;
    fractional: number;
  };
}

const ProductCard: React.FC<{ product: Product }> = ({ product }) => {
  const { addItem } = useCart();

  return (
    <div className="h-full flex flex-col bg-gray-800 rounded-lg overflow-hidden shadow-lg transition-transform duration-300 hover:transform hover:scale-105">
      <div className="relative">
        <img
          src={"/public/Cavendish.png"}
          alt={product.name}
          className="w-full h-40 object-cover"
        />
        <div className="absolute top-2 right-2 bg-purple-600 text-white text-xs font-bold px-2 py-1 rounded-full">
          Bestseller
        </div>
      </div>
      <div className="p-3 flex flex-col flex-grow">
        <h3 className="line-clamp-1 text-base font-semibold text-white mb-1">
          {product.name}
        </h3>
        <p className="text-gray-400 font-bold mb-2">
          {product.price.main + "." + product.price.fractional + " zł"}
        </p>
        <div className="mt-auto flex flex-row space-x-2">
          <a
            href={`/product/${product.id}`}
            className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white py-1.5 px-3 rounded text-center text-xs font-medium w-full"
          >
            View Details
          </a>
          <button
            className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white py-1.5 px-3 rounded text-center text-xs font-medium w-full"
            onClick={() => addItem(product)}
          >
            Add To Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
