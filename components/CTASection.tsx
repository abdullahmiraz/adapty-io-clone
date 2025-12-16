"use client";

import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

export default function CTASection() {
  return (
    <section className="bg-gradient-to-b from-violet-600 to-purple-700 py-20 sm:py-32 text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mx-auto max-w-3xl text-center"
        >
          <h2 className="mb-6 text-3xl font-black sm:text-4xl md:text-5xl">
            Get started today or schedule a demo
            <br />
            for your personal onboarding
          </h2>
          <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
            <motion.a
              href="#signup"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="group flex items-center gap-2 rounded-lg bg-white px-8 py-4 text-base font-black text-violet-600 transition-all hover:bg-gray-100 hover:shadow-lg"
            >
              Start for free
              <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
            </motion.a>
            <motion.a
              href="#demo"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="group flex items-center gap-2 rounded-lg border-2 border-white px-8 py-4 text-base font-black text-white transition-all hover:bg-white/10"
            >
              Schedule a demo
              <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
