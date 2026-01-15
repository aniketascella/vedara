"use client";

import React, { useEffect, useState, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Instagram, Twitter } from "@mui/icons-material";
import CloseIcon from '@mui/icons-material/Close';
import MobileNavOverlay from "./MobileNavOverlay";

export default function Navbar() {
  const pathname = usePathname();
  const [hovered, setHovered] = useState(null);
  const router = useRouter();
  const [menuOpen, setMenuOpen] = useState(false);
  const [sidebarOpen, setSidebarOpen] = useState(false);

  
  const active = pathname === "/atelier" ? "atelier" : pathname==="/capital" ? "capital" : pathname === "/" ? "home" : pathname === "/portfolio" ? "portfolio" :  pathname === "/contact" ? "contact" : "insight";
  
  const isActiveRoute = pathname === "/atelier" || pathname === "/capital";
  

  return (
    <header className="w-screen fixed top-[42px] z-50 flex justify-between items-center px-12 lg:px-26">
      {/* <div
        className={`${
          pathname === "/" ? "opacity-0 pointer-events-none" : "opacity-100 pointer-events-auto"
        } w-screen h-28 flex justify-between items-center px-8 lg:px-24 text-[16px] xl:text-[18px] leading-relaxed`}
      >
        <div className="flex justify-center items-end gap-x-8">

          <h1 className="text-[24px]">
            <Link href="/">VEDARA</Link>
          </h1>
          {isVisible && 
            <div className="relative hidden lg:flex lg:items-center rounded-full bg-[#3a332b] py-2 hover:cursor-pointer">
              <span
                className={`hover:cursor-pointer absolute h-full w-1/2 rounded-full bg-tertiary transition-transform duration-400 ease-out ${
                  active === "dynasty" ? "translate-x-full" : "translate-x-0"
                }`}
              />

              <Link href="/atelier" className="hover:cursor-pointer">
                <button
                  onClick={() => router.push("/atelier")}
                  className={`relative font-editorial z-10 px-6 text-sm italic transition-colors duration-300 ${
                    active === "atelier" ? "text-white" : "text-[#b8b1a7]"
                  } hover:cursor-pointer`}
                >
                  Atelier
                </button> 
              </Link>

              <Link href="/dynasty" className="hover:cursor-pointer">
                <button
                  onClick={() => router.push("/dynasty")}
                  className={`hover:cursor-pointer relative font-editorial z-10 px-6 text-sm italic transition-colors duration-300 ${
                    active === "dynasty" ? "text-white" : "text-[#b8b1a7]"
                  }`}
                >
                  Dynasty
                </button>
              </Link>
            </div>
          }
          {pathname==="/atelier" && <h2 className="lg:hidden text-[24px] italic">Atelier</h2>}
          {pathname==="/dynasty" && <h2 className="lg:hidden text-[24px] italic">Dynasty</h2>}
        </div>


        <motion.nav
          initial={{x:0, opacity:1}}
          className="hidden lg:flex items-center gap-5 uppercase "
          animate={
            navEnabled
            ? { x: 24, opacity: 1 }
            : { x: -24, opacity: 0 }
          }
          
          transition={{ duration: 0.5, ease:"easeOut"}}
          onAnimationComplete={() => {
            if (scrolledPastVH) {
              setTimeout(() => setShowMenuIcon(true),80);
            }
          }}
        >
          <Link href="/portfolio"><p className="">portfolio</p></Link>
          <Link href="/insight"><p className="">insight</p></Link>
          <Link href="/atelier"><p className="">atelier</p></Link>
          <Link href="/blogs"><p className="">blogs</p></Link>
          <Link href="/dynasty"><p className="">dynasty</p></Link>
          <Link href="/contact"><p className="">contact</p></Link>
        </motion.nav>
       
        <AnimatePresence>
          {showMenuIcon && scrolledPastVH && (
            <motion.button
              key="box-btn"
              onClick={() => setSidebarOpen((s) => !s)}
              initial={{ x: 24, opacity: 0, rotate: 0 }}
              animate={{ x: 0, opacity: 1,  rotate: sidebarOpen ? 180 : 0 }}
              exit={{ x: 24, opacity: 0 }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
              className="hidden lg:flex z-40 items-center justify-center w-6 h-6 backdrop-blur cursor-pointer"
            >
              {sidebarOpen ? (
                <CloseIcon className="text-black" fontSize="large" />
              ) : (
                <Image alt="menu" width={37} height={9} src="/menuIcon.svg" />
              )}
            </motion.button>
          )}
        </AnimatePresence>

        <AnimatePresence>
          <motion.button
            onClick={() => setSidebarOpen((s) => !s)}
            initial={{ x: 24, opacity: 0, rotate: 0 }}
            animate={{ x: 0, opacity: 1,  rotate: sidebarOpen ? 180 : 0 }}
            exit={{ x: 24, opacity: 0 }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
            className="lg:hidden z-40 items-center justify-center w-6 h-6 backdrop-blur cursor-pointer"
          >
            {sidebarOpen ? (
              <CloseIcon className="text-black" fontSize="large" />
            ) : (
              <Image alt="menu" width={37} height={9} src="/menuIcon.svg" />
            )}
          </motion.button>
        </AnimatePresence>
      </div> */}
      <div className="flex items-center gap-1">
        <img src="/vedara_logo.svg" alt="logo" className="w-10 lg:w-13"/>
        <Link href="/"><h2 className="text-[22px] lg:text-[30px] font-semibold">VEDARA</h2></Link>
      </div>

      <div className="rounded-full backdrop-blur-[5px] hidden lg:flex gap-14 items-center px-8 py-4 text-white border border-white/25">
        <Link href="/" className={active === "home" ? "opacity-100" : "opacity-50 hover:opacity-100"}>
          Home
        </Link>
        <Link href="/portfolio" className={active === "portfolio" ? "opacity-100" : "opacity-50 hover:opacity-100"}>
          Portfolio
        </Link>
        <Link href="/insight" className={active === "insight" ? "opacity-100" : "opacity-50 hover:opacity-100"}>
          Our Insights
        </Link>
        <Link href="/contact" className={active === "contact" ? "opacity-100" : "opacity-50 hover:opacity-100"}>
          Contact Us
        </Link>
      </div>

      <div onMouseEnter={() => setHovered(true)} onMouseLeave={() => setHovered(null)} className="relative rounded-full backdrop-blur-[5px] hidden lg:flex gap-5 items-center py-4 text-white border border-white/25 w-[214px]">
        {(isActiveRoute) && (
          <span
            className={`absolute inset-0 w-1/2 -z-2 rounded-full bg-primary/35 transition-transform duration-400 ease-out ${
              active === "capital" ? "translate-x-full" : "translate-x-0"
            }`}
          />
        )}
        {(!isActiveRoute && hovered) && (
          <span
            className={`absolute inset-0 w-1/2 -z-2 rounded-full bg-primary/35 transition-transform duration-400 ease-out ${
              hovered === "capital" ? "translate-x-full" : "translate-x-0"
            }`}
          />
        )}
        <Link onMouseEnter={()=> setHovered("atelier")} href="/atelier" className={`pl-10 ${active === "atelier" ? "opacity-100" : "opacity-50 hover:opacity-100"}`}>
          Atelier
        </Link>
        <Link onMouseEnter={()=> setHovered("capital")} href="/capital" className={`px-5 ${active === "capital" ? "opacity-100" : "opacity-50 hover:opacity-100"}`}>
          Capital
        </Link>
      </div>

      <img src="/menuIcon.svg" alt="menu" className="lg:hidden" onClick={() => setMenuOpen(true)} />

      <MobileNavOverlay open={menuOpen} onClose={() => setMenuOpen(false)} active ={pathname} />

      <AnimatePresence>
        {sidebarOpen && (
          <motion.aside
            key="sidebar"
            initial={{ scale: 0.02, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.02, opacity: 0 }}
            transition={{ type: "spring", stiffness: 250, damping: 30 }}
            style={{ transformOrigin: "top right" }}
            className="fixed top-0 right-0 h-screen w-[250px] md:w-[300px] lg:w-[400px] flex flex-col justify-center lg:justify-end z-35 bg-primary"
            role="dialog"
            aria-modal="true"
          >

            <div className="pl-10 lg:pl-15 flex flex-col gap-4 lg:gap-6 text-[16px] lg:text-[30px] font-editorial italic text-black lg:text-neutral-500 mb-30 lg:mb-40">
              <Link href="/atelier">
                <motion.p
                  whileHover={{ scale: 1.05 }}
                  transition={{ type: "spring", stiffness: 250 }}
                  className="hover:text-black origin-left"
                  onClick={() => setSidebarOpen(false)}>
                  Atelier
                </motion.p>
              </Link>
              <Link href="/portfolio">
                <motion.p 
                  whileHover={{ scale: 1.05 }}
                  transition={{ type: "spring", stiffness: 250 }}
                  className="hover:text-black origin-left"
                  onClick={() => setSidebarOpen(false)}>
                  Portfolio
                </motion.p>
              </Link>
              <Link href="/insight">
                <motion.p 
                  whileHover={{ scale: 1.05 }}
                  transition={{ type: "spring", stiffness: 250 }}
                  className="hover:text-black origin-left"
                  onClick={() => setSidebarOpen(false)}>
                  Insight
                </motion.p>
              </Link>
              <Link href="/dynasty">
                <motion.p
                  whileHover={{ scale: 1.05 }}
                  transition={{ type: "spring", stiffness: 250 }}
                  className="hover:text-black origin-left"
                  onClick={() => setSidebarOpen(false)}>
                  Dynasty
                </motion.p>
              </Link>
              <Link href="/blogs">
                <motion.p
                  whileHover={{ scale: 1.05 }}
                  transition={{ type: "spring", stiffness: 250 }}
                  className="hover:text-black origin-left"
                  onClick={() => setSidebarOpen(false)}>
                  Blogs
                </motion.p>
              </Link>
              <Link href="/contact">
                <motion.p
                  whileHover={{ scale: 1.05 }}
                  transition={{ type: "spring", stiffness: 250 }}
                  className="hover:text-black origin-left"
                  onClick={() => setSidebarOpen(false)}>
                  Contact
                </motion.p>
              </Link>
            </div>

            <div className="relative flex justify-center lg:gap-x-18 w-full pl-10 lg:mb-10 text-[14px] text-black font-editorial italic">
              <p>
                © 2025 Vedara. All Rights Reserved
              </p>
              <div>
                <Instagram/>
                <Twitter/>
              </div>
            </div>
          </motion.aside>
        )}
      </AnimatePresence>

      {/* Click-catcher backdrop when sidebar open - closes on click */}
      <AnimatePresence>
        {sidebarOpen && (
          <motion.button
            key="backdrop"
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.35 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            onClick={() => setSidebarOpen(false)}
            className="fixed inset-0 z-30 bg-black"
          />
        )}
      </AnimatePresence>
    </header>
  );
}
