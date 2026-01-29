'use client';

import { motion } from 'framer-motion';
import { whyChooseUsPoints } from '@/data/mockData';
import { UserCheck, Shield, DollarSign, Clock, Home, Headphones } from 'lucide-react';

const iconMap: Record<string, any> = {
  UserCheck,
  Shield,
  DollarSign,
  Clock,
  Home,
  Headphones
};

export default function WhyChooseUs() {
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
            Why Choose Us
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            We are committed to providing the best home dental care service in India
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {whyChooseUsPoints.map((point, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-white rounded-xl p-6 shadow-md hover:shadow-xl transition-all duration-300 border border-gray-100"
            >
              <div className="bg-teal-100 w-14 h-14 rounded-xl flex items-center justify-center mb-4">
                {(() => {
                  const Icon = iconMap[point.icon];
                  return <Icon className="w-7 h-7 text-teal-600" />;
                })()}
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                {point.title}
              </h3>
              <p className="text-gray-600 text-sm">
                {point.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
