import { Route, Routes } from "react-router";
import Navbar from "./components/layout/Navbar"
import MainPage from "./pages/Main/Main"
import Cart from "./pages/Cart/Cart";
import Checkout from "./pages/Checkout/Checkout";

const dummyOrder = [
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

function App() {
  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <Navbar />
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/checkout" element={<Checkout products={dummyOrder} />} />
      </Routes>
    </div>
  )
}

export default App
