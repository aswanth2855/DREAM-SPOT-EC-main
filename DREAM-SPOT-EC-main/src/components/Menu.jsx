import { useState } from "react";
import { Star, Plus, ChevronLeft, ChevronRight } from "lucide-react";
import { useCart } from "../context/CartContext";
import { snacks, sweets } from "../datas/Products";
import { useNavigate } from "react-router-dom";

export default function Menu() {
  const [activeCategory, setActiveCategory] = useState("snacks");
  const [currentPage, setCurrentPage] = useState(0);
  const { addToCart } = useCart();
  const navigate = useNavigate(); 

  const currentProducts = activeCategory === "snacks" ? snacks : sweets;

  const productsPerPage = 8;
  const totalPages = Math.ceil(currentProducts.length / productsPerPage);
  const startIndex = currentPage * productsPerPage;
  const endIndex = startIndex + productsPerPage;
  const displayedProducts = currentProducts.slice(startIndex, endIndex);

  const handleAddToCart = (product) => {
    addToCart({ ...product, quantity: 1 });
  };

  const handleBuyNow = (product) => {
    addToCart({ ...product, quantity: 1 });
    navigate("/cart"); 
  };

  const nextPage = () => {
    if (currentPage < totalPages - 1) {
      setCurrentPage(currentPage + 1);
    }
  };

  const prevPage = () => {
    if (currentPage > 0) {
      setCurrentPage(currentPage - 1);
    }
  };

  const handleCategoryChange = (category) => {
    setActiveCategory(category);
    setCurrentPage(0); 
  };

  const renderStars = (rating) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Star
        key={i}
        className={`w-4 h-4 ${
          i < Math.floor(rating)
            ? "text-yellow-400 fill-current"
            : "text-gray-300"
        }`}
      />
    ));
  };

  return (
    <div className=" bg-[#B33949] mx-auto px-4 py-8">
      <div className="text-center mb-8">
        <h1 className="text-4xl font-bold text-gray-800 mb-4">
          Taste the Tradition: Explore Our Snacks & Sweets
        </h1>
        <p className="italic text-lg text-white uppercase">
          Discover authentic Tamil Nadu flavors
        </p>
      </div>

      {/* Category Tabs */}
      <div className="flex justify-center mb-8">
        <div className="bg-white rounded-full p-1 shadow-lg">
          <button
            onClick={() => handleCategoryChange("snacks")}
            className={`px-8 py-3 rounded-full font-medium transition-all duration-300 ${
              activeCategory === "snacks"
                ? "bg-orange-600 text-white shadow-lg"
                : "text-gray-600 hover:text-orange-600"
            }`}
          >
            Snacks
          </button>
          <button
            onClick={() => handleCategoryChange("sweets")}
            className={`px-8 py-3 rounded-full font-medium transition-all duration-300 ${
              activeCategory === "sweets"
                ? "bg-orange-600 text-white shadow-lg"
                : "text-gray-600 hover:text-orange-600"
            }`}
          >
            Sweets
          </button>
        </div>
      </div>

      {/* Products Grid with Navigation */}
      <div className="relative">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {displayedProducts.map((product, index) => (
            <div
              key={product.id}
              className="bg-white rounded-lg shadow-lg overflow-hidden transform hover:scale-105 transition-all duration-300 animate-in slide-in-from-bottom"
              style={{ animationDelay: `${index * 50}ms` }}
            >
              <div className="relative flex justify-center items-center p-2">
                <img
                  src={`${import.meta.env.BASE_URL}${product.image}`}
                  alt={product.name}
                  className="w-full h-[160px] object-cover rounded-xl shadow-md"
                />

                <button
                  onClick={() => handleAddToCart(product)}
                  className="absolute top-2 right-2 bg-white rounded-full p-1.5 shadow-lg hover:bg-orange-100 transition-colors duration-300"
                >
                  <Plus className="w-4 h-4 text-orange-600" />
                </button>
              </div>

              <div className="p-3">
                <h3 className="font-bold text-base mb-2">{product.name}</h3>
                <p className="text-gray-600 text-xs mb-2 line-clamp-2">
                  {product.description}
                </p>
                <div className="flex items-center mb-2">
                  <div className="flex items-center mr-2">
                    {renderStars(product.rating)}
                  </div>
                  <span className="text-xs text-gray-500">
                    ({product.rating})
                  </span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-orange-600 font-bold text-lg">
                    Rs.{product.price}
                  </span>
                  <button
                    onClick={() => handleBuyNow(product)}
                    className="bg-orange-600 text-white px-3 py-1.5 rounded-lg hover:bg-orange-700 transition-colors duration-300 font-medium text-sm"
                  >
                    Buy Now
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Navigation Arrows at Bottom */}
        {totalPages > 1 && (
          <div className="flex justify-center mt-6 space-x-4">
            <button
              onClick={prevPage}
              disabled={currentPage === 0}
              className={`p-2 rounded-full transition-all duration-300 ${
                currentPage === 0
                  ? "opacity-50 cursor-not-allowed bg-gray-200"
                  : "bg-white shadow-lg hover:bg-orange-50 hover:scale-105"
              }`}
            >
              <ChevronLeft className="w-5 h-5 text-orange-600" />
            </button>

            <button
              onClick={nextPage}
              disabled={currentPage === totalPages - 1}
              className={`p-2 rounded-full transition-all duration-300 ${
                currentPage === totalPages - 1
                  ? "opacity-50 cursor-not-allowed bg-gray-200"
                  : "bg-white shadow-lg hover:bg-orange-50 hover:scale-105"
              }`}
            >
              <ChevronRight className="w-5 h-5 text-orange-600" />
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
