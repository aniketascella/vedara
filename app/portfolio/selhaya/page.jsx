'use client'

import {useEffect, useLayoutEffect, useRef, useState } from 'react'
import { useScroll, useTransform, motion } from 'framer-motion'
import { useRouter } from 'next/navigation'

const page = () => {
  const container= useRef(null);
  const footer = useRef(null);
  const imgRef = useRef(null);
  const router = useRouter();

  
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start start", "end end"],
  });
  const scale1 = useTransform(scrollYProgress, [0, 1], [1, 4]);

  return (
    <div>
      <section className="flex flex-col justify-center items-start w-screen min-h-screen relative overflow-hidden">
        <div className="parallax-bg absolute -z-1 w-full h-full">
          <img
            src="/selhaya/heroImg.png"
            alt="hero"
            data-speed="10"
            className="w-full h-full will-change-transform object-top object-cover"
            style={{ transformOrigin: "center center" }}
          />
        </div>

        <div className='flex flex-col gap-y-20 pl-15 lg:flex-row lg:justify-between lg:items-start w-screen'>
          <div className="flex flex-col">
            <h1 className='text-[38px]'>Selhaya</h1>
            <p className='text-[16px] uppercase'>World’s First Luxury Abaya Maison</p>
          </div>
          <div className="flex flex-col justify-end gap-6">
            <p className="w-[200px] md:w-[325px] lg:pr-15 font-light lg:text-right text-[16px]">
              Selhaya entered Vedara’s closed-circle ecosystem to evolve from a promising luxury brand into an unforgettable maison.
            </p>
            <button className="w-40 h-10 lg:w-45 lg:h-13 rounded-full backdrop-blur-xl">
              <div className="">
                Visit Website
              </div>
            </button>
          </div>
        </div>

        <div className="flex flex-col lg:flex-row lg:justify-between w-screen gap-10 px-15 mt-12">
          <div className="flex flex-col">
            <div className="flex gap-6">
              <p>Client</p>
              <li className='list-disc list-inside'>Selhaya</li>
            </div>

            <div className="flex gap-6">
              <p>Services</p>
              <ul className="flex gap-4 lg:list-disc list-inside">
                <li className=''>Visual Design</li>
                <li className=''>Brand identity </li>
                <li className=''>UX/UI design</li>
              </ul>
            </div>
          </div>

          <div className="flex flex-col">
            <div className="flex gap-6">
              <p>Industries</p>
              <li className='list-disc list-inside'>Fashion</li>
            </div>

            <div className="flex gap-6">
              <p>Date</p>
              <ul className="flex gap-4 lg:list-disc list-inside">
                <li className=''>August ‘2025</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="py-45 bg-black flex flex-col justify-center items-center gap-y-25">
        <img src="/selhaya/img1.png" alt="img1" className="w-[300px] lg:w-[480px]"/>
        <div className="flex gap-42 ml-50">
          <img src="/selhaya/img2.png" alt="img2" className="w-[300px] lg:w-[224px]"/>
          <div className="space-y-4">
            <p className="uppercase font-semibold">core challenges</p>
            <p className='w-103'>
              Selhaya possessed depth and artistic intention but its digital expression lacked the architecture needed to convey true luxury. Our challenge was to honour Selhaya’s soul while taking care of every touchpoint to meet the standards of a world-class luxury house.
            </p>
          </div>
        </div>

        <div className="flex justify-end gap-36 ml-50 relative">
          <img src="/selhaya/img4.png" alt="img4" className="absolute w-[300px] lg:w-56 h-[336px] top-[143px] left-0"/>
          <div className="w-[300px] lg:w-56 h-[336px]"/>
          <img src="/selhaya/img3.png" alt="img3" className="w-[300px] lg:w-[480px]"/>
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

      <section className="flex flex-col items-center py-26 bg-black">
        <div className="flex justify-center gap-24">
          <p className='uppercase'>Our solution</p>
          <p className="lg:w-120">
            Vedara distilled Selhaya’s fragmented presence into a coherent, luxurious digital universe, one defined by intention, restraint, and emotional precision. We rebuilt the brand’s narrative system, visual language, and website architecture. The result was a platform not just redesigned, but re-imagined.
          </p>
        </div>
        <video src="/selhaya/vid1.mp4" autoPlay muted loop className="w-[300px] lg:w-[814px] mt-15"/>

      </section>

      <section className="py-34 bg-primary relative overflow-x-hidden">

        <img src="/selhaya/img6.png" alt="img6" className="w-[300px] lg:w-[813px] mx-auto"/>

        <div className="flex gap-60 -ml-70 mt-68">
          <img src="/selhaya/img7.png" alt="img7" className="w-[300px] lg:w-[915px] "/>
          <div className="flex flex-col gap-4 text-black">
            <p className="uppercase font-semibold">
              From Aesthetically Nice to Unforgettable
            </p>
            <p className="w-103">
              The transformation began with a complete reinvention of Selhaya’s website, a digital maison crafted with obsessive detail. Thoughtful micro-interactions that brought the brand to life.
            </p>
          </div>
        </div>

        <img src="/selhaya/img8.png" alt="img8" className="w-[300px] lg:w-[915px] justify-self-end -mr-70 -mt-632"/>

        <video src="/selhaya/vid2.mp4" autoPlay muted loop className="w-[300px] lg:w-[813px] mx-auto mt-80"/>

        <div className="flex justify-between pl-25 mt-80 w-screen">
          <div className="flex flex-col gap-4 text-black">
            <p className="uppercase font-semibold">
              From Aesthetically Nice to Unforgettable
            </p>
            <p className="w-103">
              The transformation began with a complete reinvention of Selhaya’s website, a digital maison crafted with obsessive detail. Thoughtful micro-interactions that brought the brand to life.
            </p>
          </div>
          <img src="/selhaya/img9.png" alt="img9" className="w-[300px] lg:w-[480px]"/>
        </div>

        <div className="flex justify-between pr-25 mt-40 w-screen">
          <img src="/selhaya/img10.png" alt="img10" className="w-[300px] lg:w-[480px]"/>
          <div className="flex flex-col gap-4 text-black">
            <p className="uppercase font-semibold">
              From Aesthetically Nice to Unforgettable
            </p>
            <p className="w-103">
              The transformation began with a complete reinvention of Selhaya’s website, a digital maison crafted with obsessive detail. Thoughtful micro-interactions that brought the brand to life.
            </p>
          </div>
        </div>
      </section>

      <section className="py-45 bg-black flex flex-col justify-center items-center gap-y-55">
        <img src="/selhaya/img11.png" alt="img11" className="w-[300px] lg:w-[480px]"/>

        <div className="flex justify-end gap-36 ml-50 relative">
          <img src="/selhaya/img14.png" alt="img14" className="absolute w-[300px] lg:w-[224px] h-[336px] -top-20 left-0"/>
          <div className="w-[300px] lg:w-[224px] h-[336px]"/>
          <img src="/selhaya/img12.png" alt="img12" className="w-[300px] lg:w-[480px]"/>
        </div>

        <div className="flex gap-42 ml-50">
          <div className="space-y-4">
            <p className="uppercase font-semibold">A Precise Showcase</p>
            <p className='w-103'>
              Every product, narrative, and detail was re-presented with clarity, intention, and aesthetic precision.
              We ensured the digital display became an extension of Selhaya’s craftsmanship, not merely a catalogue.
            </p>
          </div>
          <img src="/selhaya/img15.png" alt="img15" className="w-[300px] lg:w-[224px]"/>
        </div>

        <img src="/selhaya/img13.png" alt="img13" className="w-[300px] lg:w-[480px] -mt-85 -ml-40"/>
      </section>

      <section  className="w-screen h-screen relative flex justify-center items-center bg-[linear-gradient(rgba(0,0,0,0.5)),url('/antara/img5.png')] bg-cover bg-center bg-no-repeat">
        <div className="flex justify-center items-start gap-x-20 relative w-full">
          <div className="flex flex-col mt-10">
            <h1 className='text-[36px]'>Antara Living</h1>
            <p className="uppercase">Ethical Profit Hospitality</p>
          </div>
        {/* <motion.img 
        ref={imgRef}
          src="/portfolio/img4.png" 
          alt="img4" 
          layoutId='shared-img'
          className="w-[450px] will-change-transform"
        /> */}
        <img src="/portfolio/img4.png" alt="img4" className="relative w-[450px]"/>
        {/* <div className="w-screen h-screen relative flex justify-center items-center bg-[linear-gradient(rgba(0,0,0,0.5)),url('/antara/img5.png')] bg-cover bg-center bg-no-repeat">
          <div className="sticky overflow-hidden top-0 h-screen">
            <motion.div className='w-full h-full top-0 absolute '>
              <div className="relative">
                
              </div>
            </motion.div>
          </div>
        </div> */}
        </div>
      </section>

    </div>
  )
}

export default page;
