"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { slideInFromBottom,fadeInText } from "@/utils/motion";

export default function Section2({ data }) {
  return (
    <section>
      {data.map((item,idx) => (
        <div
          key={idx}
          className={`flex flex-col ${idx==1?`lg:flex-row-reverse lg:gap-x-35`: `lg:flex-row lg:gap-x-40`} justify-center items-center ${item.style} h-screen`}
        >
          {/* LEFT TEXT */}
          <motion.div
            variants={fadeInText}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            className="flex flex-col justify-center w-[380px] lg:w-120 pt-25 pb-10 lg:py-20 gap-y-3 lg:gap-y-4 text-[12px] lg:text-[14px]"
          >
            <h2 className="italic text-[36px] lg:text-[45px] leading-10">
              {item.title}
            </h2>
            <p>{item.para1}</p>
            <p>{item.para2}</p>
            <p className="font-medium mt-1 lg:mt-4 text-[16px] lg:text-[18px] uppercase">{item.subtitle}</p>
            <p>{item.para3}</p>
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
            className="w-screen h-fit lg:h-[765px] lg:w-155"
          />
        </div>
      ))}
      
    </section>
  )
}
