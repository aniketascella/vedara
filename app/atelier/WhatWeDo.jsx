"use client";

import { slideInFromLeft,slideInFromBottom,slideInFromRight,slideInFromTop } from "@/utils/motion";
import Reveal from "@/utils/Reveal";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef, useState, useEffect } from "react";

const SECTIONS = [
  {
    id: "01",
    title: "LUXURY BRAND BUILDING",
    items: [
      {
        heading: "BRAND ETHOS",
        text: "We structure every visual and verbal element so your offerings appear clear, compelling, and instantly desirable to your audience.",
      },
      {
        heading: "VISUAL IDENTITY SYSTEMS",
        text: "With intuitive flow and high-clarity design choices, we craft displays that guide users effortlessly through what you provide.",
      },
      {
        heading: "GUEST RITUALS & EXPERIENCE",
        text: "We highlight your strongest differentiators through precise messaging that builds trust and reinforces why your solution matters.",
      },
    ],
  },
  {
    id: "02",
    title: "DIGITAL MARKETING",
    items: [
      {
        heading: "CAMPAIGN ARCHITECTURE",
        text: "High-performance digital campaigns crafted for premium audiences, driving visibility, influence, and measurable brand elevation.",
      },
      {
        heading: "SOCIAL ECOSYSTEMS",
        text: "Sophisticated social strategies and content systems built on aesthetic coherence, behavioral insight, and algorithm intelligence.",
      },
      {
        heading: "ORGANIC AUTHORITY",
        text: "Comprehensive SEO frameworks that enhance discoverability, build credibility, and ensure your brand is chosen organically.",
      },
    ],
  },
  {
    id: "03",
    title: "WEB DEVELOPMENT & TECH",
    items: [
      {
        heading: "BESPOKE WEBSITES",
        text: "Fully custom, high-performance websites crafted with luxury-grade design, seamless UX, and robust full-stack engineering.",
      },
      {
        heading: "CUSTOM PRODUCTS",
        text: "Scalable web applications, dashboards, and internal tools engineered for reliability, precision, and operational efficiency.",
      },
      {
        heading: "SECURE INFRASTRUCTURE",
        text: "Enterprise-grade hosting and deployment architectures designed for stability, compliance, and long-term scalability.",
      },
    ],
  },
];

export default function WhatWeDo() {
  const sectionRef = useRef(null);
  const [active, setActive] = useState(0);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end end"],
  });

  useEffect(() => {
    return scrollYProgress.on("change", (v) => {
      const idx = Math.min(
        SECTIONS.length - 1,
        Math.floor(v * SECTIONS.length)
      );
      setActive(idx);
    });
  }, [scrollYProgress]);

  return (
    <section ref={sectionRef} className="h-[250vh] w-screen">
      <div className="sticky top-0 h-screen w-screen px-12 lg:px-24 flex flex-col justify-center">
        <div className="absolute inset-0 w-full h-full">
          <img
            src="/rovineArt.png"
            alt="bg overlay"
            className="w-full h-full object-cover"
          />
        </div>
        {/* Header */}
        <div className="flex flex-col lg:flex-row gap-y-4 justify-between mb-16">
          <Reveal variants={slideInFromLeft(0.2)}>
            <h3 className="italic lg:text-[22px]">What We Do</h3>
          </Reveal>

          <Reveal variants={slideInFromRight(0.2)}>
            <p className="lg:w-[370px] text-right">
              We develop identity, strategy, and digital infrastructure that takes
              your brand from competition to cultural dominion.
            </p>
          </Reveal>
        </div>

        {/* Sections */}
        <div className="space-y-20">
          {SECTIONS.map((section, i) => {
            const isActive = i === active;

            return (
              <motion.div
                key={section.id}
                initial={false}
                animate={{
                  opacity: isActive ? 1 : 0.25,
                }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                className="space-y-8"
              >
                {/* Heading */}
                <div className={`flex ${i==1 ? `justify-start pl-[12vw]`: `justify-center`} items-center gap-6`}>
                  <span className="text-sm opacity-60">[{section.id}]</span>
                  <p className="text-[18px] font-semibold lg:text-3xl tracking-wide">
                    {section.title}
                  </p>
                </div>

                {/* Sub content */}
                <motion.div
                  initial={false}
                  animate={{
                    height: isActive ? "auto" : 0,
                    opacity: isActive ? 1 : 0,
                  }}
                  transition={{ duration: 0.6, ease: "easeOut" }}
                  className="overflow-hidden grid grid-cols-1 lg:grid-cols-3 gap-12 pl-10"
                >
                  {section.items.map((item, idx) => (
                    <div key={idx} className="space-y-3">
                      <p className="text-md text-center lg:text-left font-bold uppercase">
                        {item.heading}
                      </p>
                      <p className="text-sm text-center lg:text-left leading-relaxed opacity-80">
                        {item.text}
                      </p>
                    </div>
                  ))}
                </motion.div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
