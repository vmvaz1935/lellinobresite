"use client";
import { motion, useReducedMotion } from "framer-motion";
import { ReactNode } from "react";

export default function Reveal({ children }: { children: ReactNode }) {
  const prefersReduced = useReducedMotion();
  const initial = prefersReduced ? { opacity: 1, y: 0 } : { opacity: 0, y: 12 };
  const animate = prefersReduced ? { opacity: 1, y: 0 } : { opacity: 1, y: 0 };
  const transition = prefersReduced ? { duration: 0 } : { duration: 0.18, ease: "easeOut" };
  return (
    <motion.div initial={initial} whileInView={animate} viewport={{ once: true, margin: "-10%" }} transition={transition}>
      {children}
    </motion.div>
  );
}
