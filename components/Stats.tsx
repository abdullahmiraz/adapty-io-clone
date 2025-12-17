"use client";

import { motion } from "framer-motion";
import { useAnimatedCounter } from "@/hooks/useAnimatedCounter";
import { Card } from "@/components/ui/card";
import { animations } from "@/lib/animations";

interface StatItem {
  value: number;
  label: string;
  subtext: string;
  suffix?: string;
  prefix?: string;
  decimals?: number;
  format?: "number" | "percentage" | "currency";
}

function StatCard({ stat, index }: { stat: StatItem; index: number }) {
  const { count, ref } = useAnimatedCounter({
    targetValue: stat.value,
    duration: 1500,
    decimals: stat.decimals ?? 0,
    suffix: stat.suffix ?? "",
    prefix: stat.prefix ?? "",
  });

  const formatDisplayValue = () => {
    if (stat.format === "currency") {
      if (stat.value >= 1000) {
        const billions = count / 1000;
        return `$${billions.toFixed(stat.decimals ?? 1)}B`;
      }
      return `$${count.toFixed(stat.decimals ?? 0)}M`;
    }
    if (stat.format === "percentage") {
      return `${count.toFixed(stat.decimals ?? 2)}%`;
    }
    if (stat.suffix === "B") {
      return `${count.toFixed(stat.decimals ?? 0)}${stat.suffix}`;
    }
    return `${count.toFixed(stat.decimals ?? 0)}${stat.suffix || ""}`;
  };

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, scale: 0.8 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={animations.scrollTransition(index * animations.stagger.tiny)}
      whileHover={animations.hover}
    >
      <Card className="border-gray-800 bg-gray-900/50 p-6 text-center backdrop-blur-sm">
        <div className="mb-2 text-5xl font-black text-violet-400 sm:text-6xl tabular-nums">
          {formatDisplayValue()}
        </div>
        <div className="text-sm font-semibold text-gray-400">{stat.subtext}</div>
        <div className="mt-2 text-lg font-bold text-gray-300">
          {stat.label}
        </div>
      </Card>
    </motion.div>
  );
}

export default function Stats() {
  const stats: StatItem[] = [
    {
      value: 500,
      label: "tracked revenue",
      subtext: "$500M",
      prefix: "$",
      format: "currency",
    },
    {
      value: 99.99,
      label: "historical uptime",
      subtext: "99.99%",
      suffix: "%",
      decimals: 2,
      format: "percentage",
    },
    {
      value: 100,
      label: "users served",
      subtext: "100M",
      suffix: "B",
      format: "number",
    },
    {
      value: 50,
      label: "API calls / month",
      subtext: "50B",
      suffix: "B",
      format: "number",
    },
  ];

  return (
    <section className="bg-gradient-to-b from-gray-900 to-black py-20 sm:py-32 text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={animations.scrollTransition()}
          className="mx-auto max-w-4xl text-center mb-12"
        >
          <h2 className="mb-4 text-3xl font-black sm:text-4xl md:text-5xl">
            Adapty processes subscription revenue with the industry&apos;s
            highest SLA Rate
          </h2>
        </motion.div>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((stat, index) => (
            <StatCard key={index} stat={stat} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
