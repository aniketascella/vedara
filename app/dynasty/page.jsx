import React from 'react'

const principles = [
  {
    id: "01",
    title: "HAND-VETTED BY\nHUMAN INTELLIGENCE",
  },
  {
    id: "02",
    title: "DEMONSTRATE\nGENERATIONAL PURPOSE",
  },
  {
    id: "03",
    title: "DESIGNED TO ENDURE",
  },
  {
    id: "04",
    title: "CONTINUITY IN PURPOSE",
  },
];

const page = () => {
  return (
    <div>
      <section className="flex flex-col justify-center items-center gap-5 w-screen py-50 relative">
        <div className="absolute -z-1 w-full h-full">
          <img
            src="/dynasty/heroImg.png"
            alt="hero"
            className="w-full h-full will-change-transform object-center object-cover"
            style={{ transformOrigin: "center center" }}
          />
        </div>

        <h1 className='w-screen lg:w-[720px] text-center text-[22px] lg:text-[36px] px-10 lg:px-0'>
          Vedara selects <span className='italic'>creations</span> that hold within them the <span className="italic">architecture</span> of a civilization yet to emerge
        </h1>

        <p className='w-screen lg:w-[579px] text-center text-[16px] lg:text-[18px] px-20 lg:px-0'>
          Every creation is chosen for its potential to outlive markets and eras. Vedara Dynasty is an ecosystem where only the rarest concepts earn their place.
        </p>

        <div className="flex flex-col lg:flex-row justify-center items-center mt-10 gap-12 text-[16px] lg:text-[20px]">
          <div className='flex flex-col gap-6 w-[345px] py-14 px-8 rounded-2xl backdrop-blur-lg'>
            <p className='w-[284px] font-semibold'>For Visionaries - Present Your Masterwork</p>
            <button className='w-43 lg:w-60 border rounded-full text-[16px] py-3 lg:px-12'><h3>Enter the Threshold</h3></button>
          </div>

          <div className='flex flex-col gap-4 w-[345px] py-14 px-8 rounded-2xl backdrop-blur-lg'>
            <p className='w-[284px] font-semibold'>For Collectors - Discover the Future Classics</p>
            <button className='border w-43 lg:w-60 rounded-full text-[16px] py-3'> <h3>Enter the Threshold</h3></button>
          </div>
        </div>

      </section>

      <section className="flex flex-col justify-center items-center gap-5 w-screen py-35 relative bg-primary text-black">
        <div className="flex flex-col lg:flex-row lg:justify-between lg:w-screen lg:px-23">
          <div className="flex flex-col gap-y-8">
            <p className="uppercase text-[24px] lg:text-[36px] w-[300px] md:w-[445px] lg:w-[674px] leading-snug">
              A Private Ecosystem Engineered for Excellence
            </p>
            <p className="w-70 md:w-[335px] lg:w-116 text-[14px] lg:text-[16px]">
              Vedara Dynasty operates through a protected, invitation-only infrastructure designed for absolute trust and emotional resonance.
            </p>
          </div>
          <p className="text-right lg:w-[335px]">
            Every project is vetted for meaning, resonance, and a future measured in decades.
          </p>
        </div>
      </section>

      <section className='bg-black flex flex-col justify-center py-35 gap-7 lg:gap-11 pl-8 md:pl-19 lg:pl-37'>
        <p className="uppercase w-[300px] md:w-100 lg:w-202 text-[20px] md:text-[24px] lg:text-[36px] pl-8 md:pl-19 lg:pl-37">
          Where Brands Become Cultural Contributors, Not Market Participants
        </p>
        <p className="lg:w-122 text-[14px] lg:text-[16px] pl-8 md:pl-19 lg:pl-37">
          Vedara shapes identities that influence categories, shift language, and imprint on collective memory.
        </p>
        <div className="flex flex-col lg:flex-row justify-center items-center gap-12">
          <div className="bg-primary flex flex-col gap-6 w-[300px] md:w-120 lg:w-84 rounded-2xl p-5">
            <img src="/dynasty/img2.png" alt="img2" className="relative w-full object-cover" />
            <p className="text-right">
              Entrepreneurs struggle to access serious, verified, values-aligned investors.
            </p>
          </div>

          <div className="bg-background flex flex-col gap-21 lg:gap-44 w-[300px] md:w-120 lg:w-84 rounded-2xl p-5">
            <img src="/dynasty/quoteIcon.svg" alt="img2" className="relative w-13 h-9" />
            <p className="">
              Investors face low-quality deal flow + overwhelming noise
            </p>
          </div>

          <div className="bg-primary flex flex-col gap-6 w-[300px] md:w-120 lg:w-84 rounded-2xl p-5">
            <div className="flex gap-6">
              <img src="/dynasty/img3.png" alt="img3" className="relative object-cover rounded-xl" />
              <div className="flex flex-col gap-4">
                <p>01</p>
                <p>Platforms prioritise volume over true curation.</p>
              </div>
            </div>
            <div className="flex gap-6">
              <img src="/dynasty/img4.png" alt="img4" className="relative object-cover rounded-xl" />
              <div className="flex flex-col gap-4">
                <p>02</p>
                <p>Platforms prioritise volume over true curation.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className='flex flex-col justify-center items-center gap-5 lg:gap-37 w-screen py-35 relative'>
        <div className="absolute -z-1 w-full h-full">
          <img
            src="/dynasty/img5.png"
            alt="img5"
            className="w-full h-full will-change-transform object-top object-cover"
            style={{ transformOrigin: "center center" }}
          />
        </div>

        <p className="text-center uppercase text-[24px] lg:text-[36px] w-[300px] md:w-[383px] lg:w-[768px]">
          A Private Ecosystem Engineered for Enduring Value
        </p>

        <div className="flex justify-center items-center gap-4 lg:gap-10">
          <img src="/dynasty/img6.png" alt="img6" className="w-35 lg:w-53" />
          <h2 className='lg:text-[28px]'><span className="font-semibold italic">Invitation-Only</span> Access</h2>
        </div>
      </section>
    </div>
  )
}

export default page