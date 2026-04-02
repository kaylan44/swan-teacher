"use client";

import { motion, useInView } from "framer-motion";
import { useRef, ReactNode } from "react";

interface FadeInProps {
  children: ReactNode;
  delay?: number;
  className?: string;
  direction?: "up" | "left" | "right" | "none";
}

export default function FadeIn({
  children,
  delay = 0,
  className = "",
  direction = "up",
}: FadeInProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  const getInitial = () => {
    if (direction === "up") return { opacity: 0, y: 30 };
    if (direction === "left") return { opacity: 0, x: -30 };
    if (direction === "right") return { opacity: 0, x: 30 };
    return { opacity: 0 };
  };

  const getAnimate = () => {
    if (direction === "up") return { opacity: 1, y: 0 };
    if (direction === "left") return { opacity: 1, x: 0 };
    if (direction === "right") return { opacity: 1, x: 0 };
    return { opacity: 1 };
  };

  return (
    <motion.div
      ref={ref}
      initial={getInitial()}
      animate={isInView ? getAnimate() : getInitial()}
      transition={{
        duration: 0.6,
        delay,
        ease: [0.22, 1, 0.36, 1],
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
