import React from "react";
import { Heart, Award, Users, Clock, Quote } from "lucide-react";
import { Link } from "react-router-dom";

export default function About() {
  return (
    <div className="relative min-h-screen bg-rose-300">
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-10 z-0"
        style={{
          backgroundImage: `url(${"/general/TTSW.png"})`,
        }}
      ></div>
      <div className="relative z-10 container mx-auto px-4 py-8">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="font-serif text-4xl md:text-5xl font-bold text-orange-900 mb-6 animate-in slide-in-from-top duration-1000">
            Authentic Tamil Nadu Snacks & Sweets
          </h1>
          <p className="uppercase text-xl text-orange-700 mb-6">
            Crafted with Tradition, Served with Love!
          </p>
          <div className="max-w-4xl mx-auto">
            <p className="italic text-lg text-gray-600 leading-relaxed animate-in slide-in-from-bottom duration-1000 delay-300">
              Welcome to Dream Spot - your one-stop destination for authentic
              Tamil Nadu snacks and sweets. Rooted in tradition and crafted with
              love, we bring the timeless flavors of our heritage straight to
              your plate.
            </p>
          </div>

          <Link
            to="/menu"
            className="inline-block mt-8 px-6 py-3 rounded-full bg-orange-700 text-white font-semibold hover:bg-orange-800 transition duration-300 shadow-lg animate-in slide-in-from-bottom delay-500"
          >
            Explore Our Menu
          </Link>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center mb-16">
          <div className="space-y-6 animate-in slide-in-from-left duration-1000">
            <p className="font-serif text-gray-700 leading-relaxed">
              From crispy murukkus to melt-in-mouth adhirasams, every bite is a
              celebration of our culture, made using age-old recipes and the
              finest ingredients. Whether you're craving something spicy, sweet,
              or both - we serve it fresh, just like how grandma made it!
            </p>
            <p className="font-serif text-gray-700 leading-relaxed">
              Step in and experience the soul of Tamil Nadu, one snack at a
              time.
            </p>

            {/* Tamil Quote Section */}
            <div className="bg-gradient-to-r from-orange-100 to-yellow-100 p-6 rounded-lg backdrop-blur-sm bg-opacity-90">
              <h3 className="text-xl uppercase font-bold text-orange-800 mb-4">
                In Tamil tradition, food is art
              </h3>
              <div className="space-y-3 text-gray-700">
                <p>
                  <strong>"சமையலறை ஒரு கலையறை."</strong> We believe{" "}
                  <strong>"உணவே மருந்து"</strong> (food is medicine), and every
                  sweet or snack we serve reflects that purity.
                </p>
                <p>
                  Like they say,{" "}
                  <strong>"அம்மா சமையலுக்கு சுவை தான் அடையாளம்"</strong> – true
                  flavor speaks of home.
                </p>
                <p>
                  With every bite, we celebrate{" "}
                  <strong>"விருந்தோம்பல் தமிழரின் பண்பாடு"</strong> – the soul
                  of Tamil hospitality.
                </p>
              </div>
            </div>
          </div>

          <div className="relative animate-in slide-in-from-right duration-1000 delay-300">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <img
                src={`${import.meta.env.BASE_URL}general/SW.jpg`}
                alt="Traditional Tamil sweets"
                className="rounded-lg shadow-lg transform hover:scale-105 transition-transform duration-300"
              />
              <img
                src={`${import.meta.env.BASE_URL}general/Family.png`}
                alt="Family enjoying meal"
                className="rounded-lg shadow-lg transform hover:scale-105 transition-transform duration-300 sm:mt-8"
              />
            </div>
          </div>
        </div>

        {/* Values Section */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">
            Our Values
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: Heart,
                title: "Made with Love",
                description:
                  "Every product is crafted with care and passion, following traditional family recipes.",
              },
              {
                icon: Award,
                title: "Premium Quality",
                description:
                  "We use only the finest ingredients to ensure authentic taste and superior quality.",
              },
              {
                icon: Users,
                title: "Family Tradition",
                description:
                  "Our recipes have been passed down through generations, preserving authentic flavors.",
              },
              {
                icon: Clock,
                title: "Fresh Daily",
                description:
                  "All our snacks and sweets are prepared fresh daily to maintain quality and taste.",
              },
            ].map((value, index) => (
              <div
                key={value.title}
                className="text-center group animate-in slide-in-from-bottom duration-1000"
                style={{ animationDelay: `${index * 200}ms` }}
              >
                <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-orange-200 transition-colors duration-300 backdrop-blur-sm bg-opacity-90">
                  <value.icon className="w-8 h-8 text-orange-600" />
                </div>
                <h3 className="text-xl font-bold mb-2">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Testimonials Section */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">
            What Our Customers Say
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                name: "Priya S.",
                comment:
                  "Absolutely love their adhirasam and mixture! Brings back childhood memories every time.",
              },
              {
                name: "Arun K.",
                comment:
                  "The flavors are so authentic. Perfect blend of tradition and taste!",
              },
              {
                name: "Divya R.",
                comment:
                  "Prompt delivery, fresh snacks, and amazing packaging. Highly recommended!",
              },
            ].map((review, index) => (
              <div
                key={review.name}
                className="p-6 bg-white rounded-lg shadow-md text-gray-700 animate-in slide-in-from-bottom duration-1000"
                style={{ animationDelay: `${index * 200}ms` }}
              >
                <Quote className="w-6 h-6 text-orange-600 mb-2" />
                <p className="italic mb-4">"{review.comment}"</p>
                <p className="font-bold text-orange-800">— {review.name}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Story Section */}
        <div className="relative z-10 max-w-3xl mx-auto text-center backdrop-blur-sm bg-rose-200 bg-opacity-80 rounded-xl p-6">
          <h2 className="text-3xl font-bold text-gray-800 mb-6">Our Story</h2>
          <p className="text-lg text-gray-700 leading-relaxed mb-6">
            Dream Spot was born from a simple dream - to share the authentic
            flavors of Tamil Nadu with the world. What started as a small family
            kitchen has grown into a beloved destination for traditional snacks
            and sweets.
          </p>
          <p className="text-lg text-gray-700 leading-relaxed">
            Today, we continue to honor our heritage while embracing modern
            convenience, bringing you the same authentic taste that has been
            cherished for generations, now just a click away.
          </p>
        </div>
      </div>
    </div>
  );
}
