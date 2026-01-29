'use client';

import { motion } from 'framer-motion';
import { howItWorksSteps } from '@/data/mockData';
import { Calendar, MapPin, CheckCircle, ArrowRight } from 'lucide-react';

const iconMap: Record<string, any> = {
  Calendar,
  MapPin,
  CheckCircle
};

export default function HowItWorks() {
  return (
    <section className="py-20 bg-gradient-to-br from-blue-50 to-teal-50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            How It Works
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Getting dental care at home is simple and convenient
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {howItWorksSteps.map((step, index) => (
            <motion.div
              key={step.step}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="relative text-center"
            >
              {/* Step Number */}
              <div className="flex justify-center mb-6">
                <div className="w-20 h-20 bg-teal-600 text-white rounded-full flex items-center justify-center text-3xl font-bold shadow-lg">
                  {step.step}
                </div>
              </div>

              {/* Icon */}
              <div className="bg-teal-50 w-20 h-20 rounded-2xl flex items-center justify-center mb-4 mx-auto">
                {(() => {
                  const Icon = iconMap[step.icon];
                  return <Icon className="w-10 h-10 text-teal-600" />;
                })()}
              </div>

              {/* Content */}
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                {step.title}
              </h3>
              <p className="text-gray-600">
                {step.description}
              </p>

              {/* Arrow (except for last step) */}
              {index < howItWorksSteps.length - 1 && (
                <div className="hidden md:block absolute top-10 -right-10">
                  <ArrowRight className="w-8 h-8 text-teal-400" />
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
