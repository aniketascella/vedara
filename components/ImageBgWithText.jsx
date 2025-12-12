import { ArrowForwardOutlined } from "@mui/icons-material"
import Image from "next/image"
import Link from "next/link"

const ImageBgWithText = ({img, bgcolor ="bg-[#AEA797]", txtcolor="text-black", heading, text, explore, exploreLink="/portfolio", number}) => {
  return (
    <div className={`flex flex-col lg:flex-row justify-between gap-10 p-5 w-[300px] lg:w-[900px] ${bgcolor}`}>
      <div className={`flex flex-col gap-6 mt-15 ${txtcolor} text-[16px] w-[250px] lg:w-[318px]`}>
        <div className="flex justify-between items-center">
        <p className="uppercase">{heading}</p>
        <p className="lg:hidden text-[20px]">{number}</p>
        </div>
        <p className="font-light">{text}</p>
        <p className="font-medium text-[20px]">
          <Link href={exploreLink}>
            {explore} <ArrowForwardOutlined/>
          </Link>
        </p>
        <p className="hidden lg:block mt-auto text-[20px]">{number}</p>
      </div>

      <Image alt="img1" className="h-[310px] lg:h-[470px]" width={457} height={470} src={img}/>
    </div>
  )
}

export default ImageBgWithText