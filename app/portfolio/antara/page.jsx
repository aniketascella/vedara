"use client";

import React, { useEffect } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { useRouter } from "next/navigation";

const page = () => {
  const router = useRouter();

  // Optional: if you want route to scroll to top on arrival
  useEffect(() => {
    if (typeof window !== "undefined") window.scrollTo({ top: 0, behavior: "auto" });
  }, []);

  return (
    <div className="min-h-screen relative bg-white">
      <header className="h-screen relative overflow-hidden">
        {/* motion image with identical layoutId ensures shared-element morph */}
        <motion.img
          src="/portfolio/img4.png"
          alt="hero-img"
          layoutId="shared-img"
          className="absolute inset-0 w-full h-full object-cover"
          style={{ zIndex: 0 }}
          transition={{ type: "spring", stiffness: 300, damping: 30, mass: 0.12 }}
        />

        {/* Overlay + textual hero content */}
        <div className="absolute inset-0 bg-black/40 z-10 flex items-center justify-center">
          <div className="text-center max-w-2xl px-6">
            <h1 className="text-5xl text-white font-semibold mb-4">Antara Living</h1>
            <p className="text-lg text-white/90 mb-6">
              Ethical Profit Hospitality — welcome to our space.
            </p>
            <button
              onClick={() => router.back()}
              className="inline-block px-6 py-3 bg-white text-black rounded-md"
            >
              Back
            </button>
          </div>
        </div>
      </header>

      <main className="py-20 px-6">
        <h2 className="text-2xl mb-4">About Antara</h2>
        <p className="max-w-3xl">
          This page receives a smooth shared-element transition from the scaled image on Selhaya.
        </p>
      </main>
      </div>
    );
}

export default page