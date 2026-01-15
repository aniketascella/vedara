"use client";

import { motion } from "framer-motion";
import { useState, useEffect, useRef } from "react";
import team from "@/app/constants/team";

// export default function TeamCarousel() {
//   const trackRef = useRef(null);
//   const containerRef = useRef(null);

//   const [index, setIndex] = useState(0);
//   const [maxIndex, setMaxIndex] = useState(0);
//   const [isMobile, setIsMobile] = useState(false);

//   /* --- Responsive detection --- */
//   useEffect(() => {
//     const check = () => setIsMobile(window.innerWidth < 1024);
//     check();
//     window.addEventListener("resize", check);
//     return () => window.removeEventListener("resize", check);
//   }, []);

//   /* --- Layout constants --- */
//   const CARD_WIDTH = isMobile ? 376 : 329;
//   const GAP = isMobile ? 0 : 24;
//   const STEP = CARD_WIDTH + GAP;
//   const LEFT_PADDING = 24;

//   useEffect(() => {
//     if (!trackRef.current || !containerRef.current) return;

//     const trackWidth = team.length * STEP;
//     const containerWidth = containerRef.current.offsetWidth;

//     const maxTranslateX = trackWidth - containerWidth + LEFT_PADDING;

//     const maxIdx = Math.ceil(maxTranslateX / STEP);
//     setMaxIndex(Math.max(maxIdx, 0));
//   }, [isMobile]);

//   const x = -(index * STEP) + LEFT_PADDING;

//   return (
//     <section className="w-full bg-primary py-20 overflow-hidden">
//       {/* Header + Controls */}
//       <div className="max-w-7xl mx-auto px-6 flex items-center justify-between mb-8">
//         <h2 className="text-xl italic max-w-lg">
//           Our Consultancy Is Led By Experienced Strategists
//         </h2>

//         <div className="flex gap-2">
//           <button
//             onClick={() => setIndex((i) => Math.max(i - 1, 0))}
//             disabled={index === 0}
//             className={`w-8 h-8 rounded-full border flex items-center justify-center
//               ${index === 0 ? "opacity-40 cursor-not-allowed" : ""}`}
//           >
//             ←
//           </button>

//           <button
//             onClick={() => setIndex((i) => Math.min(i + 1, maxIndex))}
//             disabled={index === maxIndex}
//             className={`w-8 h-8 rounded-full border flex items-center justify-center
//               ${index === maxIndex ? "opacity-40 cursor-not-allowed" : ""}`}
//           >
//             →
//           </button>
//         </div>
//       </div>

//       {/* Carousel */}
//       <div ref={containerRef} className="relative border flex justify-self-end overflow-hidden">
//         <motion.div
//         ref={trackRef}
//           animate={{ x }}
//           transition={{ ease: "easeInOut", duration: 0.5 }}
//           className="flex gap-10 pl-6"
//         >
//           {team.map((member, i) => (
//             <div
//               key={i}
//               className="shrink-0 rounded-xl bg-neutral-200 overflow-hidden"
//               style={{
//                 width: CARD_WIDTH,
//               }}
//             >
//               <img
//                 src={member.image}
//                 alt={member.name}
//                 className="w-full h-[340px] object-cover grayscale"
//               />

//               <div className="p-4 bg-neutral-300">
//                 <h3 className="font-medium">{member.name}</h3>
//                 <p className="text-sm opacity-70">{member.role}</p>
//               </div>
//             </div>
//           ))}
//         </motion.div>
//       </div>
//     </section>
//   );
// }


export default function TeamCarousel() {
  const trackRef = useRef(null);
  const cardRef = useRef(null);

  const [currentIndex, setCurrentIndex] = useState(0);
  const [step, setStep] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 768);
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);

  useEffect(() => {
    if (!cardRef.current) return;

    const cardWidth = cardRef.current.offsetWidth;
    const gap = isMobile ? 0 : 40;
    setStep(cardWidth + gap);
  }, [isMobile]);

  const maxIndex = team.length - 1;

  const goTo = (index) => {
    setCurrentIndex(Math.max(0, Math.min(index, maxIndex)));
  };

  return (
    <section className="w-full flex flex-col justify-center py-20 bg-primary overflow-hidden">
      {/* Controls */}
      <div className="flex flex-col lg:flex-row justify-between items-end mb-6 px-17 lg:px-35 text-black">
        <h2 className="lg:text-[36px] lg:w-[840px] tracking-tight">
          <span className="italic font-semibold">Our Consultancy</span> Is Led By <span className="italic font-semibold">Experienced Strategists</span> Who Work Closely With Founders, Executives, And Leadership Teams.
        </h2>
        <div className="flex gap-3">
          <button
            onClick={() => goTo(currentIndex - 1)}
            disabled={currentIndex === 0}
            className={`w-10 h-10 rounded-full border flex items-center justify-center
              ${currentIndex === 0 ? "opacity-40 cursor-not-allowed" : ""}`}
          >
            ←
          </button>

          <button
            onClick={() => goTo(currentIndex + 1)}
            disabled={currentIndex === maxIndex}
            className={`w-10 h-10 rounded-full border flex items-center justify-center
              ${currentIndex === maxIndex ? "opacity-40 cursor-not-allowed" : ""}`}
          >
            →
          </button>
        </div>
      </div>

      {/* Carousel */}
      <div className=" overflow-hidden">
        <motion.div
          ref={trackRef}
          animate={{ x: -currentIndex * step }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className={`flex ${isMobile ? "justify-center" : "gap-10 px-6"}`}
        >
          {team.map((member, i) => (
            <div
              key={i}
              ref={i === 0 ? cardRef : null}
              className="relative shrink-0 border w-[280px] lg:w-[329px] lg:h-[398px] rounded-xl overflow-hidden"
            >
            {/* Replace with your actual card */}
            
              <img
                src={member.image}
                alt={member.name}
                className="w-full h-full absolute inset-0 object-cover"
              />

              <div className="p-4 text-white">
                <p className="font-medium">{member.name}</p>
                <p className="text-sm opacity-70">{member.role}</p>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
