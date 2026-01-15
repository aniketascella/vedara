// // components/CaseStudyCarousel.js
// "use client";

// import { useState } from "react";
// import { motion, AnimatePresence } from "framer-motion";
// import projectCarousalData from "@/app/constants/projectCarousalData";
// import { ArrowForwardIosOutlined, ArrowBackIosNewOutlined } from "@mui/icons-material";

// const CARD_WIDTH = 396;
// const GAP = 24;

// export default function ProjectCarousal() {
//   const [startIndex, setStartIndex] = useState(0);
//   const [direction, setDirection] = useState(1);
//   const [mobileIndex, setMobileIndex] = useState(0);

//   const total = projectCarousalData.length;
//   const visibleCount = 3;

//   const next = () =>{
//     setDirection(1);
//     setStartIndex((prev) => (prev + 1) % total);
//     setMobileIndex((prev) => (prev + 1) % total);
//   }
//   const prev = () => {
//     setDirection(-1);
//     setStartIndex((prev) => (prev === 0 ? total - 1 : prev - 1));
//     setMobileIndex((prev) => (prev === 0 ? total - 1 : prev - 1));
//   };

//   const visibleItems = [
//     projectCarousalData[startIndex % total],
//     projectCarousalData[(startIndex + 1) % total],
//     projectCarousalData[(startIndex + 2) % total],
//   ];


//   return (
//     <div className="w-full bg-black py-16 relative overflow-hidden flex flex-col items-center gap-y-9">
//       {/* DESKTOP */}
//       <div className="hidden lg:flex flex-col max-w-7xl mx-auto items-end gap-6 px-6">

//         <div className="flex gap-4 ">
//           <div onClick={prev} className="hover:cursor-pointer w-10 h-10 rounded-full flex items-center justify-center text-white bg-tertiary">
//             <ArrowBackIosNewOutlined />
//           </div>
//           <div onClick={next} className="hover:cursor-pointer w-10 h-10 rounded-full flex items-center justify-center text-secondary bg-primary">
//             <ArrowForwardIosOutlined />
//           </div>
//         </div>

//         <div className="relative w-full overflow-hidden">
//           <AnimatePresence initial={false}>
//             <motion.div
//               key={startIndex}
//               className="flex gap-6"
//               initial={{
//                 x: direction === 1
//                   ? CARD_WIDTH + GAP
//                   : -(CARD_WIDTH + GAP),
//               }}
//               animate={{ x: 0 }}
//               exit={{
//                 x: direction === 1
//                   ? -(CARD_WIDTH + GAP)
//                   : CARD_WIDTH + GAP,
//               }}
//               transition={{ duration: 0.6, ease: "easeInOut" }}
//             >
//               {visibleItems.map((item,i) => (
//                 <motion.div
//                   key={item.id}
//                   className="relative w-[396px] h-[566px] rounded-xl overflow-hidden shrink-0"
//                   initial={i === (direction === 1 ? 2 : 0) ? { opacity: 0 } : false}
//                   animate={i === (direction === 1 ? 2 : 0) ? { opacity: 1 } : false}
//                   transition={{ duration: 0.4 }}
//                 >
//                   <img
//                     src={item.image}
//                     alt={item.title}
//                     className="absolute inset-0 w-full h-full object-cover"
//                   />

//                   <div className="absolute inset-0 bg-black/40" />

//                   <div className="absolute bottom-6 left-6 right-6 text-white">
//                     <h3 className="text-lg font-light mb-2">
//                       {item.title}
//                     </h3>
//                     <p className="text-sm text-white/80 mb-4">
//                       {item.description}
//                     </p>
//                     <button className="px-5 py-2 rounded-full bg-white/20 backdrop-blur text-sm">
//                       {item.cta}
//                     </button>
//                   </div>
//                 </motion.div>
//               ))}
//             </motion.div>
//           </AnimatePresence>
//         </div>
//       </div>

//       {/* MOBILE */}
//       <div className="lg:hidden flex flex-col items-center px-6">
//         <AnimatePresence mode="wait">
//           <motion.div
//             key={projectCarousalData[mobileIndex].id}
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             exit={{ opacity: 0 }}
//             transition={{ duration: 0.6 }}
//             className="relative w-[363px] h-[395px] rounded-xl overflow-hidden"
//           >
//             <img
//               src={projectCarousalData[mobileIndex].image}
//               alt={projectCarousalData[mobileIndex].title}
//               className="absolute inset-0 w-full h-full object-cover"
//             />

//             <div className="absolute inset-0 bg-black/40" />

//             <div className="absolute bottom-6 left-6 right-6 text-white">
//               <h3 className="text-lg font-light mb-2">
//                 {projectCarousalData[mobileIndex].title}
//               </h3>
//               <p className="text-sm text-white/80 mb-4">
//                 {projectCarousalData[mobileIndex].description}
//               </p>
//               <button className="px-5 py-2 rounded-full bg-white/20 backdrop-blur text-sm">
//                 {projectCarousalData[mobileIndex].cta}
//               </button>
//             </div>
//           </motion.div>
//         </AnimatePresence>

//         <div className="flex gap-4 mt-4">
//           <div onClick={prev} className="hover:cursor-pointer w-10 h-10 rounded-full flex items-center justify-center text-white bg-tertiary">
//             <ArrowBackIosNewOutlined />
//           </div>
//           <div onClick={next} className="hover:cursor-pointer w-10 h-10 rounded-full flex items-center justify-center text-secondary bg-primary">
//             <ArrowForwardIosOutlined />
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }


// components/CaseStudyCarousel.js
"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import projectCarousalData from "@/app/constants/projectCarousalData";
import { ArrowForwardIosOutlined, ArrowBackIosNewOutlined } from "@mui/icons-material";

const CARD_WIDTH = 396;
const GAP = 24;

export default function ProjectCarousal() {
  const [startIndex, setStartIndex] = useState(0);
  const [direction, setDirection] = useState(1);
  const [mobileIndex, setMobileIndex] = useState(0);

  const total = projectCarousalData.length;

  const next = () => {
    setDirection(1);
    setStartIndex((prev) => (prev + 1) % total);
    setMobileIndex((prev) => (prev + 1) % total);
  };

  const prev = () => {
    setDirection(-1);
    setStartIndex((prev) => (prev === 0 ? total - 1 : prev - 1));
    setMobileIndex((prev) => (prev === 0 ? total - 1 : prev - 1));
  };

  const visibleItems = [
    projectCarousalData[startIndex % total],
    projectCarousalData[(startIndex + 1) % total],
    projectCarousalData[(startIndex + 2) % total],
  ];

  return (
    <div className="w-full bg-black py-16 relative overflow-hidden flex flex-col items-center gap-y-9">
      {/* DESKTOP */}
      <div className="hidden lg:flex flex-col max-w-7xl mx-auto items-end gap-6 px-6">
        <div className="flex gap-4">
          <div
            onClick={prev}
            className="hover:cursor-pointer w-10 h-10 rounded-full flex items-center justify-center text-white bg-tertiary"
          >
            <ArrowBackIosNewOutlined />
          </div>
          <div
            onClick={next}
            className="hover:cursor-pointer w-10 h-10 rounded-full flex items-center justify-center text-secondary bg-primary"
          >
            <ArrowForwardIosOutlined />
          </div>
        </div>

        <div className="relative w-full overflow-hidden">
          {/* Remove AnimatePresence wrapper and animate cards individually */}
          <div className="flex gap-6">
            <AnimatePresence initial={false} mode="popLayout">
              {visibleItems.map((item, i) => (
                <motion.div
                  key={`${item.id}-${startIndex}-${i}`}
                  className="relative w-[396px] h-[566px] rounded-xl overflow-hidden shrink-0"
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
                >
                  <img
                    src={item.image}
                    alt={item.title}
                    className="absolute inset-0 w-full h-full object-cover"
                  />

                  <div className="absolute inset-0 bg-black/40" />

                  <div className="absolute bottom-6 left-6 right-6 text-white">
                    <h3 className="text-lg font-light mb-2">{item.title}</h3>
                    <p className="text-sm text-white/80 mb-4">{item.description}</p>
                    <button className="px-5 py-2 rounded-full bg-white/20 backdrop-blur text-sm">
                      {item.cta}
                    </button>
                  </div>
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
              x: direction === 1 ? 300 : -300,
            })}
            animate={{
              opacity: 1,
              x: 0,
            }}
            exit={(direction) => ({
              opacity: 0,
              x: direction === 1 ? -300 : 300,
            })}
            transition={{ duration: 0.5, ease: "easeInOut" }}
            className="relative w-[363px] h-[395px] rounded-xl overflow-hidden"
          >
            <img
              src={projectCarousalData[mobileIndex].image}
              alt={projectCarousalData[mobileIndex].title}
              className="absolute inset-0 w-full h-full object-cover"
            />

            <div className="absolute inset-0 bg-black/40" />

            <div className="absolute bottom-6 left-6 right-6 text-white">
              <h3 className="text-lg font-light mb-2">
                {projectCarousalData[mobileIndex].title}
              </h3>
              <p className="text-sm text-white/80 mb-4">
                {projectCarousalData[mobileIndex].description}
              </p>
              <button className="px-5 py-2 rounded-full bg-white/20 backdrop-blur text-sm">
                {projectCarousalData[mobileIndex].cta}
              </button>
            </div>
          </motion.div>
        </AnimatePresence>

        <div className="flex gap-4 mt-4">
          <div
            onClick={prev}
            className="hover:cursor-pointer w-10 h-10 rounded-full flex items-center justify-center text-white bg-tertiary"
          >
            <ArrowBackIosNewOutlined />
          </div>
          <div
            onClick={next}
            className="hover:cursor-pointer w-10 h-10 rounded-full flex items-center justify-center text-secondary bg-primary"
          >
            <ArrowForwardIosOutlined />
          </div>
        </div>
      </div>
    </div>
  );
}