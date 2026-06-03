"use client";

import { motion, type Variants } from "framer-motion";
import type { ReactNode } from "react";

type Props = {
  children: ReactNode;
  className?: string;
  delay?: number;
  as?: "div" | "section" | "li" | "span";
};

/**
 * Scroll-reveal wrapper. Content stays visible by default, then settles
 * into its final state when it enters the viewport.
 */
export default function Reveal({
  children,
  className,
  delay = 0,
  as = "div",
}: Props) {
  const variants: Variants = {
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
      initial={false}
      whileInView="show"
      viewport={{ once: true, amount: 0.25 }}
    >
      {children}
    </MotionTag>
  );
}
