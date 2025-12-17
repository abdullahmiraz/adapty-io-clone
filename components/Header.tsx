"use client";

import { useState } from "react";
import { Menu, X, Globe, ArrowRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";
import { animations } from "@/lib/animations";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const languages = [
    "EN",
    "Türkçe",
    "Deutsch",
    "Українська",
    "Polski",
    "Français",
    "Русский",
    "Español",
    "日本語",
    "한국어",
    "中文",
    "Português",
  ];

  const navItems = [
    "Product",
    "Cases",
    "Resources",
    "Docs",
    "Blog",
    "Pricing",
    "web2app",
  ];

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={animations.transition(animations.duration.normal)}
      className="sticky top-0 z-50 w-full border-b border-gray-200 bg-white/80 backdrop-blur-sm"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Logo and Language Selector */}
          <div className="flex items-center gap-4">
            <motion.a
              href="/"
              whileHover={animations.hover}
              className="text-2xl font-black text-gray-900 lowercase"
            >
              Adapty
            </motion.a>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <button className="hidden sm:flex items-center gap-1 text-sm font-semibold text-gray-700 hover:text-violet-600 transition-colors focus:outline-none">
                  <Globe className="h-4 w-4" />
                  <span>EN</span>
                </button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="start" className="w-48">
                {languages.map((lang) => (
                  <DropdownMenuItem key={lang} className="cursor-pointer">
                    {lang}
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-6">
            {navItems.map((item, index) => (
              <motion.a
                key={item}
                href={`#${item.toLowerCase()}`}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={animations.transition(
                  animations.duration.normal,
                  index * animations.stagger.tiny
                )}
                className={cn(
                  "text-sm font-semibold transition-colors",
                  item === "web2app"
                    ? "text-orange-500 hover:text-orange-600"
                    : "text-gray-700 hover:text-violet-600"
                )}
              >
                {item}
              </motion.a>
            ))}
          </nav>

          {/* Right side actions */}
          <div className="flex items-center gap-3">
            {/* Auth Buttons */}
            <div className="hidden sm:flex items-center gap-3">
              <a
                href="#login"
                className="text-sm font-semibold text-gray-700 hover:text-violet-600 transition-colors"
              >
                Log in
              </a>
              <motion.a
                href="#signup"
                whileHover={animations.hover}
                whileTap={animations.tap}
                className="px-4 py-2 text-sm font-bold text-white bg-violet-600 rounded-lg hover:bg-violet-700 transition-colors border border-white"
              >
                Sign up <ArrowRight className="inline h-3 w-3 ml-1" />
              </motion.a>
              <motion.a
                href="#contact"
                whileHover={animations.hover}
                whileTap={animations.tap}
                className="px-4 py-2 text-sm font-bold text-violet-600 bg-white rounded-lg hover:bg-violet-50 transition-colors"
              >
                Contact sales <ArrowRight className="inline h-3 w-3 ml-1" />
              </motion.a>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden p-2 text-gray-700"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={animations.transition(animations.duration.normal)}
              className="md:hidden py-4 border-t border-gray-200"
            >
              <nav className="flex flex-col gap-4">
                {navItems.map((item) => (
                  <a
                    key={item}
                    href={`#${item.toLowerCase()}`}
                    className={cn(
                      "text-sm font-semibold transition-colors",
                      item === "web2app"
                        ? "text-orange-500"
                        : "text-gray-700 hover:text-violet-600"
                    )}
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item}
                  </a>
                ))}
                <div className="flex flex-col gap-2 pt-4 border-t border-gray-200">
                  <a
                    href="#login"
                    className="text-sm font-semibold text-gray-700 hover:text-violet-600 transition-colors"
                  >
                    Log in
                  </a>
                  <a
                    href="#signup"
                    className="px-4 py-2 text-sm font-bold text-white bg-violet-600 rounded-lg hover:bg-violet-700 transition-colors text-center"
                  >
                    Sign up
                  </a>
                  <a
                    href="#contact"
                    className="px-4 py-2 text-sm font-semibold text-gray-700 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors text-center"
                  >
                    Contact sales
                  </a>
                </div>
              </nav>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.header>
  );
}
