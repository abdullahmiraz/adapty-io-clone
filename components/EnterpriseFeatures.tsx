"use client";

import { Shield, Zap, Headphones } from "lucide-react";
import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { animations } from "@/lib/animations";

export default function EnterpriseFeatures() {
  const features = [
    {
      icon: <Shield className="h-8 w-8" />,
      title: "Secure",
      items: [
        "SOC2 verified",
        "Encrypted",
        "24/7 global fraud monitoring",
      ],
    },
    {
      icon: <Zap className="h-8 w-8" />,
      title: "Reliable",
      items: [
        "99.99% SLA",
        "Over $500M/year of in-app purchases processed",
      ],
    },
    {
      icon: <Headphones className="h-8 w-8" />,
      title: "Responsive",
      items: [
        "Dedicated customer success manager",
        "Direct communication via Slack",
        "Live chat on the website",
        "Four ways to reach us",
      ],
    },
  ];

  return (
    <section className="bg-gray-50 py-20 sm:py-32">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={animations.scrollTransition()}
          className="mx-auto max-w-4xl text-center mb-12"
        >
          <h2 className="mb-4 text-3xl font-black text-gray-900 sm:text-4xl md:text-5xl">
            Enterprise-grade platform
          </h2>
        </motion.div>

        <div className="grid gap-8 md:grid-cols-3">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={animations.scrollTransition(
                index * animations.stagger.tiny
              )}
              whileHover={{ y: -10, scale: 1.02 }}
            >
              <Card className="border border-gray-200 bg-white p-8 text-center">
                <motion.div
                  whileHover={{ rotate: 5, scale: 1.1 }}
                  transition={animations.transition(animations.duration.fast)}
                  className="mb-6 flex justify-center text-violet-600"
                >
                  {feature.icon}
                </motion.div>
                <h3 className="mb-4 text-xl font-black text-gray-900">
                  {feature.title}
                </h3>
                <ul className="space-y-2">
                  {feature.items.map((item, itemIndex) => (
                    <li
                      key={itemIndex}
                      className="text-sm font-bold text-gray-600"
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
