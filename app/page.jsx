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
      <img src="/homeImg.png" alt="home" className="lg:hidden absolute -z-1 inset-0 w-screen h-screen object-cover object-center" />
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
            <button className="w-40 h-10 lg:w-180 lg:h-18 backdrop-blur-xl">
              <div className="flex justify-center items-center gap-4 lg:gap-6">
                Vedara Atelier 
                <ArrowForwardIosOutlinedIcon/>
              </div>
            </button>
          </Link>

          <Link href='/dynasty'>
            <button className="w-50 h-10 lg:w-180 lg:h-18 backdrop-blur-xl">
              <div className="flex justify-center items-center gap-2 lg:gap-4">
                Vedara Dynasty 
                <ArrowForwardIosOutlinedIcon/>
              </div>  
            </button>
          </Link>
        </motion.div>

        <motion.p variants={item} className="w-[350px] text-center lg:text-left lg:w-[554px] mx-auto mb-10">© Vedara — Building Brands Worth Inheriting. </motion.p>
      </motion.div>


      <motion.div className="hidden h-screen lg:flex flex-col justify-end items-center relative">
        <img src="/homeImg.png" alt="home" className="hidden lg:block absolute -z-1 inset-0 w-[720px] h-screen object-cover object-center" />
        <motion.p variants={item} className="w-[250px] lg:w-[354px] text-center text-[14px] lg:text-[18px]">
          Let’s align your heritage with modern relevance.
        </motion.p>

        <motion.div variants={item} className="flex flex-col gap-y-7 justify-center items-center text-[16px] lg:text-[24px] mt-14 w-full">
          <Link href='/atelier'>
            <button className="w-40 h-10 lg:w-180 lg:h-18 backdrop-blur-xl">
              <div className="flex justify-center items-center gap-4 lg:gap-6">
                Vedara Atelier 
                <ArrowForwardIosOutlinedIcon/>
              </div>
            </button>
          </Link>

          <Link href='/dynasty'>
            <button className="w-50 h-10 lg:w-180 lg:h-18 backdrop-blur-xl">
              <div className="flex justify-center items-center gap-2 lg:gap-4">
                Vedara Dynasty 
                <ArrowForwardIosOutlinedIcon/>
              </div>  
            </button>
          </Link>
        </motion.div>
      </motion.div>
    </motion.div>
  );
}
