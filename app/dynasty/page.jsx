// // pages/parallax-footer.jsx  (or app/.../page.jsx)
// // "use client" required for framer-motion hooks
// "use client";

// import React, { useRef } from "react";
// import { motion, useScroll, useTransform } from "framer-motion";

// export default function ParallaxFooterHalfVisible() {
//   const containerRef = useRef(null);

//   // scrollYProgress across a 200vh container (two 100vh sections)
//   const { scrollYProgress } = useScroll({
//     target: containerRef,
//     offset: ["start end", "end start"],
//   });

//   /*
//     MAPPINGS (tweak these three values to taste):
//       - footerLiftRange: when footer moves from half-hidden -> fully in view.
//       - We start the lift a bit after scroll begins so the top section initially slides
//         and reveals the center of the footer first.
//   */
//   const footerLiftRange = [0.24, 0.72]; // adjust to sync with your layout/scroll speed

//   // footerTranslate: moves the whole footer from "50%" (half below) -> "0%" (fully in view)
//   const footerTranslate = useTransform(
//     scrollYProgress,
//     footerLiftRange,
//     ["50%", "0%"],
//     { clamp: true }
//   );

//   // innerY: slower parallax of the inner content (subtle opposite direction possible)
//   const innerY = useTransform(scrollYProgress, [0, 1], [100,-100]);


//   return (
//     <div ref={containerRef} className="w-screen">
//       <div style={{ height: "200vh" }} className="relative w-full">
//         {/* TOP SECTION (white content) */}
//         <section className="h-screen w-full flex items-center justify-center bg-white relative z-20">
//           <div className="max-w-4xl px-8">
//             <h1 className="text-5xl md:text-6xl font-semibold text-black leading-tight">
//               Awards & Recognitions
//             </h1>
//             <p className="mt-6 text-lg text-gray-600">
//               Top section — scroll up to reveal the footer that sits behind it.
//             </p>
//           </div>
//         </section>

//         {/* FOOTER (hero) — absolutely placed at bottom, min-h-screen keeps it from compressing */}
//         <motion.section
//           className="absolute left-0 w-full min-h-screen bottom-0 overflow-hidden z-10"
//         >
//           {/* inner wrapper gets the slower parallax */}
//           <motion.div
//             className="w-full min-h-screen relative bg-center bg-cover bg-no-repeat"
//             style={{
//               y: innerY,
//               backgroundImage: "url('/antara/img5.png')",
//             }}
//           >
//             {/* Background image / hero (replace with your own or next/image wrapper) */}

//             {/* Left-side text block — keep content layered above background */}
//             <div className="relative z-20 min-h-screen flex items-center">
//               <div className="max-w-lg px-12">
//                 <h2 className="text-6xl md:text-8xl font-medium text-white leading-tight">
//                   Aebele
//                   <br />
//                   Interiors
//                 </h2>
//                 <p className="mt-6 text-lg text-white/90">
//                   Luxurious design experience
//                 </p>
//               </div>

              
//             </div>
//           </motion.div>
//         </motion.section>
//       </div>
//     </div>
//   );
// }

import React from 'react'

const page = () => {
  return (
    <div>Coming soon</div>
  )
}

export default page