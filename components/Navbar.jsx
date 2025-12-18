"use client";

import React, { useEffect, useState, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Instagram, Twitter } from "@mui/icons-material";

export default function Navbar() {
  const pathname = usePathname();
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

  // Close sidebar when pressing Escape
  useEffect(() => {
    function onKey(e) {
      if (e.key === "Escape") setSidebarOpen(false);
    }
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  return (
    <header className="w-screen fixed top-0 z-50"> 
      <div
        className={`${
          pathname === "/" ? "opacity-0 pointer-events-none" : "opacity-100 pointer-events-auto"
        } w-screen h-28 flex justify-between items-center px-8 lg:px-24 text-[18px] leading-relaxed`}
      >
        <h1 className="text-[24px]">
          VEDARA {pathname === "/atelier" && <span className="italic">Atelier</span>} {pathname === "/dynasty" && <span className="italic">Dynasty</span>}
        </h1>

        <motion.nav
          className="hidden lg:flex items-center gap-5 uppercase"
          animate={scrolledPastVH ? { x: 0, opacity: 0 } : { x: 10, opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          <Link href="/portfolio"><p className="cursor-pointer">portfolio</p></Link>
          <Link href="/atelier"><p className="cursor-pointer">studio</p></Link>
          <Link href="/blogs"><p className="cursor-pointer">blogs</p></Link>
          <Link href="/dynasty"><p className="cursor-pointer">dynasty</p></Link>
          <Link href="/inquire"><p className="cursor-pointer">inquire</p></Link>
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
              <div className="absolute top-0 left-0 w-1 h-1 bg-white"></div> 
              <div className="absolute top-0 right-0 w-1 h-1 bg-white"></div> 
              <div className="absolute bottom-0 left-0 w-1 h-1 bg-white"></div> 
              <div className="absolute bottom-0 right-0 w-1 h-1 bg-white"></div>
              {sidebarOpen && (<p>x</p>)} 
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
                  Portfolio
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
              <Link href="/inquire">
                <motion.p
                  whileHover={{ scale: 1.1 }}
                  transition={{ type: "spring", stiffness: 250 }}
                  className="hover:text-black"
                  onClick={() => setSidebarOpen(false)}>
                  Inquire
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
