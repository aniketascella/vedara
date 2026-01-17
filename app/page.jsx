'use client'

import Link from "next/link";
import Section2 from "@/components/Section2";
import ArrowForwardIosOutlinedIcon from '@mui/icons-material/ArrowForwardIosOutlined';
import { motion, useScroll, useTransform } from "framer-motion";
import ProjectCarousal from "@/components/ProjectCarousal";
import KeyEngagements from "@/components/KeyEngagements";
import section2Data from "./constants/section2Data";
import TeamCarousel from "@/components/TeamCarousel";
import Reveal from "@/utils/Reveal";
import { slideInFromBottom, slideInFromLeft, slideInFromRight, slideInFromTop } from "@/utils/motion";
import Footer from "@/components/Footer";

const container = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.2,
      when: "beforeChildren",
    },
  },
};


const item = {
hidden: { opacity: 0, y: 5 },
show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.2, 0.8, 0.2, 1] } },
};

export default function Home() {
  return (
    <div className="overflow-clip">
      <section className="flex items-end w-screen h-screen relative">
        <img src="/homeImg.png" alt="home" className="absolute -z-1 inset-0 w-screen h-screen object-cover object-top" />
        <div className="flex flex-col gap-y-3 lg:gap-y-8 max-w-[364px] lg:max-w-[706px] mb-20 lg:mb-[130px] ml-[67px] lg:ml-[125px]">
          <h1 className="text-[45px] lg:text-[64px] italic font-semibold leading-14 lg:leading-17">
            For Those Who <br /> Refuse to Be Forgotten.
          </h1>
          <p className="text-[16px] lg:text-[24px] font-light lg:w-[586px]">
            We forge brands, real estate, and capital systems for visionaries who build for generations—not quarters.
          </p>
        </div>
      </section>

      <section className="bg-black py-10 lg:py-19">
        <div className="flex justify-between w-screen px-16 lg:px-32">
          <h2 className="italic text-[14px] lg:text-[16px]">
            About Vedara
          </h2>
          <p className="text-[14px] lg:text-[16px]">
            Our Work
          </p>
        </div>

        <div className="flex flex-col lg:flex-row justify-between w-screen px-16 lg:px-32 mt-19">
          <p className="lg:w-[510px] text-[24px] lg:text-[36px] mb-6 lg:mb-0 leading-tight">
            At Vedara, we exist to build clarity-driven brands and scalable ecosystems.
          </p>
          <div className="flex flex-col lg:w-[541px] gap-y-5 lg:gap-y-6 text-[12px] lg:text-[14px]">
            <p className="">
              Vedara operates as an integrated ecosystem where strategy, creativity, and capital come together. We work closely with brands at different stages — from early direction-setting to long-term growth and expansion.
            </p>
            <p className="">
              Our work goes beyond execution. We partner deeply with founders and teams to define purpose, design meaningful brand experiences, and create systems that support sustainable scale. Every decision is guided by clarity, intent, and long-term thinking.
            </p>
          </div>
        </div>

        <ProjectCarousal />

      </section>

      <Section2 data={section2Data} />

      <KeyEngagements/>
      
      <TeamCarousel/>

      <section className='flex flex-col justify-center items-center py-35 gap-9 lg:gap-11 pl-8 md:pl-19 lg:px-50'>
        <Reveal variants={slideInFromTop(0.2)} className={`w-[320px] md:w-120 lg:w-[1104px] `}>
          <h2 className="italic text-[16px] lg:text-[18px] text-left">
            How Vedara Works
          </h2>
        </Reveal>
        <div className="flex flex-col gap-y-9 lg:flex-row justify-between items-center w-[320px] md:w-120 lg:w-[1104px]">
          <Reveal variants={slideInFromTop(0.2)}>
            <motion.p  className=" w-[320px] md:w-120 lg:w-[743px] text-[24px] lg:text-[36px]  leading-tight">
              A Structured Approach To Building, Executing, and Scaling Brands
            </motion.p>
          </Reveal>
          <Reveal variants={slideInFromTop(0.2)}>
            <motion.p className="w-[320px] md:w-120 lg:w-[336px] text-[14px] lg:text-[16px]">
              Vedara follows a clear, step-by-step model that connects strategy, execution, and long-term growth. 
            </motion.p>
          </Reveal>
        </div>
        <motion.div className="flex flex-col lg:flex-row justify-between items-center gap-12">
          <Reveal variants={slideInFromLeft(0.2)}>
            <div className="bg-primary text-black flex flex-col items-end gap-4 w-[320px] md:w-120 lg:w-84 rounded-2xl px-5 pt-6 pb-12">
              <img src="/home/img1.png" alt="img1" className="relative w-full object-cover" />
              <p className="text-[18px] lg:text-[24px] lg:w-[230px] tracking-tight">
                Discover & Diagnose
              </p>
              <p className="text-right text-[12px] lg:text-[14px] lg:w-[202px] leading-tight">
                Understand the business, brand, and market.
              </p>
            </div>
          </Reveal>
          
          <Reveal variants={slideInFromBottom(0.2)}>
            <div className="bg-secondary flex flex-col gap-2 lg:gap-6 w-[320px] md:w-120 lg:w-84 rounded-2xl px-8 pt-8 pb-13 text-primary">
              <img src="/dynasty/quoteIcon.svg" alt="img2" className="relative w-13 h-9" />
              <p className="text-[18px] lg:text-[24px] mt-16">
                Strategize & Align
              </p>
              <p className="text-[14px] lg:text-[16px] leading-tight">
                We define direction through clear strategy — aligning business goals, brand positioning, and operational priorities.
              </p>
            </div>
          </Reveal>
          
          <Reveal variants={slideInFromRight(0.2)}>
            <div className="bg-primary text-black flex flex-col gap-4 lg:gap-3 w-[320px] md:w-120 lg:w-84 rounded-2xl px-5 py-6">
              <img src="/home/img2.png" alt="img2" className="relative w-full object-cover" />
              <h2 className="italic text-[18px] lg:text-[24px] font-semibold">Build & Execute</h2>
              <p className="text-[14px] lg:text-[16px] leading-tight">
                We design identities, experiences, and digital systems that move brands from recognition to resonance.
              </p>
              <Link href= "/atelier">
                <button className="border-black border-b text-[12px] lg:text-[14px] w-[98px] lg:w-[118px] tracking-wide text-left">
                  Enter the Studio
                </button>
              </Link>
            </div>
          </Reveal>
        </motion.div>
      </section>

      <Footer />
    </div>
  );
}
