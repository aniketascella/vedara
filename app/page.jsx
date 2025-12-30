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
        <Link href="/" className="relative top-[26px] lg:left-20 flex justify-center items-center lg:gap-4">
          <img src="/vedara_logo.svg" alt="logo" />
          <h1 className='w-[82px] lg:w-[209px] text-[24px]'>
            VEDARA  
          </h1>
        </Link>
        
        <div className="flex flex-col gap-y-6 mx-auto lg:mx-0 w-90">
        <motion.h2 variants={item} className="w-80 md:w-[364px] lg:w-[554px] text-[24px] lg:text-[36px] leading-normal lg:ml-40">
          We Sculpt Your <span className="font-semibold italic">Values and <br /> Vision</span> Into a Legacy Capable of Withstanding <span className="font-semibold italic">Trends and Time</span>
        </motion.h2>


        <motion.p variants={item} className="lg:hidden w-80 lg:w-[354px] text-center text-[14px] lg:text-[18px]">
          Let’s align your heritage with modern relevance.
        </motion.p>

        <motion.div variants={item} className="lg:hidden flex  justify-between items-center text-[12px] w-full">
          <Link href='/atelier'>
            <button className="pl-9 pr-3 py-4 rounded-full bg-[#CEBFB3]/10bg-[#CEBFB3]/10 backdrop-blur-[20px] ">
              <div className="flex justify-between items-center">
                Vedara Atelier 
                <ArrowForwardIosOutlinedIcon/>
              </div>
            </button>
          </Link>

          <Link href='/dynasty'>
            <button className="pl-9 pr-3 py-4 rounded-full bg-[#CEBFB3]/10 backdrop-blur-[10px]">
              <div className="flex justify-between items-center">
                Vedara Dynasty 
                <ArrowForwardIosOutlinedIcon/>
              </div>  
            </button>
          </Link>
        </motion.div>
        </div>


        <motion.p variants={item} className="w-[350px] text-center lg:text-left lg:w-[554px] lg:ml-40 mb-10 font-extralight font-editorial">© VEDARA <span className="italic">Building Brands Worth Inheriting.</span></motion.p>
      </motion.div>


      <motion.div className="hidden h-screen lg:flex flex-col justify-end relative">
        <img src="/homeImg.png" alt="home" className="hidden lg:block absolute -z-1 inset-0 w-[720px] h-screen object-cover object-top" />
        <motion.p variants={item} className="w-[250px] lg:w-[500px] text-[14px] lg:text-[18px] font-medium pl-15">
          Let’s align your heritage with modern relevance.
        </motion.p>

        <motion.div variants={item} className="flex flex-col justify-center items-center text-[16px] lg:text-[24px] mt-4 w-full">
          <button className="w-40 lg:w-180 backdrop-blur-[10px]">
            <Link href='/dynasty'>
              <div className="flex justify-between items-center pl-15 pr-13 py-6">
                <motion.div className="flex flex-col gap-y-1"
                  whileHover={{ scale: 1.15 }}
                  transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                >
                  <p className="text-[22px] text-left">Vedara Dynasty</p>
                  <p className="text-[14px]">Curated visionary projects, cultural properties, investor alignment.</p>
                </motion.div>
                <ArrowForwardIosOutlinedIcon/>
              </div>
            </Link>
          </button>

          <button className="w-50 lg:w-180 backdrop-blur-[10px]">
            <Link href='/atelier'>
              <div className="flex justify-between items-center pl-15 pr-13 py-6">
                <motion.div className="flex flex-col gap-y-1"
                  whileHover={{ scale: 1.15 }}
                  transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                >
                  <p className="text-[22px] text-left">Vedara Atelier</p>
                  <p className="text-[14px]"> Luxury BrandStrategy & Design, Website & Marketing.</p>
                </motion.div>
                <ArrowForwardIosOutlinedIcon/>
              </div>  
            </Link>
          </button>
        </motion.div>
      </motion.div>
    </motion.div>
  );
}
