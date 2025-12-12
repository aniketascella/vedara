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
      className="w-screen h-screen flex flex-col items-center bg-[linear-gradient(rgba(0,0,0,0.57)),url('/home-bg.png')] bg-cover bg-center"
    >

      <h1 className='relative top-[26px] w-[82px] h-[26px] lg:w-[209px] lg:h-[69px] text-center text-[24px]'> VEDARA </h1>

      <motion.h2 variants={item} className="mt-[127px] lg:mt-40 w-[300px] lg:w-[806px] text-[16px] lg:text-[24px] text-center leading-normal">
        We Sculpt Your <span className="font-bold italic">Values and Vision</span> Into a Legacy Capable of Withstanding <span className="font-bold italic">Trends and Time</span>
      </motion.h2>

      <motion.p variants={item} className="mt-15 lg:mt-[69px] w-[250px] lg:w-[354px] text-center text-[14px] lg:text-[18px]">
        Let’s align your heritage with modern relevance.
      </motion.p>

      <motion.div variants={item} className="flex flex-col gap-y-7 lg:flex-row justify-center items-center text-[16px] lg:text-[24px] mt-14 space-x-5">
        <Link href='/atelier'>
          <button className="w-40 h-10 lg:w-60 lg:h-18 rounded-full backdrop-blur-xl">
            <div className="flex justify-center items-center gap-4 lg:gap-6">
              Vedara Atelier 
              <ArrowForwardIosOutlinedIcon/>
            </div>
          </button>
        </Link>

        <Link href='/dynasty'>
          <button className="w-50 h-10 lg:w-70 lg:h-18 rounded-full backdrop-blur-xl">
            <div className="flex justify-center items-center gap-2 lg:gap-4">
              Vedara Dynasty 
              <ArrowForwardIosOutlinedIcon/>
            </div>  
          </button>
        </Link>
      </motion.div>

      <motion.p variants={item} className="mt-30 lg:mt-40">© Vedara — Building Brands Worth Inheriting. </motion.p>
    </motion.div>
  );
}
