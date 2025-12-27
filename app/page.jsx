'use client'

import Link from "next/link";
import { motion } from "framer-motion";
import ArrowForwardIosOutlinedIcon from '@mui/icons-material/ArrowForwardIosOutlined';

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
    <motion.div 
      variants={container}
      initial= "hidden"
      animate= "show"
      className="w-screen h-screen flex flex-col lg:flex-row justify-center lg:justify-between items-center"
    >
      <img src="/homeImg.png" alt="home" className="lg:hidden opacity-55 absolute -z-1 inset-0 w-screen h-screen object-cover object-top" />
      <motion.div className="w-screen lg:w-[calc(100vw-720px)] h-screen flex flex-col justify-between items-center lg:items-start">
        <h1 className='relative top-[26px] lg:left-7 w-[82px] h-[26px] lg:w-[209px] lg:h-[69px] text-[24px]'> VEDARA </h1>
        
        <motion.h2 variants={item} className="w-100 md:w-[364px] lg:w-[554px] text-[24px] lg:text-[36px] text-center lg:text-left leading-normal mx-auto">
          We Sculpt Your <span className="font-bold italic">Values and Vision</span> Into a Legacy Capable of Withstanding <span className="font-bold italic">Trends and Time</span>
        </motion.h2>

        <motion.p variants={item} className="lg:hidden w-[250px] lg:w-[354px] text-center text-[14px] lg:text-[18px]">
          Let’s align your heritage with modern relevance.
        </motion.p>

        <motion.div variants={item} className="lg:hidden flex flex-col gap-y-7 justify-center items-center text-[16px] lg:text-[24px] w-full">
          <Link href='/atelier'>
            <button className="pl-9 pr-4 py-4 rounded-full backdrop-blur-[10px]">
              <div className="flex justify-between items-center">
                Vedara Atelier 
                <ArrowForwardIosOutlinedIcon/>
              </div>
            </button>
          </Link>

          <Link href='/dynasty'>
            <button className="pl-9 pr-4 py-4 rounded-full backdrop-blur-[10px]">
              <div className="flex justify-between items-center">
                Vedara Dynasty 
                <ArrowForwardIosOutlinedIcon/>
              </div>  
            </button>
          </Link>
        </motion.div>

        <motion.p variants={item} className="w-[350px] text-center lg:text-left lg:w-[554px] mx-auto mb-10 font-extralight font-editorial">© VEDARA <span className="italic">Building Brands Worth Inheriting.</span></motion.p>
      </motion.div>


      <motion.div className="hidden h-screen lg:flex flex-col justify-end relative">
        <img src="/homeImg.png" alt="home" className="hidden lg:block absolute -z-1 inset-0 w-[720px] h-screen object-cover object-top" />
        <motion.p variants={item} className="w-[250px] lg:w-[500px] text-[14px] lg:text-[18px] font-medium pl-15">
          Let’s align your heritage with modern relevance.
        </motion.p>

        <motion.div variants={item} className="flex flex-col justify-center items-center text-[16px] lg:text-[24px] mt-4 w-full">
          <Link href='/dynasty'>
            <button className="w-40 lg:w-180 backdrop-blur-[10px]">
              <div className="flex justify-between items-center pl-15 pr-13 py-10">
                <div className="flex flex-col gap-y-1">
                  <p className="text-[22px] text-left">Vedara Dynasty</p>
                  <p className="text-[14px]">Curated visionary projects, cultural properties, investor alignment.</p>
                </div>
                <ArrowForwardIosOutlinedIcon/>
              </div>
            </button>
          </Link>

          <Link href='/atelier'>
            <button className="w-50 lg:w-180 backdrop-blur-[10px]">
              <div className="flex justify-between items-center pl-15 pr-13 py-10">
                <div className="flex flex-col gap-y-1">
                  <p className="text-[22px] text-left">Vedara Atelier</p>
                  <p className="text-[14px]"> Luxury BrandStrategy & Design, Website & Marketing.</p>
                </div>
                <ArrowForwardIosOutlinedIcon/>
              </div>  
            </button>
          </Link>
        </motion.div>
      </motion.div>
    </motion.div>
  );
}
