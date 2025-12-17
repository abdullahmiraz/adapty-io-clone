"use client";

import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import { animations } from "@/lib/animations";
import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-white min-h-screen flex items-center">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl relative z-10">
        <div className="grid lg:grid-cols-2 gap-6 lg:gap-12 items-center">
          {/* Left Column - Content */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={animations.transition(animations.duration.medium)}
            className="space-y-5 sm:space-y-6 lg:space-y-7"
          >
            {/* Top Badge/Link */}
            <div className="inline-flex items-center gap-2 bg-violet-100 text-violet-700 rounded-full px-3 py-2 text-xs sm:text-sm font-semibold hover:bg-violet-200 cursor-pointer transition">
              📘 Ebook
              <span className="text-violet-600">$100K playbook | download</span>
              <ArrowRight className="h-3 w-3 sm:h-4 sm:w-4" />
            </div>

            {/* Headline - Blue & Purple gradient */}
            <div className="space-y-3 sm:space-y-4">
              <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-black leading-tight">
                <span className="bg-gradient-to-r from-blue-600 via-blue-500 to-purple-600 bg-clip-text text-transparent block">
                  Revenue
                </span>
                <span className="bg-gradient-to-r from-blue-600 via-blue-500 to-purple-600 bg-clip-text text-transparent block">
                  management
                </span>
                <span className="bg-gradient-to-r from-blue-600 via-blue-500 to-purple-600 bg-clip-text text-transparent block">
                  for in-app
                </span>
                <span className="bg-gradient-to-r from-blue-600 via-blue-500 to-purple-600 bg-clip-text text-transparent block">
                  purchases
                </span>
              </h1>
              <p className="text-sm sm:text-base lg:text-lg text-gray-600 font-medium leading-relaxed max-w-lg">
                Save months on integrating subscriptions and double your app
                revenue with paywall management.
              </p>
            </div>

            {/* Email Input + CTA */}
            <div className="flex flex-col sm:flex-row gap-2 sm:gap-3">
              <input
                type="email"
                placeholder="Email address"
                className="flex-1 min-w-0 px-4 sm:px-5 py-3 rounded-lg border border-gray-300 text-sm text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-violet-600 focus:border-transparent"
              />
              <motion.button
                whileHover={animations.hover}
                whileTap={animations.tap}
                className="flex items-center justify-center gap-2 rounded-lg bg-violet-600 px-5 sm:px-7 py-3 text-sm font-bold text-white hover:bg-violet-700 transition-colors whitespace-nowrap flex-shrink-0"
              >
                Start for free <ArrowRight className="h-4 w-4" />
              </motion.button>
              <motion.button
                whileHover={animations.hover}
                whileTap={animations.tap}
                className="flex items-center justify-center gap-2 rounded-lg border-2 border-gray-300 px-5 sm:px-7 py-3 text-sm font-bold text-gray-900 hover:border-gray-400 hover:bg-gray-50 transition-colors whitespace-nowrap flex-shrink-0"
              >
                Book a demo <ArrowRight className="h-4 w-4" />
              </motion.button>
            </div>
          </motion.div>

          {/* Right Column - Mobile Mockup + Dashboard */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={animations.transition(
              animations.duration.medium,
              animations.stagger.small
            )}
            className="relative hidden lg:flex justify-center items-center w-full h-full"
          >
            {/* Phone Mockup */}
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 5, repeat: Infinity }}
              className="relative z-20 w-56 bg-black rounded-3xl border-8 border-gray-900 shadow-2xl overflow-hidden"
            >
              <div className="aspect-video bg-gradient-to-br from-purple-900 via-black to-black p-5 flex flex-col justify-between">
                <div>
                  <div className="bg-purple-600 rounded-full w-7 h-7 flex items-center justify-center text-white text-xs font-bold">
                    👤
                  </div>
                </div>
                <div className="space-y-2">
                  <div className="text-white">
                    <p className="text-xs font-semibold opacity-75">
                      FIRSTPOSE PRO
                    </p>
                    <p className="text-lg font-black">Breathe, Bend, Begin</p>
                    <p className="text-xs text-gray-400 mt-1 line-clamp-2">
                      The ultimate companion to awaken your body
                    </p>
                  </div>
                  <div className="flex gap-0.5">
                    <span>⭐</span>
                    <span>⭐</span>
                    <span>⭐</span>
                    <span>⭐</span>
                    <span>⭐</span>
                  </div>
                  <p className="text-xs text-gray-400 line-clamp-2">
                    Perfect for beginners! Sessions are easy to follow
                  </p>
                  <button className="w-full bg-purple-600 text-white rounded-lg py-2 font-bold text-xs mt-3">
                    Start with trial
                  </button>
                  <div className="flex gap-2 text-xs text-gray-500 pt-1 justify-center">
                    <span>●</span>
                    <span>○</span>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Dashboard Card */}
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 5, repeat: Infinity, delay: 0.3 }}
              className="absolute top-0 -right-12 z-10 w-80 bg-white rounded-2xl shadow-xl border border-gray-100 p-6"
            >
              <div className="space-y-4">
                <div>
                  <p className="text-xs font-semibold text-gray-600 mb-1">
                    Overview
                  </p>
                  <p className="text-xs text-gray-500">Revenue</p>
                  <p className="text-3xl font-black text-gray-900">$351.4K</p>
                </div>
                <div className="h-28 bg-gradient-to-r from-blue-200 via-purple-200 to-purple-400 rounded-lg"></div>
                <div className="grid grid-cols-2 gap-3 text-xs">
                  <div>
                    <p className="text-gray-600 mb-0.5">My yoga app</p>
                    <p className="font-bold text-gray-900">$245.5K</p>
                  </div>
                  <div>
                    <p className="text-gray-600 mb-0.5">My Habits app</p>
                    <p className="font-bold text-gray-900">$106.4K</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
