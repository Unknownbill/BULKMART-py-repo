// src/app/page.tsx
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Page } from '@/types';
import Link from 'next/link';

export default function HomePage() {
  const stats = [
    { number: '50K+', label: 'Active Users' },
    { number: '2M+', label: 'Products Sold' },
    { number: '500+', label: 'Market Groups' },
    { number: 'N5B+', label: 'Value Traded' },
  ];

  const features = [
    {
      title: 'Bulk Purchasing',
      description: 'Buy agricultural products in bulk at wholesale prices with guaranteed quality and delivery.',
      icon: '📦',
    },
    {
      title: 'Group Buying',
      description: 'Join market groups to pool resources and unlock better pricing through collective purchasing power.',
      icon: '👥',
    },
    {
      title: 'Cost Saving',
      description: 'Save up to 40% on agricultural supplies through our group buying and bulk discount programs.',
      icon: '💰',
    },
  ];

  const steps = [
    {
      number: '1',
      title: 'Browse Products',
      description: 'Explore our marketplace with thousands of agricultural products from various suppliers across Nigeria.',
    },
    {
      number: '2',
      title: 'Join a Group',
      description: 'Connect with other buyers in your region to form purchasing groups for bulk discounts.',
    },
    {
      number: '3',
      title: 'Save & Purchase',
      description: 'Complete your purchase at discounted prices with secure payment and reliable delivery to your location.',
    },
  ];

  const testimonials = [
    {
      quote: "BULKGRO has transformed how we purchase supplies. The group buying feature saved us 25% on fertilizer and seeds.",
      author: "Anita Nwabueze",
      role: "Farm Manager, Farm"
    },
    {
      quote: "The platform is easy to use and the marketplace connects us directly with quality suppliers. Highly recommended!",
      author: "Chinedu Diala",
      role: "Agricultural Entrepreneur, Lagos"
    },
    {
      quote: "BULKGRO has made bulk purchasing accessible and affordable. The transparency and reliability are excellent.",
      author: "Femi Yusuf",
      role: "Farm Owner, Kaduna"
    },
  ];

  return (
    <>
      <Header currentUser={null} onNavigate={function (page: Page): void {
        throw new Error('Function not implemented.');
      } } onLogout={function (): void {
        throw new Error('Function not implemented.');
      } } />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-50 to-green-100 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
            Nigeria&apos;s Leading Agricultural Marketplace
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Empowering farmers and agribusinesses with collaborative bulk purchasing. Join thousands of users saving up to 40% on agricultural supplies.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/signup" className="btn-primary text-lg px-8 py-4">
              Create Free Account
            </Link>
            <Link href="/products" className="btn-secondary text-lg px-8 py-4">
              Explore Marketplace
            </Link>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {stats.map((stat, index) => (
              <div key={index}>
                <div className="text-3xl md:text-4xl font-bold text-primary mb-2">{stat.number}</div>
                <div className="text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Why Choose BULKGRO?
            </h2>
            <p className="text-gray-600 text-lg">
              Discover the benefits of collaborative agricultural purchasing
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="text-center p-6">
                <div className="text-4xl mb-4">{feature.icon}</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  {feature.title}
                </h3>
                <p className="text-gray-600">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              How It Works
            </h2>
            <p className="text-gray-600 text-lg">
              Start saving on agricultural supplies in three simple steps
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {steps.map((step, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-primary text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-6">
                  {step.number}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  {step.title}
                </h3>
                <p className="text-gray-600">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              What Our Users Say
            </h2>
            <p className="text-gray-600 text-lg">
              Join thousands of satisfied farmers and agribusinesses across Nigeria
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="card">
                <p className="text-gray-700 mb-6 italic">&ldquo;{testimonial.quote}&rdquo;</p>
                <div>
                  <div className="font-semibold text-gray-900">{testimonial.author}</div>
                  <div className="text-sm text-gray-600">{testimonial.role}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-primary text-white">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-4">
            Ready To Transform Your Agricultural Business?
          </h2>
          <p className="text-xl text-primary-100 mb-8">
            Join BULKGRO today and start saving on bulk agricultural purchases
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/signup" className="btn-secondary bg-white text-primary hover:bg-gray-100 text-lg px-8 py-4">
              Create Free Account
            </Link>
            <Link href="/products" className="border border-white text-white hover:bg-white hover:text-primary px-8 py-4 rounded-lg font-semibold transition-colors text-lg">
              Explore Marketplace
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}