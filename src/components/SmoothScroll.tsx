"use client";

import { useEffect } from "react";
import Lenis from "lenis";
import { cancelFrame, frame, useReducedMotion } from "framer-motion";

// Lenis drives scroll via its own animation loop; hooking it into Framer
// Motion's frame scheduler (instead of a separate requestAnimationFrame)
// keeps the two in sync so scroll-linked effects (useScroll/useTransform
// throughout Hero, Work, etc.) don't jitter against Lenis's eased position.
export default function SmoothScroll() {
  const reduceMotion = useReducedMotion();

  useEffect(() => {
    if (reduceMotion) {
      return;
    }

    const lenis = new Lenis({
      duration: 1.1,
      easing: (t: number) => 1 - Math.pow(1 - t, 3),
      smoothWheel: true,
    });

    function onFrame(data: { timestamp: number }) {
      lenis.raf(data.timestamp);
    }

    frame.update(onFrame, true);

    return () => {
      cancelFrame(onFrame);
      lenis.destroy();
    };
  }, [reduceMotion]);

  return null;
}
