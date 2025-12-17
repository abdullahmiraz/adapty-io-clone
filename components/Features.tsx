"use client";

import { Code, BarChart3, Layout } from "lucide-react";
import { motion } from "framer-motion";
import { animations } from "@/lib/animations";
import FeatureCard from "./FeatureCard";

export default function Features() {
  return (
    <section className="bg-gray-50 py-20 sm:py-32">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={animations.scrollTransition()}
          className="mx-auto max-w-3xl text-center mb-16"
        >
          <h2 className="mb-4 text-3xl font-black text-gray-900 sm:text-4xl md:text-5xl">
            Help your team run the mobile subscription business.
            <br />
            Faster and cheaper.
          </h2>
        </motion.div>

        <div className="grid gap-8 md:grid-cols-3">
          <FeatureCard
            icon={<Code className="h-6 w-6" />}
            title="For developers"
            description="Subscriptions SDK"
            features={["Refund Saver", "Remote config", "Fallback paywalls"]}
            color="pink"
            index={0}
          />
          <FeatureCard
            icon={<BarChart3 className="h-6 w-6" />}
            title="For app owners"
            description="Revenue analytics"
            features={["LTV analytics", "AI LTV and revenue predictions"]}
            color="blue"
            index={1}
          />
          <FeatureCard
            icon={<Layout className="h-6 w-6" />}
            title="For marketers"
            description="A/B testing"
            features={["No-code Builder", "Localizations", "Targeting"]}
            color="green"
            index={2}
          />
        </div>
      </div>
    </section>
  );
}
