'use client'
import { useRef, useState, useEffect } from "react";
import { motion, AnimatePresence, useScroll } from "framer-motion";
import WhatWeDo from './WhatWeDo'
import Reveal from "@/utils/Reveal";
import { slideInFromBottom, slideInFromTop, slideInFromLeft, slideInFromRight } from "@/utils/motion";

const SLIDES = [
  {
    title: "Luxury Hotels & Hospitality Groups",
    text: "We partner with luxury hospitality brands that are expanding, repositioning, or launching new concepts, particularly in wellness, heritage, ultra-luxury, and destination-led experiences.",
    id:"01",
    image: "/atelier/sliderImg1.png",
  },
  {
    title: "Heritage & Lifestyle Brands",
    text: "Vedara collaborates with fashion, design, art, and luxury goods brands that wish to deepen their cultural relevance. We help them move beyond trend cycles and into timeless resonance.",
    id:"02",
    image: "/atelier/sliderImg2.png",
  },
  {
    title: "UHNW Founders & Family-Owned Enterprises",
    text: "We advise ultra-high-net-worth founders and family businesses focused on legacy, succession, and cultural inheritance. Our work supports brands that must endure leadership transitions.",
    id:"03",
    image: "/atelier/sliderImg3.png",
  },
];

const page = () => {
  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start center", "end end"],
  });

  const [index, setIndex] = useState(0);

  useEffect(() => {
    const unsubscribe = scrollYProgress.on("change", (v) => {
      const next = Math.min(
        SLIDES.length - 1,
        Math.floor(v * SLIDES.length)
      );
      setIndex(next);
    });
    return unsubscribe;
  }, [scrollYProgress]);
  return (
    <div className="overflow-x-hidden">
    <section className="w-screen h-screen bg-[url('/atelier/heroImg.png')] bg-cover bg-center flex flex-col justify-center items-start gap-y-15">
    <Reveal variants={slideInFromRight(0.2)}>
    <div className='lg:hidden flex justify-between w-screen px-10 text-[16px]'>
      <p className='text-[18px]'>Toronto</p>
      <p className=''>info@vedaracollective.ca</p>
    </div>
    </Reveal>
    <div className='flex w-screen justify-between items-center lg:items-start px-10 lg:px-30'>
    <Reveal variants={slideInFromLeft(0.2)}>
      <h3 className='w-[770px] text-[24px] lg:text-[40px]'>A cultural studio for the ultra-conscious, those who understand that a brand is a contribution to the ongoing narrative of human excellence.</h3>
    </Reveal>
    <Reveal variants={slideInFromRight(0.2)}>
      <div className='hidden lg:flex flex-col items-end gap-y-2'>
        <p className='uppercase text-[24px]'>Toronto</p>
        <p className='text-[16px]'>info@vedaracollective.ca</p>
      </div>
    </Reveal>
    </div>
    <Reveal variants={slideInFromLeft(0.2)}>
    <p className='border-b border-white w-[184px] lg:w-[207px] text-[14px] lg:text-[16px] pb-1 ml-10 lg:ml-30'>Enter the World of Vedara</p>
    </Reveal>
    </section>

    <WhatWeDo/>

    <section className="py-30 relative flex flex-col items-end">
      <div className='flex w-screen h-20 gap-4 pl-24 pr-20 justify-between'>
        <Reveal variants={slideInFromBottom(0.2)}>
          <p className="italic text-[16px]">Vedara</p>
        </Reveal>
        <Reveal variants={slideInFromTop(0.2)}>
          <p className="uppercase text-[32px]">Who Vedara Is Built For</p>
        </Reveal>
        <Reveal variants={slideInFromRight(0.2)}>
          <p className="text-right w-[370px]">
            Vedara works with a rare class of founders and institutions, those building not for seasons, but for generations.
          </p>
        </Reveal>
      </div>

      <div ref={sectionRef} className="relative h-[300vh] pr-20">
      <div className="sticky top-0 h-screen flex flex-col gap-y-4 justify-center">
        <div className="flex justify-between">
          <p>Ideal Clients</p>
          <div className="flex gap-4">
            <p className={`${index===0 ? `opacity-100` : `opacity-20`}`}>01</p>
            <p className={`${index===1 ? `opacity-100` : `opacity-20`}`}>02</p>
            <p className={`${index===2 ? `opacity-100` : `opacity-20`}`}>03</p>
          </div>
        </div>
        <div className="w-[385px] lg:w-[952px] grid grid-cols-2 gap-10 bg-primary text-black">
          {/* TEXT */}
          <div className="flex ml-10 items-center">
            <AnimatePresence mode="wait">
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -24 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 24 }}
                transition={{ duration: 1, ease: "easeOut" }}
                className="flex flex-col justify-between h-full py-15"
              >
                <p className="text-3xl w-[305px]">
                  {SLIDES[index].title}
                </p>
                <p className="space-y-2 text-sm w-[331px] opacity-80">
                  {SLIDES[index].text}
                </p>
                <span className="text-4xl">{SLIDES[index].id}</span>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* IMAGE */}
          <div className="relative h-[420px] overflow-hidden">
            <AnimatePresence mode="popLayout">
              <motion.img
                key={index}
                src={SLIDES[index].image}
                alt="images"
                className="absolute inset-0 w-full h-full object-cover"
                initial={{ x: "50%", zIndex: 1 }}
                animate={{ x: "0%", zIndex: 1 }}
                exit={{ x: "100%", zIndex: 2 }}
                transition={{
                  duration: 3,
                  ease: [0.22, 1, 0.36, 1],
                }}
              />
            </AnimatePresence>
          </div>
        </div>
      </div>
    </div>
    </section>

    <section className="bg-primary text-black py-30 px-10 flex flex-col justify-center items-center gap-y-10">
      <div className="flex items-center gap-x-23 mb-10">
        <Reveal variants={slideInFromLeft(0.2)}>
        <img src="/atelier/img1.png" alt="img1" className='' />
        </Reveal>
        <div className="flex flex-col gap-4 w-[650px]">
          <Reveal variants={slideInFromTop(0.2)}>
          <p className="uppercase text-[22px]">
            our philosophy
          </p>
          </Reveal>
          <Reveal variants={slideInFromTop(0.2)}>
          <p className='text-[36px] lg:w-[605px]'>
            Excellence Is Inevitable When You Build With Intention
          </p>
          </Reveal>
          <Reveal variants={slideInFromRight(0.2)}>
          <p className='lg:w-[430px]'>
            We partner with the few who understand that true luxury.
            While others seek attention, we build authority!
          </p>
          </Reveal>
          <Reveal variants={slideInFromBottom(0.2)}>
          <img src="/atelier/img2.png" alt="img2" className='my-10'/>
          </Reveal>
          <Reveal variants={slideInFromRight(0.2)}>
          <p className="text-right lg:ml-58 lg:w-105">
            Your brand deserves to become a reference point,
            not another participant.
          </p>
          </Reveal>
        </div>
      </div>
      <Reveal variants={slideInFromBottom(0.2)}>
      <p className="text-center lg:w-[686px]">
        Every brand we shape begins as an idea, then evolves into a Legacy a narrative powerful enough to influence culture, shape desire,and endure long after its originator has stepped aside.
      </p>
      </Reveal>
      <Reveal variants={slideInFromBottom(0.2)}>
      <p className="border-b border-black pb-1">
        Share Your Vision 
      </p>
      </Reveal>
    </section>

    <section className='flex flex-col justify-center items-center gap-y-45 lg:gap-y-68 py-30'>
      <Reveal variants={slideInFromTop(0.2)}>
      <div className="flex flex-col text-center gap-7">
        <p className='text-[22px]'>Our Approach</p>
        <p className='w-200 text-[28px]'>We create a complete universe identity, narrative, digital presence, and experience. So your story is not just seen, but felt, remembered, and passed down.</p>
      </div>
      </Reveal>

      <div className='flex flex-row gap-x-25'>
        <Reveal variants={slideInFromLeft(0.2)}><p>[01]</p></Reveal>
        <Reveal variants={slideInFromLeft(0.2)}>
        <div className="flex flex-col gap-11">
          <p className="uppercase text-[30px]">the listening</p>
          <p className='w-[300px]'>We begin by absorbing values, histories, ambitions, contradictions. Not just what is said, but what is meant.That’s when clarity begins to take form.</p>
        </div>
        </Reveal>
        <Reveal variants={slideInFromBottom(0.2)}>
        <img src="/atelier/img3.png" alt="img3" className='bottom-24 relative' />
        </Reveal>
      </div>

      <div className='flex flex-row-reverse gap-x-25'>
        <Reveal variants={slideInFromRight(0.2)}><p>[02]</p></Reveal>
        <Reveal variants={slideInFromRight(0.2)}>
        <div className="flex flex-col gap-11">
          <p className="uppercase text-[30px]">the revelation</p>
          <p className='w-[300px]'>This is the moment clarity emerges.Your cultural identity, intention, and emotional promise is understood.We focus on the essence that sets your brand apart from the world.</p>
        </div>
        </Reveal>
        <Reveal variants={slideInFromTop(0.2)}><img src="/atelier/img4.png" alt="img4" className='top-24 relative' /></Reveal>
      </div>

      <div className='flex flex-row gap-x-25'>
        <Reveal variants={slideInFromLeft(0.2)}><p>[03]</p></Reveal>
        <Reveal variants={slideInFromLeft(0.2)}>
        <div className="flex flex-col gap-11">
          <p className="uppercase text-[30px]">the revelation</p>
          <p className='w-[300px]'>This is the moment clarity emerges.Your cultural identity, intention, and emotional promise is understood.We focus on the essence that sets your brand apart from the world.</p>
        </div>
        </Reveal>
        <Reveal variants={slideInFromBottom(0.2)}><img src="/atelier/img5.png" alt="img5" className='bottom-24 relative' /></Reveal>
      </div>

      <div className='flex flex-row-reverse gap-x-25'>
        <Reveal variants={slideInFromRight(0.2)}><p>[03]</p></Reveal>
        <Reveal variants={slideInFromRight(0.2)}>
          <div className="flex flex-col gap-11">
            <p className="uppercase text-[30px]">the revelation</p>
            <p className='w-[300px]'>This is the moment clarity emerges.Your cultural identity, intention, and emotional promise is understood.We focus on the essence that sets your brand apart from the world.</p>
          </div>
          </Reveal>
        <Reveal variants={slideInFromTop(0.2)}><img src="/atelier/img3.png" alt="img3" className='top-24 relative' /></Reveal>
      </div>

      <div className='flex flex-row gap-x-25'>
        <Reveal variants={slideInFromLeft(0.2)}><p>[05]</p></Reveal>
        <Reveal variants={slideInFromLeft(0.2)}>
        <div className="flex flex-col gap-11">
          <p className="uppercase text-[30px]">the revelation</p>
          <p className='w-[300px]'>This is the moment clarity emerges.Your cultural identity, intention, and emotional promise is understood.We focus on the essence that sets your brand apart from the world.</p>
        </div>
        </Reveal>
        <Reveal variants={slideInFromBottom(0.2)}><img src="/atelier/img6.png" alt="img6" className='bottom-24 relative'/>
        </Reveal>
      </div>
    </section>

    <section className="flex flex-row-reverse justify-between items-center bg-primary text-black">
      <Reveal variants={slideInFromRight(0.2)}>
        <div className=""></div>
        <img src="/atelier/img7.png" alt="img7" className="w-screen lg:w-[50vw] h-full object-cover object-center"/>
      </Reveal>
      <div className="flex flex-col justify-center w-screen lg:w-1/2 lg:px-23 py-20 gap-y-10">
        <Reveal variants={slideInFromTop(0.2)}>
          <h2 className="italic text-[22px]">
            Featured Projects
          </h2>
        </Reveal>
        <Reveal variants={slideInFromLeft(0.2)}>
        <p className='font-light text-[30px]'>
          Our portfolio is a curated anthology of ideas brought to life, from heritage-rooted brands to future-thinking digital ecosystems. Every creation reflects our devotion to detail, narrative, and timeless aesthetic discipline.
        </p>
        </Reveal>
        <Reveal variants={slideInFromBottom(0.2)}>
        <p className="border-b border-black pb-1 lg:w-52 mt-65 text-[16px]">
          Call to private conversation
        </p>
        </Reveal>
      </div>
    </section>

    <section className='flex flex-col justify-center items-center gap-y-25 py-30'>
      <Reveal variants={slideInFromTop(0.2)}>
      <div className="flex flex-col justify-center items-center text-center gap-y-7">
        <p className='text-[22px]'>Blogs</p>
        <p className='w-150 text-[28px]'>Where perspective becomes power, and knowledge becomes a creative asset.</p>
        <p className="w-25 border-b border-white pb-1">
          Explore
        </p>
      </div>
      </Reveal>

      <div className="flex gap-6" >
        <Reveal variants={slideInFromLeft(0.2)}>
        <div className="flex flex-col w-[396px] h-[566px] p-10 gap-y-13 top-10 relative">
          <img src="/atelier/img8.png" alt="img8" className='absolute inset-0' />
          <div className="flex justify-between z-1">
            <p>21 SEP 2025</p>
            <p>8 Mins</p>
          </div>
          <h2 className='text-[32px] z-1'>
            How Luxury Brands Destroy Their Cultural Authority
          </h2>

          <div className='mt-40 w-25 border-b border-white pb-1 z-1'>
            Read More
          </div>
        </div>
        </Reveal>

        <Reveal variants={slideInFromBottom(0.2)}>
        <div className="flex flex-col w-[396px] h-[566px] p-10 gap-y-13 relative">
          <img src="/atelier/img9.png" alt="img9" className='absolute inset-0' />
          <div className="flex justify-between z-1">
            <p>21 SEP 2025</p>
            <p>8 Mins</p>
          </div>
          <h2 className='text-[32px] z-1'>
            How Luxury Brands Destroy Their Cultural Authority
          </h2>

          <div className='mt-40 w-25 border-b border-white pb-1 z-1'>
            Read More
          </div>
        </div>
        </Reveal>

        <Reveal variants={slideInFromRight(0.2)}>
        <div className="flex flex-col w-[396px] h-[566px] p-10 gap-y-13 top-10 relative">
          <img src="/atelier/img10.png" alt="img10" className='absolute inset-0' />
          <div className="flex justify-between z-1">
            <p>21 SEP 2025</p>
            <p>8 Mins</p>
          </div>
          <h2 className='text-[32px] z-1'>
            How Luxury Brands Destroy Their Cultural Authority
          </h2>

          <div className='mt-40 w-25 border-b border-white pb-1 z-1'>
            Read More
          </div>
        </div>
        </Reveal>
      </div>
    </section>

    <section className='w-screen h-screen flex flex-col justify-center gap-y-7 p-23 relative'>
      <img src="/home-bg.png" alt="home" className='absolute w-screen h-screen object-cover inset-0 -z-1' />
      <div className="absolute inset-0 bg-black/10 w-screen h-screen" />
      <h1 className=" w-105 text-[36px]">True Luxury Is Not Ornament</h1>
      <p className='w-[375px]'>It is the Mastery of Intention Expressed with Such Precision that It Becomes Impossible to Ignore!</p>
      <div className="w-full border-b border-white"></div>
    </section>

    </div>
  )
}

export default page