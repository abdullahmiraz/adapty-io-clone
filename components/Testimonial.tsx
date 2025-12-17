"use client";

import { Quote } from "lucide-react";
import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { animations } from "@/lib/animations";

interface TestimonialProps {
  quote: string;
  author: string;
  role: string;
  company: string;
  companyLogo?: string;
  index?: number;
}

export default function Testimonial({
  quote,
  author,
  role,
  company,
  index = 0,
}: TestimonialProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={animations.scrollTransition(
        index * animations.stagger.tiny
      )}
      whileHover={{ y: -5, scale: 1.02 }}
    >
      <Card className="border border-gray-200 bg-white p-8">
        <Quote className="mb-4 h-8 w-8 text-violet-600" />
        <p className="mb-6 text-lg font-semibold text-gray-700">{quote}</p>
        <div className="flex items-center gap-4">
          <div className="h-12 w-12 rounded-full bg-gradient-to-br from-violet-400 to-purple-500"></div>
          <div>
            <div className="font-black text-gray-900">{author}</div>
            <div className="text-sm font-bold text-gray-600">
              {role} at {company}
            </div>
          </div>
        </div>
      </Card>
    </motion.div>
  );
}
