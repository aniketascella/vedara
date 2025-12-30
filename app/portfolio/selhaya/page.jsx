'use client'

import {useEffect, useLayoutEffect, useRef, useState } from 'react'
import { useScroll, useTransform, motion, useMotionValueEvent } from 'framer-motion'
import { useRouter } from 'next/navigation'
import Footer from '@/components/Footer'

const page = () => {
  const container= useRef(null);
  // const footer = useRef(null);
  const hasNavigated = useRef(false);
  const router = useRouter();

  
  const { scrollYProgress:containerScroll } = useScroll({
    target: container,
    offset: ["start start", "end end"],
  });

  const scale1 = useTransform(containerScroll, [0, 1], [1, 4]);

  // const { scrollYProgress:footerScroll } = useScroll({
  //   target: footer,
  //   offset: ["start start", "end end"],
  // });

  // const scale2 = useTransform(footerScroll, [0, 1], [1, 4]);

//   useMotionValueEvent(footerScroll, "change", (latest) => {
//   if (latest > 0.98 && !hasNavigated.current) {
//     hasNavigated.current = true;

//     window.scrollTo({ top: 0, behavior: "auto" });

//     router.push("/portfolio/antara", {scroll:false});
//   }
// });
  return (
    <div>
      <section className="flex flex-col justify-center items-start w-screen min-h-screen relative overflow-hidden">
        <div className="absolute -z-1 w-full h-full">
          <img
            src="/selhaya/heroImg.png"
            alt="hero"
            className="w-full h-full will-change-transform object-top object-cover"
            style={{ transformOrigin: "center center" }}
          />
        </div>

        <div className='flex flex-col lg:gap-y-20 px-15 lg:flex-row lg:justify-between lg:items-start w-screen'>
          <div className="flex flex-col">
            <h1 className='text-[38px]'>Selhaya</h1>
            <p className='text-[16px] uppercase'>World’s First Luxury Abaya Maison</p>
          </div>
          <div className="flex flex-col justify-end items-end text-right lg:text-left gap-6">
            <p className="w-full md:w-[325px] font-light lg:text-right text-[14px] lg:text-[16px]">
              Selhaya entered Vedara’s closed-circle ecosystem to evolve from a promising luxury brand into an unforgettable maison.
            </p>
            <button className="w-40 h-10 lg:w-45 lg:h-13 rounded-full backdrop-blur-xl">
              <div>
                Visit Website
              </div>
            </button>
          </div>
        </div>

        <div className="flex flex-col lg:flex-row lg:justify-between w-screen gap-10 px-15 mt-12">
          <div className="flex flex-col gap-4">
            <div className="flex gap-11.5">
              <p>Client</p>
              <li className='list-disc list-inside'>Selhaya</li>
            </div>

            <div className="flex gap-6">
              <p>Services</p>
              <ul className="flex flex-col lg:flex-row gap-4 list-disc list-inside">
                <li className=''>Visual Design</li>
                <li className=''>Brand identity </li>
                <li className=''>UX/UI design</li>
              </ul>
            </div>
          </div>

          <div className="flex flex-col gap-4">
            <div className="flex gap-6">
              <p>Industries</p>
              <li className='list-disc list-inside'>Fashion</li>
            </div>

            <div className="flex gap-16">
              <p>Date</p>
              <ul className="flex gap-4 list-disc list-inside">
                <li className=''>August ‘2025</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="py-45 flex flex-col justify-center items-center gap-y-25">
        <p className="uppercase text-[20px] lg:text-[36px] w-[300px] lg:w-[665px]">Selhaya World’s First Luxury Abaya Maison</p>
        <div className="flex flex-col lg:flex-row w-[300px] lg:w-[600px] relative gap-6">
          <p className="uppercase font-semibold lg:absolute -left-50">our objective</p>
          <p className="text-[12px] lg:text-[20px]">
            Vedara’s objective with Selhaya was to evolve a beautiful concept into a fully realized couture identity, one that could stand confidently beside established luxury houses while retaining the soul of its origin.
          </p>
        </div>
        <img src="/selhaya/img1.png" alt="img1" className="w-[300px] lg:w-[480px]"/>
        <div className="flex w-[300px] lg:w-screen lg:justify-center items-center lg:gap-42">
          <img src="/selhaya/img2.png" alt="img2" className="w-[155px] lg:w-[224px]"/>

          <div className="hidden lg:block space-y-4">
            <p className="uppercase font-semibold">core challenges</p>
            <p className='w-103'>
              Selhaya possessed depth and artistic intention but its digital expression lacked the architecture needed to convey true luxury. Our challenge was to honour Selhaya’s soul while taking care of every touchpoint to meet the standards of a world-class luxury house.
            </p>
          </div>
        </div>

        <img src="/selhaya/img3.png" alt="img3" className="lg:hidden w-[300px]"/>

        <div className="flex w-[300px] lg:w-screen justify-end items-center lg:pl-20 lg:justify-center lg:gap-56">

          <img src="/selhaya/img4.png" alt="img4" className="lg:hidden relative w-[155px]"/>
          <img src="/selhaya/img4.png" alt="img4" className="hidden lg:flex relative w-56 top-[143px]"/>
          <img src="/selhaya/img3.png" alt="img3" className="hidden lg:flex w-[300px] lg:w-[480px]"/>
        </div>
        <div className="lg:hidden space-y-4">
          <p className="uppercase font-semibold">core challenges</p>
          <p className='w-70 text-[12px]'>
            Selhaya possessed depth and artistic intention but its digital expression lacked the architecture needed to convey true luxury. Our challenge was to honour Selhaya’s soul while taking care of every touchpoint to meet the standards of a world-class luxury house.
          </p>
        </div>

        <div ref={container} className="w-screen h-[300vh] -mt-30 relative">
          <div className="sticky overflow-hidden top-0 h-screen">
            <motion.div style={{scale: scale1}} className='w-full h-full top-0 absolute flex justify-center items-center'>
              <div className="relative w-[25vw]">
                <img src="/selhaya/img5.png" alt="img5" className="object-cover"/>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="flex flex-col items-center py-26">
        <div className="flex flex-col lg:flex-row justify-center gap-24">
          <p className='uppercase'>Our solution</p>
          <p className="w-70 text-[12px] lg:text-[18px] lg:w-120">
            Vedara distilled Selhaya’s fragmented presence into a coherent, luxurious digital universe, one defined by intention, restraint, and emotional precision. We rebuilt the brand’s narrative system, visual language, and website architecture. The result was a platform not just redesigned, but re-imagined.
          </p>
        </div>
        <video src="/selhaya/vid1.mp4" autoPlay muted loop className="w-[300px] lg:w-[814px] mt-15"/>

      </section>

      <section className="py-34 bg-primary relative overflow-x-hidden">

        <img src="/selhaya/img6.png" alt="img6" className="w-[300px] lg:w-[813px] mx-auto"/>

        <div className="flex md:hidden flex-col mx-auto mt-32 gap-4 text-black w-72">
          <p className="uppercase font-semibold">
            From Aesthetically Nice to Unforgettable
          </p>
          <p className="text-[12px] lg:text-[18px]">
            The transformation began with a complete reinvention of Selhaya’s website, a digital maison crafted with obsessive detail. Thoughtful micro-interactions that brought the brand to life.
          </p>
        </div>

        <div className="flex justify-between mt-32 lg:mt-68">
          <img src="/selhaya/img7.png" alt="img7" className="w-[150px] md:w-[300px] lg:w-[915px] relative -left-10 md:-left-30 lg:-left-70"/>

          <div className="flex flex-col justify-end md:justify-between">
            <div className="hidden md:flex flex-col md:gap-4 text-black w-54 lg:w-103">
              <p className="uppercase font-semibold">
                From Aesthetically Nice to Unforgettable
              </p>
              <p className="text-[12px] lg:text-[18px]">
                The transformation began with a complete reinvention of Selhaya’s website, a digital maison crafted with obsessive detail. Thoughtful micro-interactions that brought the brand to life.
              </p>
            </div>
            <img src="/selhaya/img8.png" alt="img8" className="w-[150px] md:w-[300px] lg:w-[915px] relative"/>

          </div>
        </div>


        <video src="/selhaya/vid2.mp4" autoPlay muted loop className="w-[300px] lg:w-[813px] mx-auto mt-32 lg:mt-80"/>

        <div className="flex flex-col items-center lg:flex-row justify-between gap-y-6 lg:pl-25 mt-32 lg:mt-80 w-screen">
          <div className="flex flex-col gap-4 w-62 lg:w-103 text-black">
            <p className="uppercase font-semibold text-[18px] lg:text-[22px]">
              From Aesthetically Nice to Unforgettable
            </p>
            <p className="text-[12px] lg:text-[18px]">
              The transformation began with a complete reinvention of Selhaya’s website, a digital maison crafted with obsessive detail. Thoughtful micro-interactions that brought the brand to life.
            </p>
          </div>
          <div className="lg:hidden w-screen flex justify-end">
            <img src="/selhaya/img9.png" alt="img9" className="w-[300px]"/>
          </div>
          <img src="/selhaya/img9.png" alt="img9" className="hidden lg:block w-[480px]"/>
        </div>

        <div className="flex flex-col items-center lg:flex-row-reverse justify-between gap-y-6 lg:pr-25 mt-32 lg:mt-80 w-screen">
          <div className="flex flex-col gap-4 w-62 lg:w-103 text-black">
            <p className="uppercase font-semibold text-[18px] lg:text-[22px]">
              From Aesthetically Nice to Unforgettable
            </p>
            <p className="text-[12px] lg:text-[18px]">
              The transformation began with a complete reinvention of Selhaya’s website, a digital maison crafted with obsessive detail. Thoughtful micro-interactions that brought the brand to life.
            </p>
          </div>
          <div className="lg:hidden w-screen flex">
            <img src="/selhaya/img10.png" alt="img10" className="w-[300px]"/>
          </div>
          <img src="/selhaya/img10.png" alt="img10" className="hidden lg:block w-[480px]"/>
        </div>
      </section>

      <section className="py-45 flex flex-col justify-center items-center gap-y-30 lg:gap-y-55">
        <img src="/selhaya/img11.png" alt="img11" className="w-[300px] lg:w-[480px]"/>

        <div className="hidden lg:flex justify-between gap-36 relative">
          <img src="/selhaya/img14.png" alt="img14" className="relative w-[300px] lg:w-[224px] -top-20"/>
          <img src="/selhaya/img12.png" alt="img12" className="w-[300px] lg:w-[480px]"/>
        </div>

        <img src="/selhaya/img13.png" alt="img13" className="w-[300px] lg:hidden"/>

        <img src="/selhaya/img15.png" alt="img15" className="w-[155px] lg:hidden"/>

        <div className="lg:hidden flex flex-col gap-y-4 w-70 mx-auto">
            <p className="uppercase font-semibold text-[18px]">A Precise Showcase</p>
            <p className='text-[12px]'>
              Every product, narrative, and detail was re-presented with clarity, intention, and aesthetic precision.
              We ensured the digital display became an extension of Selhaya’s craftsmanship, not merely a catalogue.
            </p>
        </div>

        <div className="hidden lg:flex gap-42 ml-50">
          <div className="space-y-4">
            <p className="uppercase font-semibold">A Precise Showcase</p>
            <p className='w-103'>
              Every product, narrative, and detail was re-presented with clarity, intention, and aesthetic precision.
              We ensured the digital display became an extension of Selhaya’s craftsmanship, not merely a catalogue.
            </p>
          </div>
          <img src="/selhaya/img15.png" alt="img15" className="w-[300px] lg:w-[224px]"/>
        </div>

        <img src="/selhaya/img14.png" alt="img14" className='w-[300px] lg:hidden'/>

        <img src="/selhaya/img13.png" alt="img13" className="hidden lg:block w-[300px] lg:w-[480px] -mt-85 -ml-40"/>
      </section>

      {/* <section ref={footer} className="w-screen h-[300vh] relative">
        <div  className="sticky top-0 w-screen h-screen overflow-hidden flex justify-center items-center bg-[linear-gradient(rgba(0,0,0,0.5)),url('/antara/img5.png')] bg-cover bg-center bg-no-repeat">
          <div className="flex justify-center items-center relative w-full">
            <div className="flex flex-col left-48 top-10 absolute z-10">
              <h1 className='text-[36px]'>Antara Living</h1>
              <p className="uppercase">Ethical Profit Hospitality</p>
            </div>
            <motion.div
              style={{ scale: scale2 }}
              className="relative z-10"
            >
              <img
                src="/portfolio/img4.png"
                alt="img4"
                className="w-[25vw] will-change-transform object-cover object-top"
              />
            </motion.div>
          </div>
        </div>
      </section> */}
      <Footer/>

    </div>
  )
}

export default page;
