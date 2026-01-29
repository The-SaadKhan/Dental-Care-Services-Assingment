'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { Phone, Calendar, Shield, Clock } from 'lucide-react';
import Image from 'next/image';

export default function Hero() {
  return (
    <section className="relative bg-gradient-to-br from-teal-50 via-blue-50 to-white py-20 md:py-32">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight mb-6">
              Professional Dental Care at{' '}
              <span className="text-teal-600">Your Home</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-600 mb-4">
              Certified Dentists • Safe & Hygienic • Affordable Pricing
            </p>
            <p className="text-gray-600 mb-8">
              Experience hassle-free dental treatments in the comfort of your home. Our certified dentists bring hospital-grade equipment to your doorstep.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/book-appointment"
                className="bg-teal-600 text-white px-8 py-4 rounded-full hover:bg-teal-700 transition-all text-center font-semibold shadow-lg hover:shadow-xl flex items-center justify-center gap-2"
              >
                <Calendar className="w-5 h-5" />
                Book Appointment
              </Link>
              <a
                href="tel:+917838689485"
                className="bg-white text-teal-600 border-2 border-teal-600 px-8 py-4 rounded-full hover:bg-teal-50 transition-all text-center font-semibold flex items-center justify-center gap-2"
              >
                <Phone className="w-5 h-5" />
                Call Now
              </a>
            </div>

            {/* Trust Indicators */}
            <div className="grid grid-cols-3 gap-6 mt-12">
              <div className="text-center">
                <div className="text-3xl font-bold text-teal-600">500+</div>
                <div className="text-sm text-gray-600">Happy Patients</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-teal-600">50+</div>
                <div className="text-sm text-gray-600">Expert Dentists</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-teal-600">4.8★</div>
                <div className="text-sm text-gray-600">Average Rating</div>
              </div>
            </div>
          </motion.div>

          {/* Right Image/Illustration */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative hidden md:block"
          >
            <div className="relative w-full h-[500px] rounded-3xl overflow-hidden shadow-2xl">
              <div className="absolute inset-0 bg-gradient-to-br from-teal-600/90 to-blue-600/90 z-10" />
              <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1606811841689-23dfddce3e95?w=800')] bg-cover bg-center" />
              
              <div className="relative z-20 h-full flex flex-col items-center justify-center text-white p-8">
                <h3 className="text-4xl font-bold mb-4">Professional Care</h3>
                <p className="text-xl mb-8">At Your Doorstep</p>
                
                <div className="grid grid-cols-2 gap-4 w-full max-w-sm">
                  <div className="bg-white/20 backdrop-blur-sm rounded-xl p-4 text-center">
                    <Shield className="w-8 h-8 mx-auto mb-2" />
                    <p className="text-sm font-semibold">Certified</p>
                  </div>
                  <div className="bg-white/20 backdrop-blur-sm rounded-xl p-4 text-center">
                    <Clock className="w-8 h-8 mx-auto mb-2" />
                    <p className="text-sm font-semibold">On-Time</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
