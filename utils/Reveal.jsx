"use client";
import { motion } from "framer-motion";

export default function Reveal({ children, variants, className }) {
  return (
    <motion.div
      variants={variants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      className={`${className} overflow-x-hidden`}
    >
      {children}
    </motion.div>
  );
}