"use client";

import { motion, useReducedMotion, type Variants } from "framer-motion";
import type { ReactNode } from "react";

type Props = {
  children: ReactNode;
  className?: string;
  delay?: number;
  /** vertical distance to travel in px */
  y?: number;
  as?: "div" | "section" | "li" | "span";
};

/**
 * Scroll-reveal wrapper. Fades and lifts content into view once,
 * with a cinematic ease. Honours reduced-motion preferences.
 */
export default function Reveal({
  children,
  className,
  delay = 0,
  y = 40,
  as = "div",
}: Props) {
  const reduce = useReducedMotion();

  const variants: Variants = {
    hidden: { opacity: 0, y: reduce ? 0 : y },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 1.1,
        delay,
        ease: [0.16, 1, 0.3, 1],
      },
    },
  };

  const MotionTag = motion[as];

  return (
    <MotionTag
      className={className}
      variants={variants}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.25 }}
    >
      {children}
    </MotionTag>
  );
}
