'use client'

import Footer from '@/components/Footer';
import {useState, useEffect, useRef} from 'react';
import Image from 'next/image';

const principles = [
  {
    id: "01",
    title: "HAND-VETTED BY\nHUMAN INTELLIGENCE",
    image: "/dynasty/img1.png",
  },
  {
    id: "02",
    title: "DEMONSTRATE\nGENERATIONAL PURPOSE",
    image: "/dynasty/img2.png",
  },
  {
    id: "03",
    title: "DESIGNED TO ENDURE",
    image: "/dynasty/img3.png",
  },
  {
    id: "04",
    title: "CONTINUITY IN PURPOSE",
    image: "/dynasty/img4.png",
  },
];

const page = () => {
  const itemRefs = useRef([]);
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = Number(entry.target.dataset.index);
            setActiveIndex(index);
          }
        });
      },
      {
        rootMargin: "-45% 0px -45% 0px",
        threshold: 0,
      }
    );

    itemRefs.current.forEach((el) => el && observer.observe(el));
    return () => observer.disconnect();
  }, []);

  const total = principles.length;
  const segmentHeight = 100 / total;
  const segmentTop = activeIndex * segmentHeight;

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
        <div className="flex flex-col lg:flex-row lg:justify-between lg:w-screen gap-y-6 px-15 lg:px-23">
          <div className="flex flex-col gap-y-8">
            <p className="uppercase text-[24px] lg:text-[36px] w-[300px] md:w-[445px] lg:w-[674px] leading-snug">
              A Private Ecosystem Engineered for Excellence
            </p>
            <p className="w-70 md:w-[335px] lg:w-116 text-[14px] lg:text-[16px]">
              Vedara Dynasty operates through a protected, invitation-only infrastructure designed for absolute trust and emotional resonance.
            </p>
          </div>
          <p className="lg:text-right lg:w-[335px]">
            Every project is vetted for meaning, resonance, and a future measured in decades.
          </p>
        </div>

        <div className=" min-h-screen mt-21 lg:mt-34 lg:py-24">
          {/* Header */}
          <p className="w-[300px] md:w-[92px] lg:w-170 mx-auto text-[20px] lg:text-[34px] leading-tight mb-24">
            The Dynasty Is Governed By Principles
            <br />
            That Protect Purity, Rarity, And Meaning.
          </p>

          <div className="grid grid-cols-2">
            {/* LEFT – Scrollable principles */}
            <div className="relative w-screen lg:w-127 lg:h-[70vh] overflow-y-scroll">
              <div className="absolute left-10 lg:left-0 top-0 h-full w-0.5 bg-black/10">
                <div
                  className="absolute left-0 w-full bg-black transition-all duration-500 ease-out"
                  style={{
                    height: `${segmentHeight}%`,
                    top: `${segmentTop}%`,
                  }}
                />
              </div>

              <div className="flex flex-col gap-28 pl-10">
                {principles.map((item, i) => (
                  <div
                    key={item.id}
                    ref={(el) => (itemRefs.current[i] = el)}
                    data-index={i}
                    className="flex flex-col lg:flex-row gap-6 items-start pl-10"
                  >
                    <div className="flex gap-4">
                      <span
                        className={`text-sm transition-opacity duration-300 ${
                          activeIndex === i ? "text-black" : "text-black/30"
                        }`}
                      >
                        ({item.id})
                      </span>

                      <p
                        className={` text-[16px] leading-relaxed transition-opacity duration-300 ${
                          activeIndex === i ? "opacity-100" : "opacity-30"
                        }`}
                      >
                        {item.title}
                      </p>
                    </div>

                    <div
                      className={`lg:hidden overflow-hidden transition-all duration-500 ease-out ${
                        activeIndex === i
                          ? "max-h-60 opacity-100"
                          : "max-h-0 opacity-0"
                      }`}
                    >
                      <div className="relative w-full h-[220px] rounded-xl overflow-hidden">
                        <img
                          src={item.image}
                          alt="principle image"
                          className="w-[300px] object-cover"
                        />
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>


            <div className="hidden lg:block relative top-20 h-fit">
              <div className="relative w-[435px] h-[420px] rounded-xl overflow-hidden">
                <Image
                key={principles[activeIndex].id}
                  src={principles[activeIndex].image}
                  alt="Dynasty principle"
                  fill
                  className="object-cover transition-opacity duration-500"
                  priority
                />
              </div>
            </div>
          </div>
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

      <section className="flex flex-col bg-black text-white w-screen">
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between w-screen">
          <div className="flex flex-col gap-3 w-1/2 px-10 lg:pl-27 py-21 lg:pb-39">
            <p className="w-[300px] md:w-[373px] lg:w-[509px] text-[24px] lg:text-[36px] ">
              For Investors Seeking Meaningful Ownership
            </p>
            <p className='w-70 md:[323px] lg:w-121 text-[14px] lg:text-[16px]'>
              Ownership, at this level, is not transactional, it is civilizational. Vedara Dynasty offers access to rare, heritage-aligned assets whose value is measured in architectural truth. 
            </p>
            <p className="w-70 md:[323px] lg:w-121 text-[14px] lg:text-[16px]">
              Every opportunity is presented through a lens of long-term stewardship. Here, investment is something that carries your principles forward into time.
            </p>
            <p className="border-b border-white pb-1 w-60">
              Explore Curated Opportunities
            </p>
          </div>
          <img src="/dynasty/img14.png" alt="img14" className='object-cover h-screen' />
        </div>

        <div className="flex flex-col lg:flex-row-reverse lg:justify-between w-screen">
          <div className="flex flex-col gap-3 w-1/2 px-10 lg:px-0 py-21 lg:pt-39">
            <p className="w-[300px] md:w-[373px] lg:w-[509px] text-[24px] lg:text-[36px] ">
              For Founders Seeking a Worthy Circle
            </p>
            <p className='w-70 md:[323px] lg:w-121 text-[14px] lg:text-[16px]'>
              Visionaries building places worthy of reverence deserve a sanctuary of aligned capital. Vedara Dynasty elevates founders who create with intention and architectural authenticity.
            </p>
            <p className="w-70 md:[323px] lg:w-121 text-[14px] lg:text-[16px]">
              Your project is not listed; it is honoured, refined, and positioned to meet investors who value soul, longevity, and significance.
            </p>
            <p className="border-b border-white pb-1 w-36">
              Submit Your Vision 
            </p>
          </div>
          <img src="/dynasty/img15.png" alt="img15" className='h-screen object-cover object-center' />
        </div>
      </section>

      <section className="flex flex-col justify-center w-screen items-center lg:items-end gap-12 py-34 lg:pr-50 text-black bg-primary border">
        <div className="flex gap-26 lg:gap-37 lg:py-21 px-[5vw] lg:border-t lg:border-b lg:border-[#2A2927]">
          <p className="uppercase md:w-[373px] text-center lg:text-left lg:text-[36px]">
            Investment Circle Shaped for the Next Century
          </p>

          <p className="hidden lg:flex w-[300px] md:w-[500px] text-[22px]">
            Each project is screened for depth, heritage value, design philosophy, and the potential to become a generational asset, not a market-dependent investment.
          </p>

        </div>
        <p className="lg:hidden py-[10vh] md:py-15 lg:py-21 px-[5vw] border-t border-b border-[#2A2927] md:px-20 w-[300px] md:w-[500px] text-[14px]">
          Each project is screened for depth, heritage value, design philosophy, and the potential to become a generational asset, not a market-dependent investment.
        </p>
        <p className="py-[10vh] lg:py-21 px-[5vw] md:py-15 md:px-20 lg:px-0 w-[300px] md:w-[500px] text-[14px] lg:text-[22px]">
          Vedara limits entries to those that embody excellence. Every asset undergoes rigorous assessment, ensuring investors see only what is worthy of their time and capital.
        </p>
        <p className="py-[10vh] lg:py-21 px-[5vw] md:py-15 md:px-20 lg:px-0 w-[300px] md:w-[500px] text-[14px] lg:text-[22px]">
          Projects are chosen for longevity, environmental stewardship, and their ability to become markers of identity and inheritance for decades to come.
        </p>

        <div className='px-[5vw] md:px-20 lg:px-0 w-[300px] md:w-[500px]'>
          <p className="w-34 border-b border-black pb-1">
            Request Invitation
          </p>
        </div>
      </section>

      <section className="bg-black flex flex-col justify-center items-center lg:items-start gap-12 lg:gap-18 lg:pl-65 pt-27 pb-55">
        <p className="uppercase w-[300px] md:w-90 lg:w-125 lg:text-[36px]"> 
          Confidentiality & Access Protocol
        </p>

        <div className="flex flex-col justify-center lg:flex-row-reverse lg:items-center gap-12 lg:gap-18">
          <div className="flex flex-col gap-12 lg:gap-3 text-[16px] lg:text-[22px]">
            <p className="w-60 lg:w-75 lg:mb-17">
              Vedara Dynasty Operates Within a Closed Circle.
            </p>
            <p>(01)</p>
            <p className="w-84 font-extralight text-[12px] lg:text-[16px]">
              All dossiers, communications, and project materials are safeguarded under strict mutual NDAs—preserving confidentiality of every interaction.
            </p>

            <p>(02)</p>

            <p className="w-84 font-extralight text-[12px] lg:text-[16px]">
              Access is granted exclusively to verified investors, each individually cleared before receiving invitations to alignment sessions.
            </p>
          </div>

          <img src="/dynasty/img16.png" alt="img16" className="w-[300px] md:w-115" />
        </div>
      </section>

      <Footer/>
    </div>
  )
}

export default page