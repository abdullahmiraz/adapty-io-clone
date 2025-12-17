/**
 * Centralized Animation Configuration
 * Adjust these values to control all animations across the site
 */

export const animations = {
  // Base durations (in seconds)
  duration: {
    fast: 0.2,
    normal: 0.3,
    medium: 0.4,
    slow: 0.5,
  },

  // Stagger delays (in seconds)
  stagger: {
    tiny: 0.05,
    small: 0.08,
    medium: 0.1,
    large: 0.15,
  },

  // Easing functions
  easing: {
    default: [0.4, 0, 0.2, 1],
    easeOut: [0, 0, 0.2, 1],
    easeIn: [0.4, 0, 1, 1],
    easeInOut: [0.4, 0, 0.2, 1],
  },

  // Common animation variants
  variants: {
    fadeIn: {
      initial: { opacity: 0 },
      animate: { opacity: 1 },
      exit: { opacity: 0 },
    },
    fadeInUp: {
      initial: { opacity: 0, y: 20 },
      animate: { opacity: 1, y: 0 },
      exit: { opacity: 0, y: 20 },
    },
    fadeInDown: {
      initial: { opacity: 0, y: -20 },
      animate: { opacity: 1, y: 0 },
      exit: { opacity: 0, y: -20 },
    },
    fadeInLeft: {
      initial: { opacity: 0, x: -20 },
      animate: { opacity: 1, x: 0 },
      exit: { opacity: 0, x: -20 },
    },
    fadeInRight: {
      initial: { opacity: 0, x: 20 },
      animate: { opacity: 1, x: 0 },
      exit: { opacity: 0, x: 20 },
    },
    scaleIn: {
      initial: { opacity: 0, scale: 0.9 },
      animate: { opacity: 1, scale: 1 },
      exit: { opacity: 0, scale: 0.9 },
    },
  },

  // Helper function to get transition with duration
  transition: (duration: number = 0.3, delay: number = 0) => ({
    duration,
    delay,
    ease: "easeInOut" as const,
  }),

  // Helper function for scroll-triggered animations
  scrollTransition: (delay: number = 0) => ({
    duration: 0.3,
    delay,
    ease: "easeInOut" as const,
  }),

  // Helper function for hover animations
  hover: {
    scale: 1.02,
    transition: { duration: 0.2 },
  },

  // Helper function for tap animations
  tap: {
    scale: 0.98,
    transition: { duration: 0.1 },
  },
};

// Export commonly used values
export const {
  duration,
  stagger,
  variants,
  transition,
  scrollTransition,
  hover,
  tap,
} = animations;

