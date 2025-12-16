"use client";

import { ArrowRight, Star, Search } from "lucide-react";
import { motion } from "framer-motion";
import Image from "next/image";
import {
  LineChart,
  Line,
  BarChart,
  Bar,
  PieChart,
  Pie,
  Cell,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Legend,
} from "recharts";

export default function Hero() {
  // Chart data
  const revenueData = [
    { month: "1 Aug", yoga: 50, habits: 20 },
    { month: "1 Sep", yoga: 80, habits: 35 },
    { month: "1 Oct", yoga: 120, habits: 50 },
    { month: "1 Nov", yoga: 150, habits: 70 },
    { month: "1 Dec", yoga: 180, habits: 85 },
    { month: "1 Jan", yoga: 200, habits: 95 },
    { month: "1 Feb", yoga: 245, habits: 106.4 },
  ];

  const mrrData = [
    { month: "1 Aug", value: 60 },
    { month: "1 Sep", value: 75 },
    { month: "1 Oct", value: 113.7 },
  ];

  const arrData = [
    { month: "1 Aug", value: 720 },
    { month: "1 Sep", value: 900 },
    { month: "1 Oct", value: 1100 },
    { month: "1 Nov", value: 1200 },
    { month: "1 Dec", value: 1300 },
    { month: "1 Jan", value: 1364.646 },
    { month: "1 Feb", value: 1364.646 },
  ];

  const subscriptionData = [
    { name: "iOS", value: 69, count: 4.8 },
    { name: "Android", value: 31, count: 2.2 },
  ];

  const arppuData = [
    { month: "1 Aug", ios: 60, other: 40 },
    { month: "1 Sep", ios: 65, other: 35 },
    { month: "1 Oct", ios: 66, other: 34 },
  ];

  const arpasData = [
    { month: "1 Aug", value: 12 },
    { month: "1 Sep", value: 14 },
    { month: "1 Oct", value: 15 },
    { month: "1 Nov", value: 15.5 },
    { month: "1 Dec", value: 16 },
    { month: "1 Jan", value: 16.2 },
    { month: "1 Feb", value: 16.4 },
  ];

  const trialsData = [
    { month: "1 Aug", value: 200 },
    { month: "1 Sep", value: 450 },
    { month: "1 Oct", value: 789 },
  ];

  const COLORS = ["#8b5cf6", "#f97316"];

  return (
    <section className="relative overflow-hidden bg-white py-12 lg:py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-3 gap-8 lg:gap-4 items-start">
          {/* Left Column - Marketing Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-1 space-y-6"
          >
            {/* Ebook Banner */}
            <div className="flex items-center gap-2">
              <span className="rounded-full bg-violet-100 px-3 py-1 text-xs font-bold text-violet-700">
                Ebook
              </span>
              <a
                href="#ebook"
                className="text-xs font-semibold text-violet-600 hover:text-violet-700 flex items-center gap-1"
              >
                $100K playbook | download <ArrowRight className="h-3 w-3" />
              </a>
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl lg:text-5xl font-black text-violet-600 leading-tight">
              Revenue management for in-app purchases
            </h1>

            {/* Description */}
            <p className="text-base lg:text-lg font-medium text-gray-600">
              Save months on integrating subscriptions and double your app
              revenue with paywall management.
            </p>

            {/* Email Input and CTAs */}
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Email address
                </label>
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-violet-500 focus:border-transparent"
                />
              </div>
              <div className="flex flex-col sm:flex-row gap-3">
                <motion.a
                  href="#signup"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="flex items-center justify-center gap-2 rounded-lg bg-violet-600 px-6 py-3 text-sm font-bold text-white hover:bg-violet-700 transition-colors"
                >
                  Start for free <ArrowRight className="h-4 w-4" />
                </motion.a>
                <motion.a
                  href="#demo"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="flex items-center justify-center gap-2 rounded-lg border-2 border-blue-500 px-6 py-3 text-sm font-bold text-blue-600 hover:bg-blue-50 transition-colors"
                >
                  Book a demo <ArrowRight className="h-4 w-4" />
                </motion.a>
              </div>
            </div>
          </motion.div>

          {/* Center Column - App Screenshot */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-1 relative z-10 flex justify-center"
          >
            <div className="relative w-[280px] h-[600px] mx-auto">
              {/* Phone Frame */}
              <div className="absolute inset-0 bg-gray-900 rounded-[2.5rem] p-2 shadow-2xl">
                <div className="w-full h-full bg-white rounded-[2rem] overflow-hidden">
                  {/* App Content */}
                  <div className="h-full flex flex-col bg-gradient-to-b from-purple-50 to-white">
                    {/* Header */}
                    <div className="px-6 pt-12 pb-4">
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-2xl font-black text-gray-900">
                          FIRSTPOSE
                        </span>
                        <span className="rounded-full bg-violet-600 px-3 py-1 text-xs font-bold text-white">
                          PRO
                        </span>
                      </div>
                      <h2 className="text-3xl font-black text-gray-900 mb-4">
                        Breathe, Bend, Begin
                      </h2>
                      <p className="text-sm font-semibold text-gray-600 mb-6">
                        3-day free trial, 24,99 US$/year billed annually upon
                        trial period of the products.
                      </p>
                    </div>

                    {/* Review */}
                    <div className="px-6 mb-6">
                      <div className="flex items-center gap-1 mb-2">
                        {[...Array(5)].map((_, i) => (
                          <Star
                            key={i}
                            className="h-4 w-4 fill-yellow-400 text-yellow-400"
                          />
                        ))}
                      </div>
                      <p className="text-xs font-medium text-gray-700 leading-relaxed">
                        Perfect for beginners! The guided sessions are easy to
                        follow, and I love the progress tracking feature. It&apos;s
                        become part of my daily routine! - Emily R.
                      </p>
                    </div>

                    {/* CTA Button */}
                    <div className="px-6 mt-auto mb-8">
                      <button className="w-full rounded-xl bg-violet-600 px-6 py-4 text-base font-bold text-white hover:bg-violet-700 transition-colors">
                        Start with trial
                      </button>
                      <p className="text-xs font-medium text-gray-500 text-center mt-3">
                        No commitment, cancel anytime before your trial ends
                        without being charged.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Column - Dashboard */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="lg:col-span-1 space-y-4"
          >
            <div className="bg-white rounded-xl border border-gray-200 p-4 space-y-4 max-h-[600px] overflow-y-auto">
              <h3 className="text-lg font-black text-gray-900">Overview</h3>

              {/* Revenue Chart */}
              <div className="bg-gray-50 rounded-lg p-3">
                <div className="flex justify-between items-start mb-2">
                  <div>
                    <p className="text-xs font-semibold text-gray-600">Revenue</p>
                    <p className="text-xl font-black text-gray-900">$351,4K</p>
                  </div>
                </div>
                <ResponsiveContainer width="100%" height={120}>
                  <LineChart data={revenueData}>
                    <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
                    <XAxis
                      dataKey="month"
                      tick={{ fontSize: 10 }}
                      stroke="#9ca3af"
                    />
                    <YAxis tick={{ fontSize: 10 }} stroke="#9ca3af" />
                    <Tooltip />
                    <Line
                      type="monotone"
                      dataKey="yoga"
                      stroke="#8b5cf6"
                      strokeWidth={2}
                      dot={false}
                    />
                    <Line
                      type="monotone"
                      dataKey="habits"
                      stroke="#f97316"
                      strokeWidth={2}
                      dot={false}
                    />
                  </LineChart>
                </ResponsiveContainer>
                <div className="flex gap-4 mt-2 text-xs">
                  <div className="flex items-center gap-1">
                    <div className="w-2 h-2 rounded-full bg-violet-600"></div>
                    <span className="text-gray-600">My Yoga app $245K</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <div className="w-2 h-2 rounded-full bg-orange-500"></div>
                    <span className="text-gray-600">My Habits app $106.4K</span>
                  </div>
                </div>
              </div>

              {/* MRR Chart */}
              <div className="bg-gray-50 rounded-lg p-3">
                <div className="flex justify-between items-start mb-2">
                  <div>
                    <p className="text-xs font-semibold text-gray-600">MRR</p>
                    <p className="text-xl font-black text-gray-900">$113.7K</p>
                  </div>
                </div>
                <ResponsiveContainer width="100%" height={80}>
                  <LineChart data={mrrData}>
                    <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
                    <XAxis
                      dataKey="month"
                      tick={{ fontSize: 10 }}
                      stroke="#9ca3af"
                    />
                    <YAxis tick={{ fontSize: 10 }} stroke="#9ca3af" />
                    <Line
                      type="monotone"
                      dataKey="value"
                      stroke="#8b5cf6"
                      strokeWidth={2}
                      dot={false}
                    />
                  </LineChart>
                </ResponsiveContainer>
              </div>

              {/* ARR Chart */}
              <div className="bg-gray-50 rounded-lg p-3">
                <div className="flex justify-between items-start mb-2">
                  <div>
                    <p className="text-xs font-semibold text-gray-600">ARR</p>
                    <p className="text-xl font-black text-gray-900">
                      $1,364,646
                    </p>
                    <p className="text-xs font-semibold text-green-600">
                      $981,706 +39%
                    </p>
                  </div>
                  <div className="flex items-center gap-2">
                    <Search className="h-4 w-4 text-gray-400" />
                    <div className="flex gap-1">
                      {["Se", "U", "M", "U", "Tu", "C"].map((item, i) => (
                        <div
                          key={i}
                          className={`w-5 h-5 rounded border text-xs flex items-center justify-center font-semibold ${
                            i < 3
                              ? "bg-violet-600 text-white border-violet-600"
                              : "bg-white text-gray-600 border-gray-300"
                          }`}
                        >
                          {item}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
                <ResponsiveContainer width="100%" height={100}>
                  <BarChart data={arrData}>
                    <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
                    <XAxis
                      dataKey="month"
                      tick={{ fontSize: 10 }}
                      stroke="#9ca3af"
                    />
                    <YAxis tick={{ fontSize: 10 }} stroke="#9ca3af" />
                    <Bar dataKey="value" fill="#8b5cf6" radius={[4, 4, 0, 0]} />
                  </BarChart>
                </ResponsiveContainer>
              </div>

              {/* New Subscriptions */}
              <div className="bg-gray-50 rounded-lg p-3">
                <div className="flex justify-between items-start mb-2">
                  <div>
                    <p className="text-xs font-semibold text-gray-600">
                      New subscriptions
                    </p>
                    <p className="text-xl font-black text-gray-900">7K</p>
                    <div className="flex gap-3 mt-1 text-xs">
                      <span className="text-gray-600">iOS 4.8K</span>
                      <span className="text-gray-600">Android 2.2K</span>
                    </div>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <ResponsiveContainer width="100%" height={80}>
                    <PieChart>
                      <Pie
                        data={subscriptionData}
                        cx="50%"
                        cy="50%"
                        innerRadius={20}
                        outerRadius={35}
                        dataKey="value"
                      >
                        {subscriptionData.map((entry, index) => (
                          <Cell
                            key={`cell-${index}`}
                            fill={COLORS[index % COLORS.length]}
                          />
                        ))}
                      </Pie>
                    </PieChart>
                  </ResponsiveContainer>
                  <div className="space-y-1 text-xs">
                    <div className="flex items-center gap-2">
                      <div className="w-3 h-3 rounded-full bg-violet-600"></div>
                      <span className="text-gray-600">69%</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-3 h-3 rounded-full bg-violet-300"></div>
                      <span className="text-gray-600">31%</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* ARPPU */}
              <div className="bg-gray-50 rounded-lg p-3">
                <div className="flex justify-between items-start mb-2">
                  <div>
                    <p className="text-xs font-semibold text-gray-600">ARPPU</p>
                    <p className="text-xl font-black text-gray-900">$24.74</p>
                  </div>
                </div>
                <ResponsiveContainer width="100%" height={80}>
                  <BarChart data={arppuData}>
                    <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
                    <XAxis
                      dataKey="month"
                      tick={{ fontSize: 10 }}
                      stroke="#9ca3af"
                    />
                    <YAxis tick={{ fontSize: 10 }} stroke="#9ca3af" />
                    <Bar dataKey="ios" stackId="a" fill="#8b5cf6" />
                    <Bar dataKey="other" stackId="a" fill="#e5e7eb" />
                  </BarChart>
                </ResponsiveContainer>
                <div className="flex gap-4 mt-2 text-xs">
                  <span className="text-gray-600">iOS 66%</span>
                </div>
              </div>

              {/* ARPAS */}
              <div className="bg-gray-50 rounded-lg p-3">
                <div className="flex justify-between items-start mb-2">
                  <div>
                    <p className="text-xs font-semibold text-gray-600">ARPAS</p>
                    <p className="text-xl font-black text-gray-900">$16.4</p>
                  </div>
                </div>
                <ResponsiveContainer width="100%" height={80}>
                  <LineChart data={arpasData}>
                    <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
                    <XAxis
                      dataKey="month"
                      tick={{ fontSize: 10 }}
                      stroke="#9ca3af"
                    />
                    <YAxis tick={{ fontSize: 10 }} stroke="#9ca3af" />
                    <Line
                      type="monotone"
                      dataKey="value"
                      stroke="#8b5cf6"
                      strokeWidth={2}
                      dot={false}
                    />
                  </LineChart>
                </ResponsiveContainer>
              </div>

              {/* Active Trials */}
              <div className="bg-gray-50 rounded-lg p-3">
                <div className="flex justify-between items-start mb-2">
                  <div>
                    <p className="text-xs font-semibold text-gray-600">
                      Active trials
                    </p>
                    <p className="text-xl font-black text-gray-900">789</p>
                  </div>
                </div>
                <ResponsiveContainer width="100%" height={80}>
                  <LineChart data={trialsData}>
                    <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
                    <XAxis
                      dataKey="month"
                      tick={{ fontSize: 10 }}
                      stroke="#9ca3af"
                    />
                    <YAxis tick={{ fontSize: 10 }} stroke="#9ca3af" />
                    <Line
                      type="monotone"
                      dataKey="value"
                      stroke="#8b5cf6"
                      strokeWidth={2}
                      dot={false}
                    />
                  </LineChart>
                </ResponsiveContainer>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
