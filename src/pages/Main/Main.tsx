import ProductCard from "./components/ProductCard";
import HeroSection from "./components/HeroSection";
import { Product } from "../../context/CartContext";

// products.json
const products: Product[] = [
  {
    id: 1,
    name: "Banany BIO",
    price: {
      main: 3,
      fractional: 49,
    },
  },
  {
    id: 2,
    name: "Mleko 3.2%",
    price: {
      main: 2,
      fractional: 89,
    },
  },
  {
    id: 3,
    name: "Chleb Żytni",
    price: {
      main: 4,
      fractional: 15,
    },
  },
  {
    id: 4,
    name: "Jaja 6 sztuk",
    price: {
      main: 6,
      fractional: 99,
    },
  },
  {
    id: 5,
    name: "Łosoś wędzony",
    price: {
      main: 5,
      fractional: 20,
    },
  },
];

// Additional image paths. They're kept in the public folder, thus not requiring /public/ in front of them.
const imgs = [ '', 'banany.png', 'mleko.png', 'chleb.png', 'jajka.png', 'losos.png' ];

// Component rendering the main page.
function MainPage() {
  return (
    <>
      <title>InternShop</title>
      <main className="container mx-auto px-6 pb-12">
        <HeroSection />
        <div className="mb-12">
          <div className="flex justify-between items-center mb-5">
            <h2 className="text-2xl font-bold">
              <span className="bg-gradient-to-r from-blue-400 via-purple-500 to-pink-400 text-transparent bg-clip-text">
                Lista produktów
              </span>
            </h2>
            <a
              href="/cart"
              className="text-purple-400 hover:text-purple-300 flex items-center text-sm"
            >
              Zobacz swój koszyk
            </a>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
            {products.map((product) => (
              <ProductCard key={product.id} product={product} img={imgs[product.id]} />
            ))}
          </div>
        </div>
      </main>
    </>
  );
}

export default MainPage;
