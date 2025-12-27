import Link from 'next/link';
import ArrowForwardIosOutlinedIcon from '@mui/icons-material/ArrowForwardIosOutlined';
import PlaceOutlinedIcon from '@mui/icons-material/PlaceOutlined';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import MailOutlineIcon from '@mui/icons-material/MailOutline';

const Footer = () => {
  return (
    <div className="w-screen h-screen pt-23 lg:px-23 flex flex-col justify-end lg:justify-center items-center lg:items-start bg-[linear-gradient(rgba(0,0,0,0.57)),url('/home-bg.png')] bg-cover bg-center">
      <h2 className="w-[300px] md:w-[324px] lg:w-[514px] text-[26px] lg:text-[38px] text-center lg:text-left leading-normal">
        Begin <span className="font-semibold italic">Building</span> What the Future Will <span className="font-semibold italic">Remember</span>
      </h2>

      <p className="mt-10 w-[300px] md:w-[460px] lg:w-[518px] text-[14px] lg:text-[16px] text-center lg:text-left">
        True luxury is Not Ornament, It is the Mastery of Intention Expressed with Such Precision that It Becomes Impossible to Ignore!
      </p>

      <div className="w-full hidden lg:block mt-10 border-t border-white/80"/>

      <div className="lg:hidden mt-12 text-[16px] flex flex-col justify-center items-center gap-2">
        <Link href="/" className="cursor-pointer hover:opacity-70">Home</Link>
        <Link href="/" className="cursor-pointer hover:opacity-70">About</Link>
        <Link href="/" className="cursor-pointer hover:opacity-70">Vedara Dynasty</Link>
        <Link href="/" className="cursor-pointer hover:opacity-70">Case Study</Link>
        <Link href="/" className="cursor-pointer hover:opacity-70">Blog</Link>
        <Link href="/" className="cursor-pointer hover:opacity-70">Contact</Link>
      </div>

      <div className="w-full min-h-[220px] text-white pt-12 hidden lg:flex flex-col justify-between">
      
      {/* Top Row */}
      <div className="flex flex-col lg:flex-row justify-between gap-12 text-[14px] leading-relaxed">
        
        {/* Left */}
        <div className="flex flex-col gap-2 text-[16px] font-extralight">
          <p>20 Bay Street 11th Floor, Toronto, Canada</p>
          <p>Vedara Collective Corp.</p>
        </div>

        {/* Center Navigation */}
        <div className="flex gap-20">
          <div className="flex flex-col gap-2">
            <Link href="/" className="cursor-pointer hover:opacity-70">Home</Link>
            <Link href="/" className="cursor-pointer hover:opacity-70">About</Link>
          </div>

          <div className="flex flex-col gap-2">
            <Link href="/dynasty" className="cursor-pointer hover:opacity-70">Vedara Dynasty</Link>
            <Link href="/portfolio" className="cursor-pointer hover:opacity-70">Case Study</Link>
          </div>

          <div className="flex flex-col gap-2">
            <Link href="/blog" className="cursor-pointer hover:opacity-70">Blog</Link>
            <Link href="/contact" className="cursor-pointer hover:opacity-70">Contact</Link>
          </div>
        </div>

        {/* Right */}
        <div className="flex flex-col gap-6 text-right">
          <div className="flex flex-col gap-2">
            <p className="cursor-pointer hover:opacity-70">LinkedIn</p>
            <p className="cursor-pointer hover:opacity-70">Instagram</p>
          </div>

          <div className="flex gap-6 justify-end opacity-80">
            <p className="cursor-pointer hover:opacity-70">Terms</p>
            <p className="cursor-pointer hover:opacity-70">Privacy Policy</p>
          </div>
        </div>

      </div>

      {/* Bottom */}
      <div className="text-[14px] font-extralight mt-10">
        © Vedara — Building Brands Worth Inheriting.
      </div>

      </div>

    <div className="mt-12 py-12 backdrop-blur-[10px] w-screen flex flex-col justify-center items-center gap-y-4 lg:hidden">
      <h2 className='uppercase text-[20px]'>vedara</h2>
      <p className="font-extralight">
        20 Bay Street 11th Floor, Toronto, Canada
      </p>
      <p className="font-extralight">
        © Vedara — Building Brands Worth Inheriting.
      </p>
      <div className="flex justify-center gap-2">
        <Link href="/" className='font-extralight'>LinkedIn</Link>
        <Link href="/" className='font-extralight'>Instagram</Link>
      </div>
    </div>
    </div>
  )
}

export default Footer