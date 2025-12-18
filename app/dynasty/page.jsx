import React from 'react'

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

      <section className="flex flex-col justify-center items-center gap-5 w-screen py-35 relative">
        
      </section>
    </div>
  )
}

export default page