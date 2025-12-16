"use client";

import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import Image from "next/image";
import { Card } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

interface StoryCardProps {
  category: string;
  company: string;
  metric: string;
  title: string;
  index: number;
}

function StoryCard({ category, company, metric, title, index }: StoryCardProps) {
  const imageUrls = [
    "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop",
    "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop",
    "https://images.unsplash.com/photo-1551434678-e076c223a692?w=600&h=400&fit=crop",
    "https://images.unsplash.com/photo-1552664730-d307ca884978?w=600&h=400&fit=crop",
    "https://images.unsplash.com/photo-1551650975-87deedd944c3?w=600&h=400&fit=crop",
    "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?w=600&h=400&fit=crop",
    "https://images.unsplash.com/photo-1551434678-e076c223a692?w=600&h=400&fit=crop",
    "https://images.unsplash.com/photo-1552664730-d307ca884978?w=600&h=400&fit=crop",
    "https://images.unsplash.com/photo-1551650975-87deedd944c3?w=600&h=400&fit=crop",
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ y: -10, scale: 1.02 }}
      className="h-full"
    >
      <Card className="group relative h-full overflow-hidden border border-gray-200 bg-white transition-all hover:shadow-xl">
        <div className="aspect-video w-full overflow-hidden">
          <Image
            src={imageUrls[index % imageUrls.length]}
            alt={company}
            width={600}
            height={400}
            className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
          />
        </div>
        <div className="p-6">
          <div className="mb-2 text-xs font-black uppercase tracking-wider text-violet-600">
            {category}
          </div>
          <div className="mb-2 text-sm font-bold text-gray-500">{company}</div>
          <div className="mb-3 text-2xl font-black text-gray-900">{metric}</div>
          <h3 className="mb-4 text-lg font-black text-gray-900">{title}</h3>
          <motion.a
            href="#read-more"
            whileHover={{ x: 5 }}
            className="group/link inline-flex items-center gap-1 text-sm font-black text-violet-600 hover:text-violet-700"
          >
            Read more
            <ArrowRight className="h-4 w-4 transition-transform group-hover/link:translate-x-1" />
          </motion.a>
        </div>
      </Card>
    </motion.div>
  );
}

export default function CustomerStories() {
  const stories = [
    {
      category: "Productivity app",
      company: "Productivity App",
      metric: "+50% in total revenue",
      title: "How pricing tests unlocked app's potential",
    },
    {
      category: "Photo & Video",
      company: "Text on Pic",
      metric: "Over 30% MRR growth",
      title: "How to boost revenue with the right experiments",
    },
    {
      category: "Travel",
      company: "Secret app",
      metric: "+102% ARPU growth",
      title: "New onboarding and pricing strategy doubled revenue per user",
    },
    {
      category: "App publisher",
      company: "Going Merry",
      metric: "5x MRR growth",
      title: "How to scale subscription revenue with Paywall Builder",
    },
    {
      category: "Mental health",
      company: "Shmoody",
      metric: "ARR scaled from $0 to $2M",
      title: "How to grow from a free app to $2M ARR with Adapty",
    },
    {
      category: "Health & Fitness",
      company: "Lively",
      metric: "Refund rate dropped by 83%",
      title: "Saved 82% of potentially lost revenue",
    },
    {
      category: "Makeup & Beauty",
      company: "Glam AI",
      metric: "ROAS from Adapty – 108%",
      title: "How to scale to $1.2M ARR in 3 months",
    },
    {
      category: "Health & Fitness",
      company: "Pepapp",
      metric: "400% ROI on Adapty",
      title: "How to make Adapty free with Refund Saver",
    },
    {
      category: "Photo & Video",
      company: "Fotorama",
      metric: "Refund rate dropped 40%",
      title: "How to decrease the refund rate with Adapty",
    },
  ];

  return (
    <section className="bg-white py-20 sm:py-32">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mx-auto max-w-4xl text-center mb-12"
        >
          <h2 className="mb-4 text-3xl font-black text-gray-900 sm:text-4xl md:text-5xl">
            Read the real cases of our customers
          </h2>
        </motion.div>

        {/* Desktop Grid View */}
        <div className="hidden lg:grid grid-cols-3 gap-6">
          {stories.slice(0, 6).map((story, index) => (
            <StoryCard key={index} {...story} index={index} />
          ))}
        </div>

        {/* Mobile/Tablet Carousel */}
        <div className="lg:hidden">
          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
            className="w-full"
          >
            <CarouselContent className="-ml-2 md:-ml-4">
              {stories.map((story, index) => (
                <CarouselItem key={index} className="pl-2 md:pl-4 md:basis-1/2">
                  <StoryCard {...story} index={index} />
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="hidden md:flex -left-12" />
            <CarouselNext className="hidden md:flex -right-12" />
          </Carousel>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="mt-12 text-center"
        >
          <motion.a
            href="#all-cases"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center gap-2 rounded-xl border border-gray-300 bg-white px-6 py-3 text-sm font-black text-gray-700 transition-colors hover:bg-gray-50"
          >
            Read all cases
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}
