"use client";

import { motion } from "framer-motion";

export default function Awards() {
  const awards = [
    "Best Results, winter 2025",
    "High Performer, winter 2025",
    "Best Usability, winter 2025",
    "Best Relationship, winter 2025",
    "Most Implementable, winter 2025",
  ];

  return (
    <section className="bg-white py-12 sm:py-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mx-auto max-w-4xl"
        >
          <p className="mb-8 text-center text-sm font-black text-gray-600">
            Trusted for usability and customer service
          </p>
          <p className="mb-8 text-center text-xs font-bold text-gray-500">
            Based on 500+ reviews
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            {awards.map((award, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.05, y: -5 }}
                className="rounded-lg border border-gray-200 bg-gray-50 px-4 py-2 text-xs font-black text-gray-700"
              >
                G2 Award: {award}
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
