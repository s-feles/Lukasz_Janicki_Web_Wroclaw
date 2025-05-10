// Common navbar component
export default function Navbar() {
  return (
    <nav className="bg-gray-800 py-4 px-6 mb-8">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 text-transparent bg-clip-text">
          InternShop
        </div>
        <div className="space-x-6">
          <a href="#" className="text-white hover:text-purple-400">
            Login
          </a>
        </div>
      </div>
    </nav>
  );
}
