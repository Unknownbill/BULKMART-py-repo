// src/app/cart/page.tsx
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Page } from '@/types';
import Link from 'next/link';
import { Trash2, Shield } from 'lucide-react';

export default function CartPage() {
  const cartItems = [
    {
      id: 1,
      name: "Premium Rice (50kg bags)",
      location: "Lagos",
      type: "Group Purchase",
      regularPrice: "₦35,000",
      groupPrice: "₦28,000",
      quantity: 2,
      total: "₦56,000"
    },
    {
      id: 2,
      name: "NPK Fertilizer (25kg)",
      location: "Kano",
      type: "Group Purchase",
      regularPrice: "₦18,000",
      groupPrice: "₦15,000",
      quantity: 1,
      total: "₦15,000"
    }
  ];

  const subtotal = 71000;
  const savings = 17000;
  const deliveryFee = 3000;
  const total = 74000;

  return (
    <>
      <Header currentUser={null} onNavigate={function (page: Page): void {
        throw new Error('Function not implemented.');
      } } onLogout={function (): void {
        throw new Error('Function not implemented.');
      } } />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">Shopping Cart</h1>
        <p className="text-gray-600 mb-8">Review your items and proceed to checkout</p>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Cart Items */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-lg shadow-sm border p-6">
              <h2 className="text-xl font-semibold mb-6">Cart Items ({cartItems.length})</h2>
              
              {cartItems.map((item) => (
                <div key={item.id} className="border-b pb-6 mb-6 last:border-b-0 last:mb-0">
                  <div className="flex justify-between items-start">
                    <div className="flex-1">
                      <h3 className="font-semibold text-lg">{item.name}</h3>
                      <p className="text-gray-600 text-sm mb-2">{item.location} • {item.type}</p>
                      <div className="flex items-center space-x-4">
                        <span className="text-gray-500 line-through">{item.regularPrice}</span>
                        <span className="text-lg font-bold text-primary">{item.groupPrice}</span>
                      </div>
                    </div>
                    <button className="text-red-500 hover:text-red-700">
                      <Trash2 className="h-5 w-5" />
                    </button>
                  </div>
                </div>
              ))}

              <button className="text-red-500 font-medium hover:text-red-700">
                Clear Cart
              </button>
            </div>

            {/* Delivery Information */}
            <div className="bg-white rounded-lg shadow-sm border p-6 mt-6">
              <h2 className="text-xl font-semibold mb-6">Delivery Information</h2>
              
              <div className="space-y-6">
                <div>
                  <label className="block text-sm font-medium mb-2">Delivery Address</label>
                  <input
                    type="text"
                    placeholder="Enter your full delivery address"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-4">Delivery Method</label>
                  <div className="space-y-3">
                    <label className="flex items-center justify-between p-4 border border-gray-300 rounded-lg cursor-pointer hover:border-primary">
                      <div className="flex items-center space-x-3">
                        <input type="radio" name="delivery" className="text-primary" defaultChecked />
                        <div>
                          <span className="font-medium">Standard Delivery</span>
                          <p className="text-sm text-gray-600">5–7 business days</p>
                        </div>
                      </div>
                      <span className="font-semibold">₦3,000</span>
                    </label>
                    
                    <label className="flex items-center justify-between p-4 border border-gray-300 rounded-lg cursor-pointer hover:border-primary">
                      <div className="flex items-center space-x-3">
                        <input type="radio" name="delivery" className="text-primary" />
                        <div>
                          <span className="font-medium">Express Delivery</span>
                          <p className="text-sm text-gray-600">2–3 business days</p>
                        </div>
                      </div>
                      <span className="font-semibold">₦5,000</span>
                    </label>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">Delivery Notes (Optional)</label>
                  <textarea
                    placeholder="Add any special instructions for delivery"
                    rows={3}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Order Summary */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-lg shadow-sm border p-6 sticky top-8">
              <h2 className="text-xl font-semibold mb-6">Order Summary</h2>
              
              <div className="space-y-3 mb-6">
                <div className="flex justify-between">
                  <span>Subtotal</span>
                  <span>₦{subtotal.toLocaleString()}</span>
                </div>
                <div className="flex justify-between text-green-600">
                  <span>Group Purchase Savings</span>
                  <span>-₦{savings.toLocaleString()}</span>
                </div>
                <div className="flex justify-between">
                  <span>Delivery Fee</span>
                  <span>₦{deliveryFee.toLocaleString()}</span>
                </div>
                <div className="border-t pt-3 flex justify-between font-semibold text-lg">
                  <span>Total</span>
                  <span>₦{total.toLocaleString()}</span>
                </div>
              </div>

              {/* Promo Code */}
              <div className="mb-6">
                <label className="block text-sm font-medium mb-2">Promo Code</label>
                <div className="flex space-x-2">
                  <input
                    type="text"
                    placeholder="Enter code"
                    className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                  />
                  <button className="bg-gray-200 text-gray-700 px-4 py-2 rounded-lg font-medium hover:bg-gray-300 transition-colors">
                    Apply
                  </button>
                </div>
              </div>

              {/* Checkout Button */}
              <button className="w-full bg-primary text-white py-3 px-4 rounded-lg font-semibold hover:bg-primary-700 transition-colors mb-4">
                Proceed to Checkout
              </button>

              <Link 
                href="/products"
                className="w-full border border-primary text-primary py-3 px-4 rounded-lg font-semibold hover:bg-primary hover:text-white transition-colors text-center block"
              >
                Continue Shopping
              </Link>

              {/* Security Note */}
              <div className="mt-6 p-4 bg-green-50 rounded-lg">
                <div className="flex items-center space-x-2 text-green-700">
                  <Shield className="h-5 w-5" />
                  <span className="text-sm font-medium">Secure Checkout</span>
                </div>
                <p className="text-sm text-green-600 mt-1">Your payment information is protected</p>
              </div>

              {/* Quality Guarantee */}
              <div className="mt-4 p-4 bg-blue-50 rounded-lg">
                <p className="text-sm text-blue-700">Quality Guaranteed - All products verified by suppliers</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}