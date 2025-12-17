"use client";

import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import { ReactNode } from "react";
import { Card } from "@/components/ui/card";
import { animations } from "@/lib/animations";

interface FeatureCardProps {
  icon: ReactNode;
  title: string;
  description: string;
  features: string[];
  color?: "pink" | "blue" | "green";
  index?: number;
}

export default function FeatureCard({
  icon,
  title,
  description,
  features,
  color = "pink",
  index = 0,
}: FeatureCardProps) {
  const colorClasses = {
    pink: "bg-pink-50 border-pink-200 text-pink-600",
    blue: "bg-blue-50 border-blue-200 text-blue-600",
    green: "bg-green-50 border-green-200 text-green-600",
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={animations.scrollTransition(
        index * animations.stagger.small
      )}
      whileHover={{ y: -10, scale: 1.02 }}
    >
      <Card className="group relative overflow-hidden border border-gray-200 bg-white p-8 transition-all hover:shadow-xl">
        <motion.div
          whileHover={{ rotate: 5, scale: 1.1 }}
          transition={animations.transition(animations.duration.fast)}
          className={`mb-6 inline-flex h-12 w-12 items-center justify-center rounded-xl border ${colorClasses[color]}`}
        >
          {icon}
        </motion.div>
        <h3 className="mb-2 text-2xl font-black text-gray-900">{title}</h3>
        <p className="mb-6 font-medium text-gray-600">{description}</p>
        <ul className="mb-6 space-y-3">
          {features.map((feature, featureIndex) => (
            <motion.li
              key={featureIndex}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={animations.scrollTransition(
                index * animations.stagger.small +
                  featureIndex * animations.stagger.tiny
              )}
              className="flex items-start gap-2 text-sm font-semibold text-gray-700"
            >
              <ArrowRight className="mt-1 h-4 w-4 flex-shrink-0 text-violet-600" />
              <span>{feature}</span>
            </motion.li>
          ))}
        </ul>
      </Card>
    </motion.div>
  );
}
