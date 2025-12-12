'use client'
import React from 'react'

const page = () => {
  return (
    <div>
    <section className="w-screen h-screen bg-[url('/atelier/heroImg.png')] bg-cover bg-center flex flex-col justify-center items-start pl-30 gap-y-15">
    <div className='lg:hidden flex justify-between gap-x-25 text-[16px]'>
      <p className='text-[18px]'>Toronto</p>
      <p className=''>info@vedaracollective.ca</p>
    </div>
    <div className='flex w-[375px] lg:w-[1200px] justify-between'>
      <h3 className='w-[770px] text-[24px] lg:text-[40px]'>We help you become the founder whose brand becomes culture.</h3>
      <div className='hidden lg:flex flex-col items-end gap-y-2'>
        <p className='uppercase text-[24px]'>Toronto</p>
        <p className='text-[16px]'>info@vedaracollective.ca</p>
      </div>
    </div>
    <p className='underline w-[375px] lg:w-[1000px] text-left pb-1'>Enter the World of Vedara</p>
    </section>

    <section className="w-screen h-screen bg-[url('/atelier/img2.png')] bg-cover bg-center flex flex-col">
      <p className="w-[375px] lg:w-[542px] text-[16px] ml-26 mt-70">
        At Vedara, branding is not aesthetic decoration, it is architectural. We craft identities that are built to endure, engineered to influence, and designed to rise above cultural noise. Our approach blends strategic intelligence, design precision, and a deep understanding of luxury behavioural psychology. Every brand we shape carries a rare duality: visual beauty supported by strategic backbone. For founders, investors, and institutions seeking to establish brands with command, clarity, and long-term equity, Vedara develops systems that feel inevitable, brands that cannot be ignored, diluted, or forgotten.
      </p>

      <h2 className='text-right mt-40 mr-10 italic text-[36px]'>Branding & Strategy</h2>
    </section>

    <section className='flex flex-col justify-center items-center gap-y-[146px] text-[16px] my-40 w-screen min-h-screen'>
      <div className='flex flex-col gap-9'>
        <p className='ml-80 uppercase w-[396px]'>Brand Foundation Architecture</p>
        <p className='w-[606px]'>A meticulous construction of your brand’s core—vision, narrative, ethos, positioning, and behavioural principles. We transform abstract ambition into a defined, defensible brand architecture that informs every decision that follows.</p>
      </div>

      <div className='flex flex-col gap-9'>
        <p className='w-[396px]'>Strategic Brand Positioning</p>
        <p className='w-[606px]'>We identify the intellectual and emotional territory your brand can own. Through competitive intelligence, culture-mapping, and behavioural insight, we carve out a position that elevates you out of the market and into your own category.</p>
      </div>

      <div className='flex flex-col gap-9'>
        <p className='w-[396px]'>Luxury Visual Identity Systems</p>
        <p className='w-[606px]'>A complete, high-fidelity identity suite that captures the soul of your brand—logos, typography, chromatic worlds, form language, and scalable identity systems designed to travel across mediums without losing elegance or authority.</p>
      </div>

      <div className='flex flex-col gap-9'>
        <p className='w-[442px]'>Brand Voice & Linguistic Engineering</p>
        <p className='w-[606px]'>We craft a verbal identity that feels unmistakably yours—tone of voice, vocabulary frameworks, communication patterns, and signature language that turn every written interaction into a recognisable expression of the brand.</p>
      </div>
    </section>

    </div>
  )
}

export default page