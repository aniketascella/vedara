"use client";
import { useRef, useState, useEffect } from "react";
import { motion, AnimatePresence, useScroll, easeInOut } from "framer-motion";
import WhatWeDo from "./WhatWeDo";
import { CARDS, SLIDES } from "./data";
import ArrowForwardIosOutlinedIcon from "@mui/icons-material/ArrowForwardIosOutlined";
import Reveal from "@/utils/Reveal";
import {
  slideInFromBottom,
  slideInFromTop,
  slideInFromLeft,
  slideInFromRight,
} from "@/utils/motion";
import Footer from "@/components/Footer";
import ArrowBackIosNewOutlined from "@mui/icons-material/ArrowBackIosNewOutlined";


const page = () => {
  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start center", "end end"],
  });

  const [index, setIndex] = useState(0);

  useEffect(() => {
    const unsubscribe = scrollYProgress.on("change", (v) => {
      const next = Math.min(SLIDES.length - 1, Math.floor(v * SLIDES.length));
      setIndex(next);
    });
    return unsubscribe;
  }, [scrollYProgress]);

  const variants = {
    enter: (direction) => ({
      x: direction > 0 ? 80 : -80,
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
    },
    exit: (direction) => ({
      x: direction > 0 ? -80 : 80,
      opacity: 0,
    }),
  };

  const [[cardIdx, direction], setCardIdx] = useState([0, 0]);

  const paginate = (dir) => {
    setCardIdx([
      (cardIdx + dir + CARDS.length) % CARDS.length,
      dir,
    ]);
  };

  const card = CARDS[cardIdx];

  return (
    <div className="text-white relative w-screen">
      <section className="w-screen h-screen bg-[url('/atelier/heroImg.png')] bg-cover bg-center flex flex-col justify-center items-start gap-y-15">
        <Reveal variants={slideInFromRight(0.2)}>
          <div className="lg:hidden flex justify-between w-screen px-10 text-[16px]">
            <p className="text-[18px]">Toronto</p>
            <p className="">info@vedaracollective.ca</p>
          </div>
        </Reveal>
        <div className="flex w-screen justify-between items-center lg:items-start px-10 lg:px-30">
          <Reveal variants={slideInFromLeft(0.2)}>
            <h3 className="lg:w-[770px] text-[24px] lg:text-[40px] font-light italic">
              A cultural studio for the ultra-conscious, those who understand
              that a brand is a contribution to the ongoing narrative of human
              excellence.
            </h3>
          </Reveal>
          <Reveal variants={slideInFromRight(0.2)}>
            <div className="hidden lg:flex justify-between gap-x-5 text-[16px]">
              <p className="">info@vedaracollective.ca</p>
              <p className="uppercase">Toronto</p>
            </div>
          </Reveal>
        </div>
        <Reveal variants={slideInFromLeft(0.2)}>
          <button className="flex justify-between items-center rounded-full backdrop-blur-[10px] py-4 pl-6 pr-5 text-[14px] lg:text-[16px] ml-10 lg:ml-30">
            <p>Enter the World of Vedara</p>
            <ArrowForwardIosOutlinedIcon />
          </button>
        </Reveal>
      </section>

      <WhatWeDo />

      <section className="relative flex flex-col justify-center items-center lg:items-end">
        {/* SCROLL DRIVER */}
        <div ref={sectionRef} className="relative h-[300vh] w-screen">
          {/* STICKY WRAPPER */}
          <div className="sticky top-0 pt-10 w-screen min-h-screen lg:h-screen flex flex-col justify-center items-center lg:items-end gap-y-6 lg:gap-y-16">
            {/* HEADER — NOW STICKY */}
            <div className="flex flex-col lg:flex-row w-screen gap-y-4 pl-10 lg:h-20 lg:pl-24 lg:pr-20 justify-between">
              <Reveal variants={slideInFromBottom(0.2)}>
                <p className="hidden lg:flex italic text-[16px]">Vedara</p>
              </Reveal>

              <Reveal variants={slideInFromTop(0.2)}>
                <p className="uppercase text-[18px] w-[345px] lg:text-[32px] lg:w-[459px]">Who Vedara Is Built For</p>
              </Reveal>

              <Reveal variants={slideInFromRight(0.2)}>
                <p className="lg:text-right w-[370px]">
                  Vedara works with a rare class of founders and institutions,
                  those building not for seasons, but for generations.
                </p>
              </Reveal>
            </div>

            {/* CARDS */}
            <div className="flex flex-col lg:mr-20 gap-y-4 justify-center items-end">
              <div className="flex justify-between w-[385px] lg:w-[952px]">
                <p>Ideal Clients</p>
                <div className="flex gap-4">
                  <p className={index === 0 ? "opacity-100" : "opacity-20"}>
                    01
                  </p>
                  <p className={index === 1 ? "opacity-100" : "opacity-20"}>
                    02
                  </p>
                  <p className={index === 2 ? "opacity-100" : "opacity-20"}>
                    03
                  </p>
                </div>
              </div>

              <div className="w-[385px] lg:w-[952px] grid grid-cols-1 lg:grid-cols-2 lg:gap-10 bg-primary text-black">
                {/* TEXT */}
                <div className="flex ml-10 items-center">
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: -24 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: 24 }}
                      transition={{ duration: 0.8, ease: "easeOut" }}
                      className="flex flex-col justify-between gap-y-4 h-full py-15"
                    >
                      <div className="flex justify-between w-full">
                        <p className="text-[16px] lg:text-3xl w-[200px] lg:w-[305px] leading-snug">
                          {SLIDES[index].title}
                        </p>
                        <span className="lg:hidden text-2xl">{SLIDES[index].id}</span>
                      </div>
                      <p className="text-[12px] lg:text-sm w-[271px] lg:w-[331px] opacity-80">
                        {SLIDES[index].text}
                      </p>
                      <span className="hidden lg:block text-4xl">{SLIDES[index].id}</span>
                    </motion.div>
                  </AnimatePresence>
                </div>

                {/* IMAGE */}
                <div className="relative h-[300px] lg:h-[420px] overflow-hidden">
                  <AnimatePresence>
                    <motion.img
                      key={index}
                      src={SLIDES[index].image}
                      alt="slide"
                      className="absolute inset-0 w-full h-full object-cover object-center"
                      initial={{ x: "100%", zIndex: 1 }}
                      animate={{ x: "0%", zIndex: 1 }}
                      exit={{ x: "100%", zIndex: 1 }}
                      transition={{
                        duration: 2,
                        ease: [0.4, 0, 0.2, 1],
                      }}
                    />
                  </AnimatePresence>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-primary text-black py-30 px-6 lg:px-10 flex flex-col justify-center lg:items-center gap-y-10">

        <div className="flex flex-col-reverse lg:flex-row lg:items-center gap-x-23 gap-y-4 mb-10">
          <div className="lg:hidden text-right flex justify-end font-light w-full">
            <p className="w-[343px]">Your brand deserves to become a reference point, not another
            participant.</p>
          </div>
          <Reveal variants={slideInFromLeft(0.2)}>
            <img src="/atelier/img1.png" alt="img1" className="flex justify-self-end h-[252px] lg:h-full lg:w-full w-[320px] lg:max-w-none object-cover object-top" />
          </Reveal>
          <div className="flex flex-col gap-4 lg:w-[650px]">
            <Reveal variants={slideInFromTop(0.2)}>
              <h3 className="text-[16px] lg:text-[22px] italic">Our Philosophy</h3>
            </Reveal>
            <Reveal variants={slideInFromTop(0.2)}>
              <p className="text-[28px] lg:text-[40px] lg:w-[605px] leading-tight">
                Excellence Is Inevitable When You Build With Intention
              </p>
            </Reveal>
            <Reveal variants={slideInFromRight(0.2)}>
              <p className="text-[12px] lg:text-[16px] lg:w-[430px] text-right lg:text-left">
                We partner with the few who understand that true luxury. While
                others seek attention, we build authority!
              </p>
            </Reveal>
            <Reveal variants={slideInFromBottom(0.2)}>
              <img src="/atelier/img2.png" alt="img2" className="w-full max-w-[320px] lg:my-10 lg:max-w-none" />
            </Reveal>
            <Reveal variants={slideInFromRight(0.2)}>
              <p className="hidden text-right lg:flex justify-self-end font-semibold lg:w-54">
                Your brand deserves to become a reference point, not another
                participant.
              </p>
            </Reveal>
          </div>
        </div>

        <Reveal variants={slideInFromBottom(0.2)}>
          <p className="lg:text-center text-[16px] lg:w-[526px]">
            Every brand we shape begins as an idea, then evolves into a Legacy a
            narrative powerful enough to influence culture, shape desire, <br />and
            endure long after its originator has stepped aside.
          </p>
        </Reveal>
        <Reveal variants={slideInFromBottom(0.2)}>
          <p className="border-b border-black pb-1 w-34 text-[16px]">Share Your Vision</p>
        </Reveal>
      </section>

      <section className="flex flex-col justify-center items-center gap-y-45 lg:gap-y-68 py-30">
        <Reveal variants={slideInFromTop(0.2)}>
          <div className="flex flex-col lg:text-center gap-7">
            <h1 className="text-[16px] lg:text-[22px] italic">Our Approach</h1>
            <p className="w-99 text-[18px] lg:w-160 lg:text-[28px]">
              We create a complete universe identity, narrative, digital
              presence, and experience. <br /> So your story is not just seen, but
              felt, remembered, and passed down.
            </p>
          </div>
        </Reveal>

        <div className="flex flex-row justify-between gap-x-4 lg:gap-x-20">
          <h1 className="text-[22px] font-extralight">
            <Reveal variants={slideInFromLeft(0.2)}>
              [01]
            </Reveal>
          </h1>
          <Reveal variants={slideInFromLeft(0.2)}>
            <div className="flex flex-col gap-y-7 lg:gap-y-11">
              <p className="uppercase text-[20px] lg:text-[30px] ml-10 text-right w-[204px] lg:w-95 ">the listening</p>
              <Reveal variants={slideInFromBottom(0.2)}>
                <img
                  src="/atelier/img3.png"
                  alt="img3"
                  className="lg:hidden relative"
                />
              </Reveal>
              <p className="w-80 pl-20 md:pl-40 lg:pl-0 lg:w-[318px] text-[12px] lg:text-[16px] lg:font-light opacity-80">
                <span className="text-[14px] lg:text-[22px] lg:font-medium">We begin by absorbing values, histories, ambitions,
                contradictions.</span><br /> Not just what is said, but what is meant.That’s
                when clarity begins to take form.
              </p>
            </div>
          </Reveal>
          <Reveal variants={slideInFromBottom(0.2)}>
            <img
              src="/atelier/img3.png"
              alt="img3"
              className="hidden lg:block bottom-24 relative"
            />
          </Reveal>
        </div>

        <div className="flex lg:flex-row-reverse gap-x-4 lg:gap-x-25">
          <Reveal variants={slideInFromRight(0.2)}>
            <h1 className="text-[22px] font-extralight">[02]</h1>
          </Reveal>
          <Reveal variants={slideInFromRight(0.2)}>
            <div className="flex flex-col gap-y-7 lg:gap-11">
              <p className="uppercase text-[20px] lg:text-[30px] text-right w-56 lg:w-105">the revelation</p>
              <Reveal variants={slideInFromBottom(0.2)}>
                <img
                  src="/atelier/img4.png"
                  alt="img4"
                  className="lg:hidden relative left-10 md:left-40"
                />
              </Reveal>
              <p className="w-60 lg:w-[430px] lg:pl-21 text-[12px] lg:text-[16px] lg:font-light opacity-80">
                <span className="text-[14px] lg:text-[22px] lg:font-medium">This is the moment clarity emerges.</span><br />Your cultural identity,
                intention, and emotional promise is understood.We focus on the
                essence that sets your brand apart from the world.
              </p>
            </div>
          </Reveal>
          <Reveal variants={slideInFromTop(0.2)}>
            <img
              src="/atelier/img4.png"
              alt="img4"
              className="hidden lg:block top-24 relative"
            />
          </Reveal>
        </div>

        <div className="flex flex-row justify-between gap-x-0 lg:gap-x-25 w-screen lg:w-auto">
          <h1 className="text-[22px] font-extralight">
            <Reveal variants={slideInFromLeft(0.2)}>
              [03]
            </Reveal>
          </h1>
          <Reveal variants={slideInFromLeft(0.2)}>
            <div className="flex flex-col gap-y-7 lg:gap-11">
              <p className="uppercase text-[20px] lg:text-[30px]">The Design of Meaning</p>
              <Reveal variants={slideInFromBottom(0.2)}>
                <img
                  src="/atelier/img5.png"
                  alt="img5"
                  className="lg:hidden relative"
                />
              </Reveal>
              <p className="w-80 pl-20 md:pl-40 lg:pl-0 lg:w-[318px] text-[12px] lg:text-[16px] lg:font-light opacity-80">
                <span className="text-[14px] lg:text-[22px] lg:font-medium">Meaning becomes architecture.</span><br /> We translate philosophy into strategy, aesthetics, and digital expression.Every element, colour, shape, word, interaction becomes a vessel of significance.
              </p>
            </div>
          </Reveal>
          <Reveal variants={slideInFromBottom(0.2)}>
            <img
              src="/atelier/img5.png"
              alt="img5"
              className="hidden lg:block bottom-24 relative"
            />
          </Reveal>
        </div>

        <div className="flex lg:flex-row-reverse gap-x-4 lg:gap-x-25">
          <Reveal variants={slideInFromRight(0.2)}>
            <h1 className="text-[22px] font-extralight">[04]</h1>
          </Reveal>
          <Reveal variants={slideInFromRight(0.2)}>
            <div className="flex flex-col gap-y-7 lg:gap-11">
              <p className="uppercase text-[20px] lg:text-[30px] lg:w-105">The Embodiment</p>
              <Reveal variants={slideInFromBottom(0.2)}>
                <img
                  src="/atelier/img3.png"
                  alt="img3"
                  className="lg:hidden relative md:left-48"
                />
              </Reveal>
              <p className="w-60 lg:w-[466px] text-[12px] lg:text-[16px] lg:font-light lg:pl-23 opacity-80">
                <span className="text-[14px] font-medium lg:text-[22px]">The brand takes form.</span><br />Identity systems, digital design, messaging, rituals, and experiences become aligned into a singular, unmistakable presence.
              </p>
            </div>
          </Reveal>
          <Reveal variants={slideInFromTop(0.2)}>
            <img
              src="/atelier/img3.png"
              alt="img3"
              className="hidden lg:block top-24 relative"
            />
          </Reveal>
        </div>

        <div className="flex flex-row gap-x-4 lg:gap-x-25">
          <Reveal variants={slideInFromLeft(0.2)}>
            <h1 className="text-[22px] font-extralight">[05]</h1>
          </Reveal>
          <Reveal variants={slideInFromLeft(0.2)}>
            <div className="flex flex-col gap-y-7 lg:gap-11">
              <p className="uppercase text-[20px] lg:text-[30px] lg:text-right lg:w-105">The Continuum</p>
              <Reveal variants={slideInFromBottom(0.2)}>
                <img
                  src="/atelier/img6.png"
                  alt="img6"
                  className="lg:hidden relative"
                />
              </Reveal>
              <p className="w-80 md:w-100 pl-20 md:pl-40 lg:pl-0 lg:w-[318px] text-[12px] lg:text-[16px] lg:font-light opacity-80">
                <span className="text-[14px] lg:text-[22px] lg:font-medium">Legacy is a marathon,<br /> not a launch.</span><br /> We refine, evolve, and guide, ensuring the brand remains alive, relevant, and generationally enduring.
              </p>
            </div>
          </Reveal>
          <Reveal variants={slideInFromBottom(0.2)}>
            <img
              src="/atelier/img6.png"
              alt="img6"
              className="hidden lg:block bottom-24 relative"
            />
          </Reveal>
        </div>
      </section>

      <section className="flex flex-col gap-y-11 lg:flex-row w-screen bg-primary text-black">
        <div className="flex flex-col w-full h-[40vh] lg:w-1/2 lg:h-full px-[6vw] lg:px-23 pt-12 lg:pt-23 gap-y-8">
          <Reveal variants={slideInFromTop(0.2)}>
            <h2 className="italic text-[18px] lg:text-[22px]">
              Featured Projects
            </h2>
          </Reveal>

          <Reveal variants={slideInFromLeft(0.2)}>
            <p className="font-light text-[18px] leading-snug lg:text-[30px] lg:leading-tight max-w-[520px]">
              Our portfolio is a curated anthology of ideas brought to life,
              from heritage-rooted brands to future-thinking digital ecosystems.
              Every creation reflects our devotion to detail, narrative, and
              timeless aesthetic discipline.
            </p>
          </Reveal>

          <Reveal variants={slideInFromBottom(0.2)}>
            <p className="border-b border-black pb-1 w-fit lg:mt-65 text-[14px] lg:text-[16px]">
              Explore All Projects
            </p>
          </Reveal>
        </div>

        <div className="relative w-full lg:w-1/2  lg:h-screen overflow-hidden">
          <Reveal variants={slideInFromRight(0.2)}>
            <img
              src="/atelier/img7.png"
              alt="Featured project"
              className="w-full h-full object-cover object-right"
            />

            <div className="absolute flex justify-between items-center bottom-0 backdrop-blur-[15px] w-full py-9 px-11 text-white">
              <div className="flex flex-col">
              <h3 className="text-[18px] lg:text-[20px] font-medium">
                Selhaya World’s First Luxury Abaya Maison
              </h3>
              <p className="text-[14px] mt-2 opacity-90 w-[320px] lg:w-[474px]">
                Selhaya entered Vedara’s closed-circle ecosystem to evolve
                from a promising luxury brand into an unforgettable maison.
              </p>
              </div>
              <ArrowForwardIosOutlinedIcon/>
            </div>
          </Reveal>
        </div>
      </section>


      <section className="flex flex-col justify-center items-center gap-y-25 pt-30 pb-60">
        <Reveal variants={slideInFromTop(0.2)}>
          <div className="flex flex-col justify-center items-center text-center gap-y-7">
            <p className="text-[22px]">Blogs</p>
            <p className="w-100 lg:w-150 text-[28px]">
              Where perspective becomes power, and knowledge becomes a creative
              asset.
            </p>
            <p className="w-25 border-b border-white pb-1">Explore</p>
          </div>
        </Reveal>

        <div className="relative flex items-center justify-center lg:hidden">
          {/* LEFT ARROW */}
          <button
            onClick={() => paginate(-1)}
            className="absolute -left-10 text-white opacity-60 hover:opacity-100 transition"
          >
            <ArrowBackIosNewOutlined/>
          </button>

          {/* CARD */}
          <div className="relative w-[322px] h-[566px] overflow-hidden">
            <AnimatePresence custom={direction} mode="wait">
              <motion.div
                key={cardIdx}
                custom={direction}
                variants={variants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{
                  duration: 0.6,
                  ease: [0.2, 0.9, 0.2, 1],
                }}
                className="absolute inset-0"
              >
                <div className="flex flex-col w-full h-full p-10 gap-y-13 relative text-white">
                  {/* Background Image */}
                  <img
                    src={card.image}
                    alt=""
                    className="absolute inset-0 w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-black/30" />

                  {/* Content */}
                  <div className="relative z-10 flex justify-between text-sm">
                    <p>{card.date}</p>
                    <p>{card.duration}</p>
                  </div>

                  <h2 className="relative z-10 text-[32px] leading-tight">
                    {card.title}
                  </h2>

                  <div className="relative z-10 mt-auto w-25 border-b border-white pb-1">
                    Read More
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* RIGHT ARROW */}
          <button
            onClick={() => paginate(1)}
            className="absolute -right-10 text-white opacity-60 hover:opacity-100 transition"
          >
            <ArrowForwardIosOutlinedIcon/>
          </button>
        </div>

        <div className="hidden lg:flex gap-6">
          {CARDS.map((card,idx) => (
            <Reveal variants={slideInFromLeft(0.2 + (idx)/5)} key={idx}>
              <div className="flex flex-col w-[396px] h-[566px] p-10 gap-y-13 relative">
                <img
                  src={card.image}
                  alt="img8"
                  className="absolute inset-0"
                />
                <div className="flex justify-between z-1">
                  <p>{card.date}</p>
                  <p>{card.duration}</p>
                </div>
                <h2 className="text-[32px] z-1">
                  {card.title}
                </h2>
                <div className="mt-40 w-25 border-b border-white pb-1 z-1">
                  Read More
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <Footer/>
    </div>
  );
};

export default page;
