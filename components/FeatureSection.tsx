"use client";

import { ArrowRight, Quote } from "lucide-react";
import { motion } from "framer-motion";
import Image from "next/image";
import { ReactNode } from "react";
import { animations } from "@/lib/animations";

interface FeatureSectionProps {
  title: string;
  description: string;
  ctaText: string;
  ctaLink: string;
  testimonial?: {
    quote: string;
    author: string;
    role: string;
    company: string;
  };
  imagePlaceholder?: string;
  reverse?: boolean;
  imageUrl?: string;
}

export default function FeatureSection({
  title,
  description,
  ctaText,
  ctaLink,
  testimonial,
  imagePlaceholder,
  reverse = false,
  imageUrl,
}: FeatureSectionProps) {
  const imageSrc =
    imageUrl ||
    `https://images.unsplash.com/photo-${
      // eslint-disable-next-line react-hooks/purity
      Math.random() > 0.5 ? "1551288049-bebda4e38f71" : "1460925895917"
    }-afdab827c52f?w=800&h=600&fit=crop`;

  return (
    <section className="bg-white py-20 sm:py-32">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div
          className={`flex flex-col gap-12 lg:flex-row lg:items-center ${
            reverse ? "lg:flex-row-reverse" : ""
          }`}
        >
          <motion.div
            initial={{ opacity: 0, x: reverse ? 50 : -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={animations.scrollTransition()}
            className="flex-1"
          >
            <h2 className="mb-4 text-3xl font-black text-gray-900 sm:text-4xl md:text-5xl">
              {title}
            </h2>
            <p className="mb-6 text-lg font-semibold text-gray-600">
              {description}
            </p>
            <motion.a
              href={ctaLink}
              whileHover={{ x: 5 }}
              transition={animations.transition(animations.duration.fast)}
              className="group inline-flex items-center gap-2 text-violet-600 hover:text-violet-700 font-black"
            >
              {ctaText}
              <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
            </motion.a>
            {testimonial && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={animations.scrollTransition(
                  animations.stagger.small
                )}
                className="mt-8 rounded-lg border border-gray-200 bg-gray-50 p-6"
              >
                <Quote className="mb-3 h-6 w-6 text-violet-600" />
                <p className="mb-4 font-medium text-gray-700">
                  {testimonial.quote}
                </p>
                <div className="flex items-center gap-3">
                  <div className="h-10 w-10 rounded-full bg-gradient-to-br from-violet-400 to-purple-500"></div>
                  <div>
                    <div className="font-black text-gray-900">
                      {testimonial.author}
                    </div>
                    <div className="text-sm font-semibold text-gray-600">
                      {testimonial.role} at {testimonial.company}
                    </div>
                  </div>
                </div>
              </motion.div>
            )}
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: reverse ? -50 : 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={animations.scrollTransition(animations.stagger.small)}
            className="flex-1"
          >
            <div className="rounded-xl border border-gray-200 bg-gradient-to-br from-violet-50 to-purple-50 p-4 shadow-lg overflow-hidden">
              <div className="aspect-video w-full rounded-xl overflow-hidden">
                <Image
                  src={imageSrc}
                  alt={imagePlaceholder || "Feature Preview"}
                  width={800}
                  height={600}
                  className="h-full w-full object-cover"
                />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
