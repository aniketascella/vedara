"use client";

import { useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import projectCarousalData from "@/app/constants/projectCarousalData";
import { ArrowForwardIosOutlined, ArrowBackIosNewOutlined } from "@mui/icons-material";
import Link from "next/link";

const CARD_WIDTH = 396;
const GAP = 24;

export default function ProjectCarousal() {
  const [startIndex, setStartIndex] = useState(0);
  const [direction, setDirection] = useState(1);
  const [mobileIndex, setMobileIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  const total = projectCarousalData.length;
  const visibleCount = 3;

  const isNextDisabled = startIndex >= total - visibleCount;
  const isPrevDisabled = startIndex === 0;
  const isMobileNextDisabled = mobileIndex === total - 1;
  const isMobilePrevDisabled = mobileIndex === 0;

  const next = () => {
    if (isNextDisabled) return;
    setDirection(1);
    setStartIndex((prev) => prev + 1);
  };

  const nextMobile = () => {
    if (isMobileNextDisabled) return
    setDirection(1);
    setMobileIndex((prev) => prev + 1);
  }

  const prev = () => {
    if (isPrevDisabled) return;
    setDirection(-1);
    setStartIndex((prev) => prev - 1);
  };

  const prevMobile = () => {
    if(isMobilePrevDisabled) return;
    setDirection(-1);
    setMobileIndex((prev) => prev - 1);
  }

  const visibleItems = [
    projectCarousalData[startIndex % total],
    projectCarousalData[(startIndex + 1) % total],
    projectCarousalData[(startIndex + 2) % total],
  ];

  const handleMouseEnter = () => {
    if (videoRef.current) {
      videoRef.current.currentTime = 0;
      videoRef.current.play();
    }
  };

  const handleMouseLeave = () => {
    if (videoRef.current) {
      videoRef.current.pause();
      videoRef.current.currentTime = 0;
    }
  };

  return (
    <div className="w-full bg-black py-16 relative overflow-hidden flex flex-col items-center gap-y-9">
      {/* DESKTOP */}
      <div className="hidden lg:flex flex-col mx-auto items-end gap-6 px-6">
        <div className="flex gap-4">
          <div
            onClick={prev}
            className={`w-10 h-10 rounded-full flex items-center justify-center ${
              isPrevDisabled
                ? "text-white bg-tertiary hover:cursor-not-allowed"
                : "text-secondary bg-primary hover:cursor-pointer"
            }`}
          >
            <ArrowBackIosNewOutlined />
          </div>
          <div
            onClick={next}
            className={`hover:cursor-pointer w-10 h-10 rounded-full flex items-center justify-center ${
              isNextDisabled
                ? "text-white bg-tertiary hover:cursor-not-allowed"
                : "text-secondary bg-primary hover:cursor-pointer"
            }`}
          >
            <ArrowForwardIosOutlined />
          </div>
        </div>

        <div className="relative w-full overflow-hidden">
          <div className="flex h-[395px] gap-6">
            <AnimatePresence initial={false} mode="popLayout">
              {visibleItems.map((item, i) => (
                <motion.div
                  key={`${item.id}-${startIndex}-${i}`}
                  className="relative w-[363px] h-full rounded-xl overflow-hidden shrink-0"
                  layout
                  initial={{
                    opacity: 0,
                    x: direction === 1 ? CARD_WIDTH + GAP : -(CARD_WIDTH + GAP),
                  }}
                  animate={{
                    opacity: 1,
                    x: 0,
                  }}
                  exit={{
                    opacity: 0,
                    x: direction === 1 ? -(CARD_WIDTH + GAP) : CARD_WIDTH + GAP,
                  }}
                  transition={{
                    duration: 0.5,
                    ease: "easeInOut",
                  }}
                  onMouseEnter={item.id === 2 ? () => setIsHovered(true) : undefined}
                  onMouseLeave={item.id === 2 ? () => setIsHovered(false) : undefined}
                >
                  <Link href={item.link}>
                    {item.id === 2 && (
                      <video
                        src={item.video}
                        autoPlay
                        muted
                        loop
                        playsInline
                        className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-300 ${
                          isHovered ? "opacity-100" : "opacity-0"
                        }`}
                      />
                    )}
                    <img
                      src={item.image}
                      alt={item.title}
                      className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-300 ${
                        item.id === 2 && isHovered ? "opacity-0" : "opacity-100"
                      }`}
                    />

                    <div className="absolute inset-0 bg-black/30" />

                    <div className="absolute bottom-0 p-6 w-full text-white backdrop-blur-[3px]">
                      <p className="text-[20px] tracking-wide mb-2">{item.title}</p>
                      <p className="text-[14px] w-62 text-white font-light">{item.description}</p>
                    </div>
                  </Link>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        </div>
      </div>

      {/* MOBILE */}
      <div className="lg:hidden flex flex-col items-center px-6">
        <AnimatePresence initial={false} mode="wait" custom={direction}>
          <motion.div
            key={projectCarousalData[mobileIndex].id}
            custom={direction}
            initial={(direction) => ({
              opacity: 0,
              x: direction === 1 ? 363 : -363,
            })}
            animate={{
              opacity: 1,
              x: 0,
            }}
            exit={(direction) => ({
              opacity: 0,
              x: direction === 1 ? -363 : 363,
            })}
            transition={{ duration: 0.5, ease: "easeInOut" }}
            className="relative w-[372px] h-[395px] rounded-xl overflow-hidden"
          >
            <img
              src={projectCarousalData[mobileIndex].image}
              alt={projectCarousalData[mobileIndex].title}
              className="absolute inset-0 w-full h-full object-cover"
            />

            <div className="absolute inset-0 bg-black/40" />

            <div className="absolute bottom-0 p-6 w-full text-white backdrop-blur-[3px]">
              <p className="text-lg font-light mb-2">
                {projectCarousalData[mobileIndex].title}
              </p>
              <p className="text-sm text-white mb-2">
                {projectCarousalData[mobileIndex].description}
              </p>
              <button className="px-5 py-2 rounded-full bg-white/20 backdrop-blur text-sm">
                <Link href={projectCarousalData[mobileIndex].link}>
                  {projectCarousalData[mobileIndex].cta}
                </Link>
              </button>
            </div>
          </motion.div>
        </AnimatePresence>

        <div className="flex gap-4 mt-4">
          <div
            onClick={prevMobile}
            className={`w-10 h-10 rounded-full flex items-center justify-center ${
              isMobilePrevDisabled
                ? "text-white bg-tertiary hover:cursor-not-allowed"
                : "text-secondary bg-primary hover:cursor-pointer"
            }`}
          >
            <ArrowBackIosNewOutlined />
          </div>
          <div
            onClick={nextMobile }
            className={`hover:cursor-pointer w-10 h-10 rounded-full flex items-center justify-center ${
              isMobileNextDisabled
                ? "text-white bg-tertiary hover:cursor-not-allowed"
                : "text-secondary bg-primary hover:cursor-pointer"
            }`}
          >
            <ArrowForwardIosOutlined />
          </div>
        </div>
      </div>
    </div>
  );
}