import { Route, Routes } from "react-router";
import Navbar from "./components/layout/Navbar"
import MainPage from "./pages/Main/Main"

function App() {
  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <Navbar />
      <Routes>
        <Route path="/" element={<MainPage />} />
      </Routes>
    </div>
  )
}

export default App
