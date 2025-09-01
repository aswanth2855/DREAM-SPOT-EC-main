
import { ArrowLeft, Package, Clock, CheckCircle } from "lucide-react";
import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext";

export default function Orders() {
  const { orders } = useCart();

  const renderStars = (rating) => {
    return Array.from({ length: 5 }, (_, i) => (
      <span
        key={i}
        className={`text-lg ${
          i < Math.floor(rating) ? "text-yellow-400" : "text-gray-300"
        }`}
      >
        ★
      </span>
    ));
  };

  if (orders.length === 0) {
    return (
      <div className="container mx-auto px-4 py-16 text-center">
        <div className="max-w-md mx-auto">
          <div className="w-32 h-32 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-6">
            <Package className="w-16 h-16 text-gray-400" />
          </div>
          <h2 className="text-2xl font-bold text-gray-800 mb-4">
            No orders yet
          </h2>
          <p className="text-gray-600 mb-8">
            Your order history will appear here once you place your first order.
          </p>
          <Link
            to="/menu"
            className="inline-flex items-center bg-orange-600 text-white px-6 py-3 rounded-lg hover:bg-orange-700 transition-colors duration-300"
          >
            <ArrowLeft className="w-5 h-5 mr-2" />
            Start Shopping
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex items-center mb-8">
        <Link
          to="/"
          className="mr-4 p-2 hover:bg-gray-100 rounded-full transition-colors"
        >
          <ArrowLeft className="w-6 h-6" />
        </Link>
        <h1 className="text-3xl font-bold text-gray-800">My Orders</h1>
      </div>

      <div className="space-y-6">
        {orders.map((order, orderIndex) => (
          <div
            key={orderIndex}
            className="bg-white rounded-lg shadow-lg p-6 animate-in slide-in-from-bottom duration-300"
            style={{ animationDelay: `${orderIndex * 100}ms` }}
          >
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center">
                  <CheckCircle className="w-6 h-6 text-green-600" />
                </div>
                <div>
                  <h3 className="font-bold text-lg">Order #{orderIndex + 1}</h3>
                  <p className="text-sm text-gray-500">
                    Placed on {new Date().toLocaleDateString()}
                  </p>
                </div>
              </div>
              <div className="text-right">
                <p className="text-sm text-gray-500">Status</p>
                <p className="font-medium text-green-600">Confirmed</p>
              </div>
            </div>

            <div className="space-y-4">
              {order.items.map((item) => (
                <div
                  key={item.id}
                  className="flex flex-col md:flex-row gap-4 p-4 bg-gray-50 rounded-lg"
                >
                  <img
                    src={`${import.meta.env.BASE_URL}${item.image || 'placeholder.svg'}`}
                    alt={item.name}
                    className="w-full md:w-24 h-24 object-cover rounded-lg"
                  />
                  <div className="flex-1">
                    <h4 className="font-bold text-lg mb-1">{item.name}</h4>
                    <p className="text-gray-600 text-sm mb-2">
                      {item.description}
                    </p>
                    <div className="flex items-center mb-2">
                      <span className="text-sm text-gray-500 mr-2">
                        Ratings
                      </span>
                      <div className="flex items-center">
                        {renderStars(item.rating)}
                      </div>
                    </div>
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-xl font-bold text-orange-600">
                          Rs.{item.price}
                        </p>
                        <p className="text-sm text-gray-500">
                          Quantity: {item.quantity}
                        </p>
                      </div>
                      <div className="text-sm text-green-600 space-y-1">
                        <p>✓ Free Delivery</p>
                        <p>✓ Cash On Delivery Available</p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-4 pt-4 border-t flex justify-between items-center">
              <div className="flex items-center space-x-2 text-sm text-gray-600">
                <Clock className="w-4 h-4" />
                <span>Estimated delivery: 2-3 business days</span>
              </div>
              <div className="text-right">
                <p className="text-sm text-gray-500">Total Amount</p>
                <p className="text-xl font-bold text-orange-600">
                  Rs.{order.total}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
