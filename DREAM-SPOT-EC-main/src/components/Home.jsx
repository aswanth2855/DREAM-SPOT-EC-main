import React from "react";
import { Link } from "react-router-dom";
import { ArrowRight, Star, Heart, Award } from "lucide-react";
import { featured_products } from "../datas/Products"; 

export default function Home() {
  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-rose-900 via-rose-600 to-rose-300 text-white py-20">
        <div className="absolute inset-0 bg-black opacity-20"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6 animate-in slide-in-from-left duration-1000">
              <h1 className="font-serif text-5xl md:text-6xl font-bold leading-tight">
                Relive The Taste of
                <br />
                <span className="font-serif text-yellow-300">Tamil Nadu</span>
              </h1>
              <p className="uppercase text-xl opacity-90">
                Handmade with heritage and heart,
                <br />
                Our snacks & sweets are a timeless art!
              </p>
              <div className="flex items-center space-x-4">
                <div className="bg-yellow-400 text-black px-6 py-3 rounded-full font-bold text-2xl animate-pulse">
                  50% OFF
                </div>
                <span className="text-lg">Limited Time Offer!</span>
              </div>
              <Link
                to="/menu"
                className="inline-flex items-center bg-orange-600 text-black px-8 py-4 rounded-full font-bold text-lg hover:bg-yellow-50 transition-all duration-300 transform hover:scale-105 shadow-lg"
              >
                Place Order
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
            </div>
            <div className="relative animate-in slide-in-from-right duration-1000 delay-300">
              <div className="grid grid-cols-2 gap-4">
                <img
                  src={`${import.meta.env.BASE_URL}general/FT.png`}
                  height={200}
                  width={200}
                  alt="Tamil Nadu Snacks"
                  className="rounded-lg shadow-lg transform hover:scale-105 transition-transform duration-300"
                />
                <img
                  src={`${import.meta.env.BASE_URL}general/HS.png`}
                  height={200}
                  width={200}
                  alt="Traditional Sweets"
                  className="rounded-lg shadow-lg transform hover:scale-105 transition-transform duration-300 mt-8"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-rose-300">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center text-orange-950 mb-12">
            Authentic Tamil Nadu Snacks & Sweets
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: <Heart className="w-10 h-10 text-orange-600" />,
                title: "Crafted with Love",
                desc: "Every snack and sweet is made with traditional recipes passed down through generations.",
              },
              {
                icon: <Award className="w-10 h-10 text-orange-600" />,
                title: "Premium Quality",
                desc: "We use only the finest ingredients to ensure authentic taste and superior quality.",
              },
              {
                icon: <Star className="w-10 h-10 text-orange-600" />,
                title: "Traditional Taste",
                desc: "Experience the authentic flavors of Tamil Nadu in every bite.",
              },
            ].map((feature, i) => (
              <div key={i} className="text-center group">
                <div className="bg-orange-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-orange-200 transition-colors duration-300">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
                <p className="text-gray-900">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-[#B33949]">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center text-white mb-12">
            Featured Products
          </h2>
          <div className="grid md:grid-cols-4 gap-6">
            {featured_products.map((product, index) => (
              <div
                key={product.name}
                className="bg-rose-200 rounded-lg shadow-lg overflow-hidden transform hover:scale-105 transition-all duration-300 animate-in slide-in-from-bottom"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="relative flex justify-center items-center p-4 ">
                  <img
                    src={`${import.meta.env.BASE_URL}${product.image}`}
                    alt={product.name}
                    className="w-[200px] h-[200px] object-cover rounded-xl shadow-md"
                  />
                </div>

                <div className="p-4">
                  <h3 className="font-bold text-lg mb-2">{product.name}</h3>
                  <p className="text-orange-600 font-bold text-xl">
                    Rs.{product.price}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-rose-400 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-4">
            Ready to Experience Authentic Tamil Nadu Flavors?
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Order now and get your favorite snacks and sweets delivered fresh to
            your doorstep!
          </p>
          <Link
            to="/menu"
            className="inline-flex items-center bg-orange-600 text-black px-8 py-4 rounded-full font-bold text-lg hover:bg-yellow-50 transition-all duration-300 transform hover:scale-105 shadow-lg"
          >
            Browse Menu
            <ArrowRight className="ml-2 w-5 h-5" />
          </Link>
        </div>
      </section>
    </div>
  );
}
