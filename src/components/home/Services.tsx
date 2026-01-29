'use client';

import { motion } from 'framer-motion';
import { services } from '@/data/mockData';
import Link from 'next/link';
import { Stethoscope, Syringe, Activity, Smile, Heart, Sparkles } from 'lucide-react';

const iconMap: Record<string, any> = {
  Stethoscope,
  Syringe,
  Activity,
  Smile,
  Heart,
  Sparkles
};

export default function Services() {
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
            Our Services
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Comprehensive dental care delivered to your home with hospital-grade equipment and certified professionals
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-gradient-to-br from-teal-50 to-blue-50 rounded-2xl p-6 hover:shadow-xl transition-all duration-300 border border-teal-100"
            >
              <div className="bg-teal-100 w-16 h-16 rounded-xl flex items-center justify-center mb-4">
                {(() => {
                  const Icon = iconMap[service.icon];
                  return <Icon className="w-8 h-8 text-teal-600" />;
                })()}
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                {service.title}
              </h3>
              <p className="text-gray-600 mb-4 text-sm">
                {service.description}
              </p>
              <div className="flex items-center justify-between">
                <span className="text-2xl font-bold text-teal-600">
                  {service.price}
                </span>
                <Link
                  href="/book-appointment"
                  className="bg-teal-600 text-white px-4 py-2 rounded-full text-sm hover:bg-teal-700 transition"
                >
                  Book Now
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
