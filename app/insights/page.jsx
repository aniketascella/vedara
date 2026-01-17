// 'use client';

import Footer from "@/components/Footer";
import Reveal from "@/utils/Reveal";
import { slideInFromBottom, slideInFromLeft,slideInFromRight,slideInFromTop } from "@/utils/motion";
import { getBlogs } from "./getBlogs";
import Image from "next/image";
import Link from "next/link";



export default async function page() {
  const blogs = await getBlogs();
  return (
    <div className="bg-[#0d0d0d] text-white relative w-full overflow-x-clip">
      <section className="flex flex-col justify-center pl-6 lg:pl-20 py-40">
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

      {/* {featuredBlog && (
        <section className="max-w-7xl mx-auto mb-32">
          <Link href={`/blogs/${featuredBlog.slug}`}>
            <div className="relative h-[520px] w-full overflow-hidden rounded-xl group">
              <Image
                src={featuredBlog.coverImage}
                alt={featuredBlog.title}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />

              <div className="absolute inset-0 bg-black/40" />

              <div className="absolute bottom-10 left-10 max-w-xl">
                <p className="uppercase tracking-widest text-sm mb-2">
                  Featured
                </p>
                <h2 className="text-3xl lg:text-4xl font-light mb-4">
                  {featuredBlog.title}
                </h2>
                <p className="text-white/70 mb-6">
                  {featuredBlog.excerpt}
                </p>

                <span className="text-sm underline underline-offset-4">
                  Read →
                </span>
              </div>
            </div>
          </Link>
        </section>
      )} */}

      <section className="max-w-7xl mx-auto">
        <Reveal variants={slideInFromRight(0.2)}>
        <p className="text-center text-[24px] lg:text-[36px] mb-16">
          MORE BLOGS
        </p>
        </Reveal>
        <Reveal variants={slideInFromRight(0.2)}>
        <p className="text-center text-[12px] lg:text-[14px] mb-20 w-[300px] lg:w-[409px] mx-auto">
          Nullam dignissim lacus id dignissim facilisis. Duis facilisis enim non elit pharetra, nec porttitor ligula bibendum.
        </p>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
          {blogs.map((blog) => (
            <Link key={blog._id} href={`/blogs/${blog.slug}`}>
              <div className="group cursor-pointer">
                
                <div className="relative h-[320px] overflow-hidden mb-6">
                  <Image
                    src={blog.coverImage}
                    alt={blog.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>

                <div className="flex justify-between text-xs text-white/50 mb-2">
                  <span>{new Date(blog.publishedAt).getFullYear()}</span>
                  <span>{blog.readTime}</span>
                </div>

                <h4 className="text-lg font-light leading-snug group-hover:underline">
                  {blog.title}
                </h4>
                <p>
                  {blog.excerpt}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </section>

      <Footer/>
    </div>
  )
}

// export default page