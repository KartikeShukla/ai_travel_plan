import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Image from "next/image";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      {/* Hero Section */}
      <div className="relative bg-[#004D40] text-white py-16">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-[#004D40] opacity-90" />
        </div>
        
        {/* Floating Clouds */}
        <div className="absolute left-4 top-4">
          <div className="w-16 h-8 bg-white/20 rounded-full" />
        </div>
        <div className="absolute right-4 top-8">
          <div className="w-20 h-10 bg-white/20 rounded-full" />
        </div>

        <div className="relative container mx-auto text-center px-4">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Your Journey Starts Here
          </h1>
          
          {/* Search Bar */}
          <div className="max-w-2xl mx-auto flex gap-2">
            <Input
              type="text"
              placeholder="Places to go, things to do, hotels..."
              className="bg-white text-black"
            />
            <Button className="bg-[#9EE66B] hover:bg-[#8CD65B] text-black px-8">
              Start Planning
            </Button>
          </div>

          {/* Travel Categories */}
          <div className="flex justify-center gap-8 mt-8 text-sm">
            <div className="flex items-center gap-2">
              <span>🏨 Plan Travel</span>
            </div>
            <div className="flex items-center gap-2">
              <span>🗺️ Stays</span>
            </div>
            <div className="flex items-center gap-2">
              <span>🎯 Activities</span>
            </div>
            <div className="flex items-center gap-2">
              <span>🍽️ Food & Culture</span>
            </div>
          </div>
        </div>
      </div>

      {/* How It Works Section */}
      <section className="py-16 bg-[#F5F7FA]">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            How JourneyGenie Works
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="text-center">
              <div className="bg-[#9EE66B] w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🔍</span>
              </div>
              <h3 className="font-bold mb-2">Find the perfect plan</h3>
              <p className="text-gray-600">
                Let our AI help you find the travel itinerary for any destination!
              </p>
            </div>
            <div className="text-center">
              <div className="bg-[#9EE66B] w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">✨</span>
              </div>
              <h3 className="font-bold mb-2">Then customize it</h3>
              <p className="text-gray-600">
                Easily personalize it to your needs to create the perfect travel plan
              </p>
            </div>
            <div className="text-center">
              <div className="bg-[#9EE66B] w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">📱</span>
              </div>
              <h3 className="font-bold mb-2">Manage your journey</h3>
              <p className="text-gray-600">
                Get details of stays, travel and activities
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Plan Section */}
      <section className="py-16 bg-[#004D40] text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Plan. Personalise. Begin.</h2>
          <p className="mb-8">
            Plan your trip, personalize every detail, and begin your adventure with ease
          </p>
          <Link href="/plan">
            <Button className="bg-[#9EE66B] hover:bg-[#8CD65B] text-black px-8">
              Get Started
            </Button>
          </Link>
        </div>
      </section>

      {/* Explore Destinations */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-8">
            Explore destinations
          </h2>
          
          {/* Categories */}
          <div className="flex justify-center gap-4 mb-8">
            {["Popular", "Romantic", "Relaxing", "Adventurous", "Exotic", "Spiritual"].map((category) => (
              <button
                key={category}
                className="px-4 py-2 rounded-full hover:bg-gray-100"
              >
                {category}
              </button>
            ))}
          </div>

          {/* Destination Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {[1, 2, 3, 4].map((i) => (
              <div key={i} className="rounded-lg overflow-hidden shadow-lg">
                <div className="relative h-48">
                  <Image
                    src="/placeholder-destination.jpg"
                    alt="Destination"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-4">
                  <h3 className="font-bold">Destination Name</h3>
                  <p className="text-sm text-gray-600">Country</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 bg-[#F5F7FA]">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">
            Loved by travellers
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {[
              {
                text: "Planned our Thailand family trip with ease. Stress-free with this app! It suggested perfect accommodations and must-have items for family travel!",
                author: "John L."
              },
              {
                text: "I planned a perfect cultural trip to Bali with this app. It suggested amazing local experiences, like cooking classes and temple visits. So easy to use!",
                author: "Sara K."
              },
              {
                text: "This made my Miami trip a breeze! I organized activities and dining and now my go-to for travel planning. It's budget-friendly and saves time!",
                author: "Alex M."
              }
            ].map((testimonial, i) => (
              <div
                key={i}
                className="bg-[#9EE66B]/10 p-6 rounded-lg"
              >
                <p className="mb-4">{testimonial.text}</p>
                <p className="font-bold">- {testimonial.author}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#004D40] text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div>
              <h3 className="font-bold mb-4">Services</h3>
              <ul className="space-y-2">
                <li>Journey Creation</li>
                <li>Travel Bookings</li>
                <li>Guided Tours</li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold mb-4">Links</h3>
              <ul className="space-y-2">
                <li>Community</li>
                <li>My Itineraries</li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold mb-4">Social</h3>
              <ul className="space-y-2">
                <li>X (Twitter)</li>
                <li>Facebook</li>
                <li>Instagram</li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold mb-4">Contact</h3>
              <ul className="space-y-2">
                <li>Get Assistance</li>
                <li>Book a call</li>
                <li>hello@journeygenie.com</li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
