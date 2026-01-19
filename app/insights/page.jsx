// 'use client';

import Footer from "@/components/Footer";
import Reveal from "@/utils/Reveal";
import { slideInFromBottom, slideInFromLeft,slideInFromRight,slideInFromTop } from "@/utils/motion";
import { getBlogs } from "./getBlogs";
import Image from "next/image";
import Link from "next/link";
import { ArrowForwardIosOutlined } from "@mui/icons-material";
import { AnimatedReadButton } from "@/components/AnimatedReadButton";


export default async function page() {
  const blogs = await getBlogs();
  const featuredBlog = blogs[0];
  const footerBlog = blogs[1];
  return (
    <div className="text-white relative flex flex-col items-center overflow-x-clip">
      <section className="flex flex-col justify-center w-[80vw] pt-40  ">
        <Reveal variants={slideInFromRight(0.2)}>
          <h1 className="w-[300px] lg:w-auto text-[24px] lg:text-[36px] italic mb-4">
            Cultural Prophecy And Sovereign Wisdom
          </h1>
        </Reveal>
        <Reveal variants={slideInFromLeft(0.2)}>
          <p className="text-[12px] lg:text-[14px] w-[316px] lg:w-[332px]">
            Discover actionable tips and strategies to help your brand stand out and succeed.
          </p>
        </Reveal>
      </section>

      {featuredBlog && (
        <section className="flex justify-center w-[80vw] py-30">
          <div className="relative w-full h-[300px] lg:h-auto rounded-xl transition-transform duration-700 hover:scale-105  ">
            <img
              src={featuredBlog.coverImage}
              alt={featuredBlog.title}
              className="object-cover w-full h-full "
            />

            <div className="absolute inset-0 bg-black/20" />

            <div className="absolute rounded-xl top-10 right-10 text-[14px] lg:text-[18px] font-medium bg-primary/16 py-2 px-4 backdrop-blur-lg">
              Must Read
            </div>

            <div className="absolute flex flex-col lg:flex-row justify-between lg:items-end bottom-0 w-full py-5 lg:py-10 px-10 backdrop-blur-xs">
              <div className="flex flex-col">
                <p className="text-[18px] lg:text-[24px] font-medium mb-4">
                  {featuredBlog.title}
                </p>
                <p className="text-white font-light">
                  {featuredBlog.excerpt}
                </p>
              </div>

              <Link href={`/insights/${featuredBlog.slug}`} className="text-[14px] lg:text-[18px] font-medium">
                Read →
              </Link>
            </div>
          </div>
        </section>
      )}

      <section className="w-[80vw]">
        <Reveal variants={slideInFromRight(0.2)}>
        <p className="text-center uppercase text-[28px] lg:text-[45px] mb-5">
          Case Studies
        </p>
        </Reveal>
        <Reveal variants={slideInFromRight(0.2)}>
        <p className="text-center text-[14px] lg:text-[18px] w-[300px] lg:w-[525px] mx-auto">
          Creative explorations, brand-building approaches, and design thinking. Articles on identity, experience design, communication, and digital environments.
        </p>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-9 gap-y-40 py-30">
          {blogs.map((blog,idx) => (
            <div key={idx} className="w-[300px] h-auto lg:w-[25vw] lg:h-[26vw] mx-auto">   
              <div className="relative group flex justify-center items-center w-full h-[300px] lg:h-[25vw] overflow-hidden mb-6">
                <img
                  src={blog.coverImage}
                  alt={blog.title}
                  className="object-cover transition-transform duration-700 w-full h-full group-hover:scale-105"
                />
                <AnimatedReadButton slug={blog.slug}/>
              </div>

              <div className="flex justify-between text-[16px] lg:text-[24px] mb-2 font-light">
                <p className="text-lg font-light leading-snug w-54 lg:w-75 h-12 md:h-13 overflow-y-hidden">
                  <Link href={`/inisghts/${blog.slug}`}>
                    {blog.title}
                  </Link>
                </p>
                <p>{new Date(blog.publishedAt).getFullYear()}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <div className="w-screen relative h-[763px] lg:h-screen lg:p-23 flex flex-col justify-center items-center gap-y-8 bg-[url('/insight-footer.png')] bg-cover bg-center">
      <div className="absolute inset-0 bg-black/30"/>
        <h2 className="italic text-[20px] md:text-[24px] lg:text-[36px] z-1">Case Study - The Luxury Hospitality Trap</h2>
        <div className='h-[133px] border z-1'/>
        <p className="text-[14px] lg:text-[16px] font-medium w-70 lg:w-[414px] text-center z-1">How a 140-year-old jeweler built a hospitality empire, and the mistakes emerging brands must avoid.</p>
        <Link href={`/insights/${footerBlog.slug}`} className="z-1">
          <button className="bg-primary/36 rounded-full py-[7px] lg:py-3 flex justify-center items-center gap-2 text-[12px] lg:text-[14px] tracking-wide hover:cursor-pointer w-32 lg:w-41">
            Read Now
            <ArrowForwardIosOutlined className='h-[11px] lg:h-[17px]'/>
          </button>
        </Link>
      </div>

      <Footer/>
    </div>
  )
} 