"use client";

import React, { useEffect, useState, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Instagram, Twitter } from "@mui/icons-material";
import CloseIcon from '@mui/icons-material/Close';

export default function Navbar() {
  const pathname = usePathname();
  const router = useRouter();
  const [scrolledPastVH, setScrolledPastVH] = useState(false);
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const btnRef = useRef(null);

  useEffect(() => {
    function onScroll() {
      // When window.scrollY >= 100vh -> treat as scrolled
      const vh = window.innerHeight || 1;
      setScrolledPastVH(window.scrollY >= vh);
      // If user scrolls back to top, close the sidebar as requested
      if (window.scrollY < vh && sidebarOpen && window.innerWidth>=1024) setSidebarOpen(false);
    }

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [sidebarOpen]);

  useEffect(() => {
    function onKey(e) {
      if (e.key === "Escape") setSidebarOpen(false);
    }
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  const isVisible = pathname === "/atelier" || pathname === "/dynasty";
  if (!isVisible) return null;

  const active = pathname === "/atelier" ? "atelier" : "dynasty";

  return (
    <header className="w-screen fixed top-0 z-50"> 
      <div
        className={`${
          pathname === "/" ? "opacity-0 pointer-events-none" : "opacity-100 pointer-events-auto"
        } w-screen h-28 flex justify-between items-center px-8 lg:px-24 text-[18px] leading-relaxed`}
      >
        <div className="flex gap-8">

        <h1 className="text-[24px]">
          VEDARA
        </h1>
        {pathname==="atelier" || "dynasty" && 
          <div className="relative hidden lg:flex items-center rounded-full bg-[#3a332b] py-1">
            <span
              className={`absolute h-full w-1/2 rounded-full bg-[#6b6256] transition-transform duration-400 ease-out ${
                active === "dynasty" ? "translate-x-full" : "translate-x-0"
              }`}
            />

            <Link href={"/atelier"} className="hover:cursor-pointer">
              <button
                onClick={() => router.push("/atelier")}
                className={`relative font-editorial z-10 px-6 py-2 text-sm italic transition-colors duration-300 ${
                  active === "atelier" ? "text-white" : "text-[#b8b1a7]"
                }`}
              >
                Atelier
              </button> 
            </Link>

            <Link href={"/dynasty"} className="hover:cursor-pointer">
              <button
                onClick={() => router.push("/dynasty")}
                className={`relative font-editorial z-10 px-6 py-2 text-sm italic transition-colors duration-300 ${
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
          initial={false}
          className="hidden lg:flex items-center gap-5 uppercase"
          animate={{opacity: scrolledPastVH?0:1}}
          transition={{ duration: 0.5, ease:"easeOut"}}
        >
          <Link href="/portfolio"><p className="cursor-pointer">case study</p></Link>
          {/* <Link href="/atelier"><p className="cursor-pointer">studio</p></Link> */}
          {/* <Link href="/blogs"><p className="cursor-pointer">blogs</p></Link> */}
          {/* <Link href="/dynasty"><p className="cursor-pointer">dynasty</p></Link> */}
          <Link href="/contact"><p className="cursor-pointer">contact</p></Link>
        </motion.nav>

        <button
          className="lg:hidden z-40 w-10 h-10 flex items-center justify-center focus:outline-none"
          onClick={() => setSidebarOpen((s) => !s)}
        >
          <Image alt="menu" width={37} height={9} src="/menuIcon.svg" />
        </button>
       
        {scrolledPastVH && (
          <AnimatePresence>
            <motion.button
              ref={btnRef}
              key="box-btn" 
              onClick={() => setSidebarOpen((s) => !s)}
              initial={{ x: 0, opacity: 0, rotate: 0 }}
              animate={{ x: 0, opacity: 1, rotate: sidebarOpen ? 180 : 0 }}
              exit={{ x: -20, opacity: 0, }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
              className={`hidden z-40 lg:flex items-center justify-center w-6 h-6 backdrop-blur cursor-pointer focus:outline-none`}
            > 
              {sidebarOpen ? (<CloseIcon className="text-black" fontSize="large"/>): (<Image alt="menu" width={37} height={9} src="/menuIcon.svg" />)} 
            </motion.button>
          </AnimatePresence>
        )}
      </div>

      <AnimatePresence>
        {sidebarOpen && (
          <motion.aside
            key="sidebar"
            initial={{ scale: 0.02, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.02, opacity: 0 }}
            transition={{ type: "spring", stiffness: 250, damping: 30 }}
            style={{ transformOrigin: "top right" }}
            className="fixed top-0 right-0 h-screen w-[min(420px,70vw)] flex flex-col justify-center z-35 bg-primary overflow-auto"
            role="dialog"
            aria-modal="true"
          >

            <nav className="p-15 flex flex-col gap-6 text-[30px] font-editorial italic text-neutral-500">
              <Link href="/atelier">
                <motion.p
                  whileHover={{ scale: 1.1 }}
                  transition={{ type: "spring", stiffness: 250 }}
                  className="hover:text-black"
                  onClick={() => setSidebarOpen(false)}>
                  Studio
                </motion.p>
              </Link>
              <Link href="/portfolio">
                <motion.p 
                  whileHover={{ scale: 1.1 }}
                  transition={{ type: "spring", stiffness: 250 }}
                  className="hover:text-black"
                  onClick={() => setSidebarOpen(false)}>
                  Case Study
                </motion.p>
              </Link>
              <Link href="/dynasty">
                <motion.p
                  whileHover={{ scale: 1.1 }}
                  transition={{ type: "spring", stiffness: 250 }}
                  className="hover:text-black"
                  onClick={() => setSidebarOpen(false)}>
                  Dynasty
                </motion.p>
              </Link>
              <Link href="/blogs">
                <motion.p
                  whileHover={{ scale: 1.1 }}
                  transition={{ type: "spring", stiffness: 250 }}
                  className="hover:text-black"
                  onClick={() => setSidebarOpen(false)}>
                  Blogs
                </motion.p>
              </Link>
              <Link href="/contact">
                <motion.p
                  whileHover={{ scale: 1.1 }}
                  transition={{ type: "spring", stiffness: 250 }}
                  className="hover:text-black"
                  onClick={() => setSidebarOpen(false)}>
                  Contact
                </motion.p>
              </Link>
            </nav>

            <div className="fixed flex justify-between gap-x-18 bottom-8 pl-10 text-sm text-black font-editorial italic">
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
