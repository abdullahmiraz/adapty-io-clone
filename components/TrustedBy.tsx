"use client";

import { motion } from "framer-motion";
import { animations } from "@/lib/animations";

export default function TrustedBy() {
  const companies = [
    "Feeld",
    "Bumble",
    "Weewoo",
    "AppNation",
    "Almus",
    "Impala Studios",
    "HUBX",
  ];

  return (
    <section className="bg-white py-12 sm:py-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={animations.scrollTransition()}
          className="mb-8 text-center text-sm font-bold text-gray-500"
        >
          Trusted by 15,000+ apps and the world&apos;s largest app publishers
        </motion.p>
        <div className="flex flex-wrap items-center justify-center gap-8 sm:gap-12">
          {companies.map((company, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={animations.scrollTransition(
                index * animations.stagger.tiny
              )}
              whileHover={animations.hover}
              className="flex h-12 items-center justify-center opacity-60 grayscale transition-opacity hover:opacity-100 hover:grayscale-0"
            >
              <span className="text-xl font-black text-gray-400">
                {company}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
