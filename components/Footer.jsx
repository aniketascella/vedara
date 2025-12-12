import Link from 'next/link';
import ArrowForwardIosOutlinedIcon from '@mui/icons-material/ArrowForwardIosOutlined';
import PlaceOutlinedIcon from '@mui/icons-material/PlaceOutlined';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import MailOutlineIcon from '@mui/icons-material/MailOutline';

const Footer = () => {
  return (
    <div className="w-screen pt-42 flex flex-col justify-center items-center bg-[linear-gradient(rgba(0,0,0,0.57)),url('/home-bg.png')] bg-cover bg-center">
      <h2 className="w-[300px] lg:w-[941px] text-[16px] lg:text-[32px] text-center leading-normal">
        True luxury is Not Ornament, It is the Mastery of Intention Expressed with Such Precision that It Becomes Impossible to Ignore!
      </h2>

      <p className="mt-10 w-[250px] lg:w-[520px] text-center text-[14px] lg:text-[16px]">
        For the founders who refuse dilution. We offer a path toward building something sovereign, influential, and uncompromising.
      </p>

      <button className="mt-10 w-40 h-10 lg:w-70 lg:h-14 rounded-full backdrop-blur-xl text-[14px] lg:text-[16px]">
        <Link href='/atelier'>
          <div className="flex justify-center items-center gap-4 lg:gap-6">
            Begin Your Empire
            <ArrowForwardIosOutlinedIcon/>
          </div>
        </Link>
      </button>

      <div className="mt-15 pt-5 lg:pt-26 pb-11 backdrop-blur-xs w-screen flex flex-col justify-end items-center lg:items-end gap-y-8">
        <div className='flex flex-col-reverse lg:flex-row lg:justify-between w-screen px-10'>
          <div className="font-editorial flex flex-col items-center lg:items-start gap-4 lg:gap-2">
            <p className='text-[18px] lg:text-[36px]'>VEDARA</p>
            <div className="flex flex-col lg:flex-row items-center gap-2">

              <div className='flex'>
                <PlaceOutlinedIcon className='hover:cursor-pointer'/>
                <p style={{fontWeight:100}}> 20 Bay Street 11th Floor, Toronto, Canada</p>
              </div>

              <div>
                <InstagramIcon className='hover:cursor-pointer'/>
                <LinkedInIcon className='hover:cursor-pointer'/>
                <MailOutlineIcon className='hover:cursor-pointer'/>
              </div>

            </div>
          </div>
          <div className="flex flex-col gap-y-6 lg:gap-y-2 mb-20 lg:mb-0 items-center lg:items-end font-light">
            <ul className="flex gap-6 lg:list-disc list-inside">
              <li className='hover:cursor-pointer'>Home</li>
              <li className='hover:cursor-pointer'>Studio</li>
              <li className='hidden lg:block hover:cursor-pointer'>Case Study</li>
              <li className='hidden lg:block hover:cursor-pointer'>Blog</li>
              <li className='hover:cursor-pointer'>Vedara Dynasty</li>
            </ul>

            <ul className="lg:hidden flex gap-6 list-inside">
              <li className='hover:cursor-pointer'>Blog</li>
              <li className='hover:cursor-pointer'>Case Study</li>
              <li className='hover:cursor-pointer'>Privacy Policy</li>
            </ul>

            <ul className="flex gap-6 lg:list-disc list-inside">
              <li className='hidden lg:block hover:cursor-pointer'>Initiate</li>
              <li className='hidden lg:block hover:cursor-pointer'>Privacy Policy</li>
              <li className='hover:cursor-pointer'>Terms</li>
            </ul>
          </div>
        </div>
        <p className='font-editorial text-[12px] lg:mr-10'>
          © Vedara — Building Brands Worth Inheriting
        </p>
      </div>
    </div>
  )
}

export default Footer