'use client';

import { motion } from 'framer-motion';
import { cities } from '@/data/mockData';
import { MapPin, Phone } from 'lucide-react';

export default function CitiesServed() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Service Coverage Areas
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            We provide professional home dental care services across Delhi NCR region with certified dentists and modern equipment
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 max-w-4xl mx-auto">
          {cities.map((city, index) => (
            <motion.div
              key={city}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-white border-2 border-teal-200 hover:border-teal-500 text-gray-800 px-6 py-4 rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 font-semibold flex items-center gap-3 group"
            >
              <div className="bg-teal-100 group-hover:bg-teal-500 p-2 rounded-lg transition-colors">
                <MapPin className="w-5 h-5 text-teal-600 group-hover:text-white transition-colors" />
              </div>
              <span className="text-base">{city}</span>
            </motion.div>
          ))}
        </div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="text-center mt-12"
        >
          <p className="text-gray-600 mb-4">
            Don't see your city? We're expanding soon!
          </p>
          <a
            href="tel:+917838689485"
            className="inline-flex items-center gap-2 bg-teal-600 text-white px-8 py-3 rounded-full hover:bg-teal-700 transition font-semibold"
          >
            <Phone className="w-5 h-5" />
            Call to Check Availability
          </a>
        </motion.div>
      </div>
    </section>
  );
}
