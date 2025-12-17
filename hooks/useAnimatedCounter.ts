import { useEffect, useState, useRef } from "react";
import { useInView } from "framer-motion";

interface UseAnimatedCounterProps {
  targetValue: number;
  duration?: number;
  decimals?: number;
  suffix?: string;
  prefix?: string;
}

export function useAnimatedCounter({
  targetValue,
  duration = 1500, // Faster default
  decimals = 0,
  suffix = "",
  prefix = "",
}: UseAnimatedCounterProps) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const hasAnimated = useRef(false);

  useEffect(() => {
    if (isInView && !hasAnimated.current) {
      hasAnimated.current = true;
      const startTime = Date.now();
      const startValue = 0;

      const animate = () => {
        const now = Date.now();
        const elapsed = now - startTime;
        const progress = Math.min(elapsed / duration, 1);

        // Easing function for smooth animation
        const easeOutCubic = (t: number) => 1 - Math.pow(1 - t, 3);
        const easedProgress = easeOutCubic(progress);

        const currentValue =
          startValue + (targetValue - startValue) * easedProgress;
        setCount(currentValue);

        if (progress < 1) {
          requestAnimationFrame(animate);
        } else {
          setCount(targetValue);
        }
      };

      requestAnimationFrame(animate);
    }
  }, [isInView, targetValue, duration]);

  const formatNumber = (num: number): string => {
    if (num >= 1000000000) {
      return `${prefix}${(num / 1000000000).toFixed(decimals)}B${suffix}`;
    } else if (num >= 1000000) {
      return `${prefix}${(num / 1000000).toFixed(decimals)}M${suffix}`;
    } else if (num >= 1000) {
      return `${prefix}${(num / 1000).toFixed(decimals)}K${suffix}`;
    }
    return `${prefix}${num.toFixed(decimals)}${suffix}`;
  };

  return { count, ref, displayValue: formatNumber(count) };
}
