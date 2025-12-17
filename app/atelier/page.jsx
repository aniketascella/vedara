'use client'
import React from 'react'

const page = () => {
  return (
    <div>
    <section className="w-screen h-screen bg-[url('/atelier/heroImg.png')] bg-cover bg-center flex flex-col justify-center items-start gap-y-15">
    <div className='lg:hidden flex justify-between w-screen px-10 text-[16px]'>
      <p className='text-[18px]'>Toronto</p>
      <p className=''>info@vedaracollective.ca</p>
    </div>
    <div className='flex w-screen justify-between items-center lg:items-start px-10 lg:px-30'>
      <h3 className='w-[770px] text-[24px] lg:text-[40px]'>A cultural studio for the ultra-conscious, those who understand that a brand is a contribution to the ongoing narrative of human excellence.</h3>

      <div className='hidden lg:flex flex-col items-end gap-y-2'>
        <p className='uppercase text-[24px]'>Toronto</p>
        <p className='text-[16px]'>info@vedaracollective.ca</p>
      </div>
    </div>
    <p className='border-b border-white w-[184px] lg:w-[207px] text-[14px] lg:text-[16px] pb-1 ml-10 lg:ml-30'>Enter the World of Vedara</p>
    </section>

    <section className='flex flex-col items-center gap-y-18 text-[16px] py-25 w-screen min-h-screen'>
      <div className='flex flex-col gap-9 w-[431px] lg:flex-row lg:justify-between lg:px-23 lg:w-screen'>
        <p className='uppercase'>What we do</p>
        <p className='text-right lg:w-[370px] lg:text-left'>We develop the identity, strategy, and digital infrastructure that takes your brand from competition to cultural dominion.</p>
      </div>

      <div className='flex justify-between items-center w-[431px] uppercase max-w-screen'>
        <p>[01]</p>
        <p className='lg:text-[28px]'>luxury brand strategy.</p>
      </div>

      <div className="flex flex-col justify-center items-center text-center w-[300px] gap-y-12 lg:flex-row lg:w-screen lg:text-left lg:px-25 lg:gap-x-13">
        <div className='flex flex-col gap-9'>
          <p className=''>Strategic Positioning</p>
          <p className=''>We identify the intellectual and emotional territory your brand can own. Through competitive intelligence, culture-mapping, and behavioural insight, we carve out a position that elevates you out of the market and into your own category.</p>
        </div>

        <div className='flex flex-col gap-9'>
          <p className=''>Visual Identity Systems</p>
          <p className=''>A complete, high-fidelity identity suite that captures the soul of your brand—logos, typography, chromatic worlds, form language, and scalable identity systems designed to travel across mediums without losing elegance or authority.</p>
        </div>

        <div className='flex flex-col gap-9'>
          <p className=''>Verbal Identity & Voice</p>
          <p className=''>We craft a verbal identity that feels unmistakably yours—tone of voice, vocabulary frameworks, communication patterns, and signature language that turn every written interaction into a recognisable expression of the brand.</p>
        </div>
      </div>

      <div className='flex justify-between items-center w-[431px] lg:w-[350px] lg:mr-100 uppercase max-w-screen'>
        <p>[02]</p>
        <p className='lg:text-[28px]'>Digital marketing.</p>
      </div>

      <div className='flex justify-between items-center w-[431px] lg:w-[460px] lg:ml-10 uppercase max-w-screen'>
        <p>[03]</p>
        <p className='lg:text-[28px]'>web development & tech.</p>
      </div>

    </section>

    <section className="bg-primary text-black py-30 px-10 flex flex-col justify-center items-center gap-y-10">
      <div className="flex items-center gap-x-23 mb-10">
        <img src="/atelier/img1.png" alt="img1" className='' />
        <div className="flex flex-col gap-4 w-[650px]">
          <p className="uppercase text-[22px]">
            our philosophy
          </p>
          <p className='text-[36px] lg:w-[605px]'>
            Excellence Is Inevitable When You Build With Intention
          </p>
          <p className='lg:w-[430px]'>
            We partner with the few who understand that true luxury.
            While others seek attention, we build authority!
          </p>
          <img src="/atelier/img2.png" alt="img2" className='my-10'/>
          <p className="text-right lg:ml-58 lg:w-105">
            Your brand deserves to become a reference point,
            not another participant.
          </p>
        </div>
      </div>

      <p className="text-center lg:w-[686px]">
        Every brand we shape begins as an idea, then evolves into a Legacy a narrative powerful enough to influence culture, shape desire,and endure long after its originator has stepped aside.
      </p>

      <p className="border-b border-black pb-1">
        Share Your Vision 
      </p>
    </section>

    <section className='flex flex-col justify-center items-center gap-y-22 bg-black py-30'>
      <div className="flex flex-col text-center gap-7">
        <p className='text-[22px]'>Our Approach</p>
        <p className='w-200 text-[28px]'>We create a complete universe identity, narrative, digital presence, and experience. So your story is not just seen, but felt, remembered, and passed down.</p>
      </div>

      <div className='flex gap-x-25 mt-32'>
        <p>[01]</p>
        <div className="flex flex-col gap-11">
          <p className="uppercase text-[30px]">the listening</p>
          <p className='w-[300px]'>We begin by absorbing values, histories, ambitions, contradictions. Not just what is said, but what is meant.That’s when clarity begins to take form.</p>
        </div>
        <img src="/atelier/img3.png" alt="img3" className='bottom-24 relative' />
      </div>

      <div className='flex flex-row-reverse gap-x-25'>
        <p>[02]</p>
        <div className="flex flex-col gap-11">
          <p className="uppercase text-[30px]">the revelation</p>
          <p className='w-[300px]'>This is the moment clarity emerges.Your cultural identity, intention, and emotional promise is understood.We focus on the essence that sets your brand apart from the world.</p>
        </div>
        <img src="/atelier/img4.png" alt="img4" className='top-24 relative' />
      </div>

    </section>

    <section className="flex flex-row-reverse justify-between bg-primary text-black">
      <img src="/atelier/img7.png" alt="img7" />
      <div className="flex flex-col justify-center lg:px-23 py-20 gap-y-10 border">
        <p className="text-[22px]">
          Featured Projects
        </p>
        <p className='text-[30px]'>
          Our portfolio is a curated anthology of ideas brought to life, from heritage-rooted brands to future-thinking digital ecosystems. Every creation reflects our devotion to detail, narrative, and timeless aesthetic discipline.
        </p>
        <p className="border-b border-black pb-1 lg:w-52 mt-65 text-[16px]">
          Call to private conversation
      </p>
      </div>
    </section>

    <section className='flex flex-col justify-center items-center gap-y-25 py-30 bg-black'>
      <div className="flex flex-col justify-center items-center text-center gap-y-7">
        <p className='text-[22px]'>Blogs</p>
        <p className='w-150 text-[28px]'>Where perspective becomes power, and knowledge becomes a creative asset.</p>
        <p className="w-25 border-b border-white pb-1">
          Explore
        </p>
      </div>

      <div className="flex gap-6" >
        <div className="flex flex-col w-[396px] h-[566px] p-10 gap-y-13 top-10 relative">
          <img src="/atelier/img8.png" alt="img8" className='absolute inset-0' />
          <div className="flex justify-between z-1">
            <p>21 SEP 2025</p>
            <p>8 Mins</p>
          </div>
          <h2 className='text-[32px] z-1'>
            How Luxury Brands Destroy Their Cultural Authority
          </h2>

          <div className='mt-40 w-25 border-b border-white pb-1 z-1'>
            Read More
          </div>
        </div>

        <div className="flex flex-col w-[396px] h-[566px] p-10 gap-y-13 relative">
          <img src="/atelier/img9.png" alt="img9" className='absolute inset-0' />
          <div className="flex justify-between z-1">
            <p>21 SEP 2025</p>
            <p>8 Mins</p>
          </div>
          <h2 className='text-[32px] z-1'>
            How Luxury Brands Destroy Their Cultural Authority
          </h2>

          <div className='mt-40 w-25 border-b border-white pb-1 z-1'>
            Read More
          </div>
        </div>

        <div className="flex flex-col w-[396px] h-[566px] p-10 gap-y-13 top-10 relative">
          <img src="/atelier/img10.png" alt="img10" className='absolute inset-0' />
          <div className="flex justify-between z-1">
            <p>21 SEP 2025</p>
            <p>8 Mins</p>
          </div>
          <h2 className='text-[32px] z-1'>
            How Luxury Brands Destroy Their Cultural Authority
          </h2>

          <div className='mt-40 w-25 border-b border-white pb-1 z-1'>
            Read More
          </div>
        </div>
      </div>
    </section>

    <section className='w-screen h-screen flex flex-col justify-center gap-y-7 p-23 relative'>
      <img src="/home-bg.png" alt="home" className='absolute w-screen h-screen object-cover inset-0 -z-1' />
      <div className="absolute inset-0 bg-black/10 w-screen h-screen" />
      <h1 className=" w-105 text-[36px]">True Luxury Is Not Ornament</h1>
      <p className='w-[375px]'>It is the Mastery of Intention Expressed with Such Precision that It Becomes Impossible to Ignore!</p>
      <div className="w-full border-b border-white"></div>
    </section>

    </div>
  )
}

export default page