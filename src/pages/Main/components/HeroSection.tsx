// Colorful hero section appearing on the main (product list) page.

const HeroSection = () => {
  return (
    <div className="rounded-xl text-center mb-8 px-8 py-6 bg-gradient-to-r from-blue-900 via-purple-900 to-pink-900">
      <h1 className="text-3xl md:text-2xl sm:text-xl font-bold mb-3">
        Witaj w InternShop
      </h1>
      <p className="text-gray-300 text-lg mb-5 max-w-2xl mx-auto">
        Tak, to jest suchar na "internship".
      </p>
    </div>
  );
};

export default HeroSection;
