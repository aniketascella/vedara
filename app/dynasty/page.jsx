'use client'

import Footer from '@/components/Footer';
import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence ,useScroll } from "framer-motion";
import Image from 'next/image';
import {InvestorForm, VisionForm} from './components/Forms';
import Reveal from '@/utils/Reveal';
import { slideInFromBottom, slideInFromLeft, slideInFromRight, slideInFromTop } from '@/utils/motion';
import ArrowForwardIosOutlinedIcon from '@mui/icons-material/ArrowForwardIosOutlined';

const principles = [
  {
    id: "01",
    title: "HAND-VETTED BY\nHUMAN INTELLIGENCE",
    image: "/dynasty/img1.png",
  },
  {
    id: "02",
    title: "DEMONSTRATE\nGENERATIONAL PURPOSE",
    image: "/dynasty/scrollImg2.png",
  },
  {
    id: "03",
    title: "DESIGNED TO ENDURE",
    image: "/dynasty/scrollImg3.png",
  },
  {
    id: "04",
    title: "CONTINUITY IN PURPOSE",
    image: "/dynasty/scrollImg4.png",
  },
];

const investment=[
  {
    text1:"Each project is screened for depth, heritage value, design philosophy, and the potential to become a generational asset, not a market-dependent investment.",
  },
  {
    text1:"Vedara limits entries to those that embody excellence. Every asset undergoes rigorous assessment, ensuring investors see only what is worthy of their time and capital.",
  },
  {
    text1:"Projects are chosen for longevity, environmental stewardship, and their ability to become markers of identity and inheritance for decades to come.",
    text2:"Request Invitation",
  }
]

const imageText =[
  {
    text2: {
      txtLeft:"Invitation Only",
      txtRight:" Access",
      width: "w-[195px] lg:w-[342px]",
    },
    image: "/dynasty/img6.png",
  },
  {
    text1: {
      txtLeft:"Confidential",
      txtRight:"NDA",
      width: "w-[103px] lg:w-[218px]",
    },
    image: "/dynasty/img7.png",
    text2: {
      txtLeft:"Onboarding + ",
      txtRight:"Encryption",
      width: "w-[143px] lg:w-[412px]",
    }
  },
  {
    text1: {
      txtLeft:"Curated",
      txtRight:"Project Dossiers",
      width: "w-[153px] lg:w-[313px]",
    },
    image: "/dynasty/img8.png",
  },
  {
    text2: {
      txtLeft:"Investor Profiling",
      txtRight:"& Matching",
      width: "w-[159px] lg:w-[450px]",
    },
    image: "/dynasty/img9.png",
  },
  {
    text1: {
      txtLeft:"Human-Led",
      width: "w-[70px] lg:w-[156px]",
    },
    image: "/dynasty/img10.png",
    text2:{
      txtLeft: "Concierge",
      txtRight: "Coordination",
      width: "w-[128px] lg:w-[412px]",
    }
  },
  {
    text1: {
      txtLeft:"Luxury",
      txtRight:"UX Built For Emotional Resonance",
      width: "w-[119px] lg:w-[280px]",
    },
    image: "/dynasty/img11.png",
  },
  {
    text2: {
      txtLeft:"Analytics Dashboard",
      txtRight:"For Engagement Insights",
      width: "w-[138px] lg:w-[342px]",
    },
    image: "/dynasty/img12.png",
  },
]

const page = () => {
  const [openForm1, setOpenForm1] = useState(false);
  const [openForm2, setOpenForm2] = useState(false);
  const formRef1 = useRef(null);
  const formRef2 = useRef(null);
  const itemRefs = useRef([]);
  const [activeIndex, setActiveIndex] = useState(0);
  const prevIndexRef = useRef(0);
  const [direction, setDirection] = useState(1);
  const scrollRef = useRef(null);
  const imagesRef = useRef(null);

  const {scrollYProgress: images} =useScroll({
    target: imagesRef,
    offset:["start start", "end end"]
  })

  const [imageIndex, setImageIndex] = useState(0);

  useEffect(() => {
    return images.on("change", (v) => {
      const i = Math.min(
        imageText.length - 1,
        Math.floor(v * imageText.length)
      );
      setImageIndex(i);
    });
  }, [images]);

  useEffect(() => {
    function onClick(e) {
      if (openForm1 && formRef1.current && !formRef1.current.contains(e.target)) {
        setOpenForm1(false);
      }
      if (openForm2 && formRef2.current && !formRef2.current.contains(e.target)) {
        setOpenForm2(false);
      }
    }
    document.addEventListener("mousedown", onClick);
    return () => document.removeEventListener("mousedown", onClick);
  }, [openForm1, openForm2]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const nextIndex = Number(entry.target.dataset.index);
            const prevIndex = prevIndexRef.current;
            if (nextIndex !== prevIndex) {
              setDirection(nextIndex > prevIndex ? 1 : -1);
              prevIndexRef.current = nextIndex;
              setActiveIndex(nextIndex);
            }
          }
        });
      },
      {
        rootMargin: "-45% 0px -45% 0px",
        // threshold: 0,
      }
    );

    itemRefs.current.forEach((el) => el && observer.observe(el));
    return () => observer.disconnect();
  }, []);

  const total = principles.length;
  const segmentHeight = 100 / total;
  const segmentTop = activeIndex * segmentHeight;

  return (
    <div className='text-white w-screen'>
      <section className="flex flex-col justify-center items-center gap-5 w-screen py-50 relative">
        <div className="absolute -z-1 w-full h-full">
          <img
            src="/dynasty/heroImg.png"
            alt="hero"
            className="w-full h-full will-change-transform object-center object-cover"
            style={{ transformOrigin: "center center" }}
          />
        </div>
        <Reveal variants={slideInFromTop(0.2)}>
          <h1 className='w-screen lg:w-[720px] lg:text-center text-[26px] lg:text-[36px] px-10 lg:px-0'>
            Vedara selects <span className='italic font-semibold'>creations</span> that hold within them the <span className="italic font-semibold">architecture</span> of a civilization yet to emerge
          </h1>
        </Reveal>

        <Reveal variants={slideInFromTop(0.2)}>
        <p className='w-screen lg:w-[579px] lg:text-center text-[16px] lg:text-[18px] px-10 lg:px-0 font-light'>
          Every creation is chosen for its potential to outlive markets and eras. Vedara Dynasty is an ecosystem where only the rarest concepts earn their place.
        </p>
        </Reveal>

        <div className="flex flex-col lg:flex-row justify-center items-center mt-10 gap-12 text-[16px] lg:text-[20px]">
          <Reveal variants={slideInFromLeft(0.2)}>
            <div className='flex lg:flex-col justify-between items-center gap-6 w-100 lg:w-[345px] p-4 lg:py-14 lg:px-8 rounded-2xl bg-[#9D8C7D]/15 backdrop-blur-lg'>
              <p className='w-[191px] lg:w-[284px] font-medium text-[16px] lg:text-[22px]'><span className='font-bold'>For Visionaries</span> - Present Your Masterwork</p>
              <button className='w-43 lg:w-60 backdrop-blur-2xl rounded-full text-[14px] lg:text-[18px] px-7 py-3 lg:px-12'><h3 className='lg:italic font-extralight'>Enter the Threshold</h3></button>
            </div>
          </Reveal>

          <Reveal variants={slideInFromRight(0.2)}>
            <div className='flex lg:flex-col justify-between items-center gap-6 w-100 lg:w-[345px] bg-[#9D8C7D]/15 p-4 lg:py-14 lg:px-8 rounded-2xl backdrop-blur-lg'>
              <p className='w-[191px] lg:w-[284px] font-medium text-[16px] lg:text-[22px]'><span className="font-bold">For Collectors</span> - Discover the Future Classics</p>
              <button className='w-43 lg:w-60 backdrop-blur-2xl rounded-full text-[14px] lg:text-[18px] px-7 py-3 lg:px-12'> <h3 className='lg:italic font-extralight'>Enter the Threshold</h3></button>
            </div>
          </Reveal>
        </div>

      </section>

      <section className="flex flex-col justify-center items-center gap-5 w-screen py-35 relative bg-primary text-black">
        <div className="flex flex-col lg:flex-row lg:justify-between lg:w-screen gap-y-6 px-15 lg:px-23">
          <Reveal variants={slideInFromLeft(0.2)}>
            <div className="flex flex-col gap-y-8">
              <p className="uppercase text-[24px] lg:text-[36px] w-[300px] md:w-[445px] lg:w-[674px] leading-snug">
                A Private Ecosystem Engineered for Excellence
              </p>
              <p className="w-70 md:w-[335px] lg:w-116 text-[14px] lg:text-[16px]">
                Vedara Dynasty operates through a protected, invitation-only infrastructure designed for absolute trust and emotional resonance.
              </p>
            </div>
          </Reveal>
          <Reveal variants={slideInFromRight(0.2)}>
            <p className="lg:text-right lg:w-[335px]">
              Every project is vetted for meaning, resonance, and a future measured in decades.
            </p>
          </Reveal>
        </div>


        <Reveal variants={slideInFromBottom(0.2)}>
          <div className=" min-h-screen mt-21 lg:mt-34 lg:py-24">
            {/* Header */}
            <p className="w-[300px] md:w-[92px] lg:w-170 mx-auto text-[20px] lg:text-[34px] leading-tight mb-24">
              The Dynasty Is Governed By Principles
              <br />
              That Protect Purity, Rarity, And Meaning.
            </p>

            <div className="grid grid-cols-2">
              {/* LEFT – Scrollable principles */}
              <div className="relative w-screen lg:w-127 lg:h-[70vh] overflow-y-scroll">
                <div className="absolute left-10 lg:left-0 top-0 h-full w-0.5 bg-black/10">
                  <div
                    className="absolute left-0 w-full bg-black transition-all duration-500 ease-out"
                    style={{
                      height: `${segmentHeight}%`,
                      top: `${segmentTop}%`,
                    }}
                  />
                </div>

                <div className="flex flex-col gap-28 pl-10">
                  {principles.map((item, i) => (
                    <div
                      key={item.id}
                      ref={(el) => (itemRefs.current[i] = el)}
                      data-index={i}
                      className="flex flex-col lg:flex-row gap-6 items-start pl-10"
                    >
                      <div className="flex gap-4">
                        <span
                          className={`text-sm transition-opacity duration-300 ${
                            activeIndex === i ? "text-black" : "text-black/30"
                          }`}
                        >
                          ({item.id})
                        </span>

                        <p
                          className={` text-[16px] leading-relaxed transition-opacity duration-300 ${
                            activeIndex === i ? "opacity-100" : "opacity-30"
                          }`}
                        >
                          {item.title}
                        </p>
                      </div>

                      <div
                        className={`lg:hidden overflow-hidden transition-all duration-500 ease-out ${
                          activeIndex === i
                            ? "max-h-60 opacity-100"
                            : "max-h-0 opacity-0"
                        }`}
                      >
                        <div className="relative w-full h-[220px] rounded-xl overflow-hidden">
                          <img
                            src={item.image}
                            alt="principle image"
                            className="w-[300px] object-cover"
                          />
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>


              <div className="hidden lg:block sticky top-20 h-fit">
                <div className="relative w-[435px] h-[420px] rounded-xl overflow-hidden">
                  <AnimatePresence>
                    <motion.div
                      key={principles[activeIndex].image}
                      className="absolute inset-0"
                      initial={{ y: direction === 1 ? "100%" : "-100%", }}
                      animate={{ y: "0%" }}
                      exit={{ y: direction === 1 ? "-20%" : "20%", }}
                      transition={{
                        duration: 1.5,
                        ease: [0.22, 1, 0.36, 1],
                      }}
                    >
                      <Image
                      key={principles[activeIndex].id}
                        src={principles[activeIndex].image}
                        alt="Dynasty principle"
                        fill
                        className="object-cover transition-opacity duration-500"
                        priority
                      />
                    </motion.div>
                  </AnimatePresence>
                </div>
              </div>
            </div>
          </div>
        </Reveal>
      </section>

      <section className='flex flex-col justify-center py-35 gap-7 lg:gap-11 pl-8 md:pl-19 lg:pl-37'>
        <Reveal variants={slideInFromTop(0.2)}>
          <p className="uppercase w-[300px] md:w-100 lg:w-202 text-[20px] md:text-[24px] lg:text-[36px] pl-8 md:pl-19 lg:pl-37 leading-tight">
            Where Brands Become Cultural Contributors, Not Market Participants
          </p>
        </Reveal>
        <Reveal variants={slideInFromTop(0.2)}>
          <p className="lg:w-122 text-[14px] lg:text-[16px] pl-8 md:pl-19 lg:pl-37">
            Vedara shapes identities that influence categories, shift language, and imprint on collective memory.
          </p>
        </Reveal>
        <div className="flex flex-col lg:flex-row justify-center items-center gap-12">
          <Reveal variants={slideInFromLeft(0.2)}>
            <div className="bg-primary flex flex-col gap-6 w-[300px] md:w-120 lg:w-84 rounded-2xl p-5">
              <img src="/dynasty/img2.png" alt="img2" className="relative w-full object-cover" />
              <p className="text-right">
                Entrepreneurs struggle to access serious, verified, values-aligned investors.
              </p>
            </div>
          </Reveal>
          
          <Reveal variants={slideInFromBottom(0.2)}>
            <div className="bg-secondary flex flex-col gap-21 lg:gap-44 w-[300px] md:w-120 lg:w-84 rounded-2xl p-5">
              <img src="/dynasty/quoteIcon.svg" alt="img2" className="relative w-13 h-9" />
              <p className="">
                Investors face low-quality deal flow + overwhelming noise
              </p>
            </div>
          </Reveal>
          
          <Reveal variants={slideInFromRight(0.2)}>
            <div className="bg-primary flex flex-col gap-6 w-[300px] md:w-120 lg:w-84 rounded-2xl p-5">
              <div className="flex gap-6">
                <img src="/dynasty/img3.png" alt="img3" className="relative object-cover rounded-xl" />
                <div className="flex flex-col gap-4">
                  <p>01</p>
                  <p>Platforms prioritise volume over true curation.</p>
                </div>
              </div>
              <div className="flex gap-6">
                <img src="/dynasty/img4.png" alt="img4" className="relative object-cover rounded-xl" />
                <div className="flex flex-col gap-4">
                  <p>02</p>
                  <p>Platforms prioritise volume over true curation.</p>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <section ref={imagesRef} className='relative h-[700vh]'>
        <div className="sticky top-0 flex flex-col justify-center items-center gap-5 lg:gap-37 w-screen h-screen py-35">
          <div className="absolute -z-1 w-full h-full">
            <img
              src="/dynasty/img5.png"
              alt="img5"
              className="w-full h-full will-change-transform object-top object-cover"
              style={{ transformOrigin: "center center" }}
            />
          </div>
          <Reveal variants={slideInFromTop(0.2)}>
            <p className="relative -top-60 text-center uppercase text-[24px] lg:text-[36px] w-[300px] md:w-[383px] lg:w-[768px]">
              A Private Ecosystem Engineered for Enduring Value
            </p>
          </Reveal>
          
          <AnimatePresence mode='wait'>
            <motion.div
              key={imageIndex}
              initial={{ y: 80, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -80, opacity: 0 }}
              transition={{
                duration: 0.6,
                ease: [0.25, 0.8, 0.25, 1],
              }}
              className="absolute flex flex-col justify-center items-center gap-5 lg:gap-37"
            >

              <div className="flex justify-center items-center gap-4 lg:gap-10">
                {imageText[imageIndex].text1 &&(
                  <h2 className={`${imageText[imageIndex].text1.width} lg:text-[28px]`}><span className={`${imageIndex===5?`font-semibold italic`:``}`}>{imageText[imageIndex].text1.txtLeft}</span> <span className={`${imageIndex===1 || imageIndex===2 ?`font-semibold italic`:``}`}>{imageText[imageIndex].text1.txtRight}</span></h2>
                )}
                <img src={imageText[imageIndex].image} alt="imageText" className="w-35 lg:w-53" />
                {imageText[imageIndex].text2 && (
                  <h2 className={`${imageText[imageIndex].text2.width} lg:text-[28px]`}><span className={`${imageIndex!=1 ?`font-semibold italic`:``}`}>{imageText[imageIndex].text2.txtLeft}</span> <span className={`${imageIndex===1 ?`font-semibold italic`:``}`}>{imageText[imageIndex].text2.txtRight}</span></h2>)}
              </div>
            </motion.div>
          </AnimatePresence>

        </div>
      </section>

      <section className="flex flex-col text-white w-screen lg:h-[200vh]">
        <div className="lg:sticky lg:top-0 flex flex-col lg:flex-row lg:justify-between lg:items-center w-screen">
          <div className="flex flex-col gap-3 w-screen lg:w-[502px] px-10 lg:pl-27 py-21 lg:pb-39">
            <Reveal variants={slideInFromLeft(0.2)}>
              <p className="w-[300px] md:w-[373px] lg:w-[509px] text-[24px] lg:text-[36px] ">
                For Investors Seeking Meaningful Ownership
              </p>
            </Reveal>
            <Reveal variants={slideInFromLeft(0.2)}>
              <p className='w-70 md:[323px] lg:w-121 text-[14px] lg:text-[16px]'>
                Ownership, at this level, is not transactional, it is civilizational. Vedara Dynasty offers access to rare, heritage-aligned assets whose value is measured in architectural truth. 
              </p>
            </Reveal>
            <Reveal variants={slideInFromLeft(0.2)}>
              <p className="w-70 md:[323px] lg:w-121 text-[14px] lg:text-[16px]">
                Every opportunity is presented through a lens of long-term stewardship. Here, investment is something that carries your principles forward into time.
              </p>
            </Reveal>
          </div>
  
          <div className="relative w-screen lg:w-180 h-screen overflow-hidden">
            <AnimatePresence>
              {!openForm1 ? (
                <motion.div
                  key="image"
                  initial={{ x: "100%" }}
                  animate={{ x: 0 }}
                  exit={{ x: "100%" }}
                  transition={{ duration: 2.5, ease: [0.22, 1, 0.36, 1] }}
                  className='flex w-full h-full items-center justify-center'
                >
                  <button
                    onClick={() => setOpenForm1(true)}
                    className="flex justify-between z-1 py-6 px-6 text-center rounded-full backdrop-blur-xl"
                  >
                    Explore Curated Opportunities
                    <ArrowForwardIosOutlinedIcon/>
                  </button>
                  <img
                    src="/dynasty/img13.png"
                    className="absolute inset-0 w-full h-full object-cover"
                  />
                </motion.div>
              ) : (
                <motion.div
                  key="form"
                  ref={formRef1}
                  className="absolute inset-0 bg-[#B9B2A3] flex items-center justify-center px-10"
                  initial={{ x: "100%" }}
                  animate={{ x: 0 }}
                  exit={{ x: "100%" }}
                  transition={{ duration: 2.5, ease: [0.22, 1, 0.36, 1] }}
                >
                  <InvestorForm />
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>

        <div className="flex flex-col lg:flex-row-reverse lg:justify-between w-screen relative z-2 bg-black">
          <div className="flex flex-col gap-3 w-screen lg:w-[470px] px-10 lg:px-0 py-21 lg:pt-39 lg:mr-40">
            <Reveal variants={slideInFromRight(0.2)}>
              <p className="w-[300px] md:w-[373px] lg:w-[509px] text-[24px] lg:text-[36px] ">
                For Founders Seeking a Worthy Circle
              </p>
            </Reveal> 

            <Reveal variants={slideInFromRight(0.2)}>
              <p className='w-70 md:[323px] lg:w-121 text-[14px] lg:text-[16px]'>
                Visionaries building places worthy of reverence deserve a sanctuary of aligned capital. Vedara Dynasty elevates founders who create with intention and architectural authenticity.
              </p>
            </Reveal>

            <Reveal variants={slideInFromRight(0.2)}>
              <p className="w-70 md:[323px] lg:w-121 text-[14px] lg:text-[16px]">
                Your project is not listed; it is honoured, refined, and positioned to meet investors who value soul, longevity, and significance.
              </p>
            </Reveal>
          </div>
        
          <div className="relative w-screen lg:w-180 h-screen overflow-hidden">
            <AnimatePresence>
              {!openForm2 ? (
                <motion.div
                  key="image"
                  initial={{ x: "-100%" }}
                  animate={{ x: 0 }}
                  exit={{ x: "-100%" }}
                  transition={{ duration: 2.5, ease: [0.22, 1, 0.36, 1] }}
                  className='flex w-full h-full items-center justify-center'
                >
                  <button
                    onClick={() => setOpenForm2(true)}
                    className="z-1 py-6 px-15 text-center rounded-full backdrop-blur-xl"
                  >
                    Submit Your Vision
                  </button>
                  <img
                    src="/dynasty/img14.png"
                    className="absolute inset-0 w-full h-full object-cover"
                  />
                </motion.div>
              ) : (
                <motion.div
                  key="form"
                  ref={formRef2}
                  className="absolute inset-0 bg-[#B9B2A3] flex items-center justify-center px-10"
                  initial={{ x: "-100%" }}
                  animate={{ x: 0 }}
                  exit={{ x: "-100%" }}
                  transition={{ duration: 2.5, ease: [0.22, 1, 0.36, 1] }}
                >
                  <VisionForm />
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </section>

      <section ref={scrollRef} className="relative flex flex-col justify-center w-screen h-screen items-center gap-x-12 py-34 lg:px-20 lg:py-41 text-black bg-primary">
        <div className=" hidden lg:flex justify-between gap-26 lg:gap-37 lg:py-10 px-[5vw] lg:border-t lg:border-b lg:border-[#2A2927] w-full">
          <Reveal variants={slideInFromLeft(0.2)}>
            <p className="uppercase md:w-[373px] text-center lg:text-left lg:text-[36px]">
              Investment Circle Shaped for the Next Century
            </p>
          </Reveal>

          <div className="relative flex flex-col justify-center w-[441px] font-light text-[22px] gap-y-20">
            {investment.map((text,idx)=> (
              <Reveal key={idx} variants={slideInFromRight(0.2)}>
              <div className="flex flex-col gap-6">
                <p className="leading-tight">
                  {text.text1}
                </p>
              
                {text.text2 && (
                  <button className="uppercase text-[14px] border-b w-fit">
                    {text.text2}
                  </button>
                )}
              </div>
            </Reveal>))}
          </div>
        </div>
        <Reveal variants={slideInFromTop(0.2)}>
          <p className="lg:hidden uppercase w-[300px] md:w-[373px] text-center text-[24px] pb-[5vh]">
            Investment Circle Shaped for the Next Century
          </p>
        </Reveal>

        <Reveal variants={slideInFromLeft(0.2)}>
          <p className="lg:hidden py-[5vh] md:py-15 px-[5vw] md:px-20 border-t border-b border-[#2A2927] w-[300px] md:w-[500px] text-[14px]">
            Each project is screened for depth, heritage value, design philosophy, and the potential to become a generational asset, not a market-dependent investment.
          </p>
        </Reveal>

        <Reveal variants={slideInFromRight(0.2)}>
          <p className="lg:hidden py-[5vh] px-[5vw] md:py-15 md:px-20 border-b border-[#2A2927] w-[300px] md:w-[500px] text-[14px]">
            Vedara limits entries to those that embody excellence. Every asset undergoes rigorous assessment, ensuring investors see only what is worthy of their time and capital.
          </p>
        </Reveal>
        
        <Reveal variants={slideInFromLeft(0.2)}>
          <p className="lg:hidden py-[5vh] px-[5vw] md:py-15 md:px-20 w-[300px] md:w-[500px] text-[14px]">
            Projects are chosen for longevity, environmental stewardship, and their ability to become markers of identity and inheritance for decades to come.
          </p>
        </Reveal>
        <Reveal variants={slideInFromRight(0.2)}>
          <p className="lg:hidden flex w-[300px] md:w-[500px] px-[5vw] md:px-20">
            <span className='w-34 border-b border-black pb-1'>Request Invitation</span>
          </p>
        </Reveal>
      </section>


      <section className="flex flex-col justify-center items-start gap-12 lg:gap-18 pl-10 lg:pl-65 py-20 lg:pt-27 lg:pb-55">
        <Reveal variants={slideInFromTop(0.2)}>
          <p className="uppercase w-[300px] md:w-90 lg:w-125 lg:text-[36px]"> 
            Confidentiality & Access Protocol
          </p>
        </Reveal>

        <div className="flex flex-col justify-center lg:flex-row-reverse lg:items-center gap-12 lg:gap-30">
          <Reveal variants={slideInFromRight(0.2)}>
            <div className="flex flex-col gap-12 lg:gap-3 text-[16px] lg:text-[22px]">
              <p className="w-60 lg:w-75 lg:mb-17">
                Vedara Dynasty Operates Within a Closed Circle.
              </p>
              <p>(01)</p>
              <p className="w-84 font-extralight text-[12px] lg:text-[16px]">
                All dossiers, communications, and project materials are safeguarded under strict mutual NDAs—preserving confidentiality of every interaction.
              </p>

              <p>(02)</p>

              <p className="w-84 font-extralight text-[12px] lg:text-[16px]">
                Access is granted exclusively to verified investors, each individually cleared before receiving invitations to alignment sessions.
              </p>
            </div>
          </Reveal>
          
          <Reveal variants={slideInFromLeft(0.2)}>
            <img src="/dynasty/img15.png" alt="img15" className="w-[300px] md:w-115" />
          </Reveal>
        </div>
      </section>

      <Footer/>
    </div>
  )
}

export default page