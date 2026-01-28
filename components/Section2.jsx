"use client"

import { motion, AnimatePresence } from "framer-motion"
import Link from "next/link"
import { slideInFromBottom, slideInFromLeft, slideInFromRight, slideInFromTop, fadeInText, slideInImage } from "@/utils/motion";
import Reveal from "@/utils/Reveal";

export default function Section2({ data }) {
  return (
    <section>
      {data.map((item,idx) => (
        <div
          key={idx}
          className={`flex flex-col lg:${idx==1?`flex-row-reverse gap-20`: `flex-row gap-43`} justify-end items-center ${item.style}`}
        >
          {/* LEFT TEXT */}
          <motion.div
            variants={fadeInText}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            className="flex flex-col justify-center w-[380px] lg:w-120 pt-25 pb-10 lg:py-20 lg:pl-20 gap-y-3 lg:gap-y-4 lg:max-w-[45%] text-[12px] lg:text-[14px]"
          >
            {/* <Reveal variants={slideInFromTop(0.2)}> */}
              <h2 className="italic text-[36px] lg:text-[45px] leading-10">
                {item.title}
              </h2>
            {/* </Reveal> */}
            {/* <Reveal variants={slideInFromLeft(0.2)}> */}
              <p>{item.para1}</p>
            {/* </Reveal> */}
            {/* <Reveal variants={slideInFromLeft(0.2)}> */}
              <p>{item.para2}</p>
            {/* </Reveal> */}
            {/* <Reveal variants={slideInFromLeft(0.2)}> */}
              <p className="font-medium mt-1 lg:mt-4 text-[16px] lg:text-[18px] uppercase">{item.subtitle}</p>
            {/* </Reveal> */}
            {/* <Reveal variants={slideInFromLeft(0.2)}> */}
              <p>{item.para3}</p>
            {/* </Reveal> */}
            <button className = "border-b hover:cursor-pointer w-fit">
              <Link href={item.btnLink}>
                {item.btnText}
              </Link>
            </button>
          </motion.div>

          {/* RIGHT IMAGE */}
          <motion.img
            variants={slideInFromBottom(0.2)}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: "1" }}
            src={item.imgSrc}
            alt={item.title}
            className="h-fit lg:h-screen lg:w-1/2"
          />
        </div>
      ))}
      
    </section>
  )
}
