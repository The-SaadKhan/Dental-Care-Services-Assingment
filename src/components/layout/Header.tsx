'use client';

import Link from 'next/link';
import { useState } from 'react';
import { motion } from 'framer-motion';
import { Menu, X, Home as HomeIcon, Calendar, LogIn } from 'lucide-react';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white shadow-md">
      <nav className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <div className="bg-teal-600 text-white w-10 h-10 rounded-lg flex items-center justify-center font-bold text-xl">
              B
            </div>
            <span className="text-xl font-bold text-teal-600">
              BlueTeeth
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link href="/" className="text-gray-700 hover:text-teal-600 transition">
              Home
            </Link>
            <Link href="/book-appointment" className="text-gray-700 hover:text-teal-600 transition">
              Book Appointment
            </Link>
            <Link href="/login" className="text-gray-700 hover:text-teal-600 transition">
              Login
            </Link>
            <Link
              href="/book-appointment"
              className="bg-teal-600 text-white px-6 py-2 rounded-full hover:bg-teal-700 transition"
            >
              Book Now
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-gray-700"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="md:hidden mt-4 pb-4 space-y-4"
          >
            <Link
              href="/"
              className="block text-gray-700 hover:text-teal-600 transition"
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </Link>
            <Link
              href="/book-appointment"
              className="block text-gray-700 hover:text-teal-600 transition"
              onClick={() => setIsMenuOpen(false)}
            >
              Book Appointment
            </Link>
            <Link
              href="/login"
              className="block text-gray-700 hover:text-teal-600 transition"
              onClick={() => setIsMenuOpen(false)}
            >
              Login
            </Link>
            <Link
              href="/book-appointment"
              className="block bg-teal-600 text-white px-6 py-2 rounded-full hover:bg-teal-700 transition text-center"
              onClick={() => setIsMenuOpen(false)}
            >
              Book Now
            </Link>
          </motion.div>
        )}
      </nav>
    </header>
  );
}
