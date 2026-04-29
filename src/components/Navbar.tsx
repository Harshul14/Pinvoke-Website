'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.nav 
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className={`fixed top-0 left-0 right-0 z-50 px-6 py-4 transition-all duration-300 ${
        scrolled ? 'bg-background/95 backdrop-blur-md border-b border-white/5 py-3' : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto flex items-center justify-between">
        <Link href="/" className="flex items-center gap-1 group">
          <div className="relative w-11 h-11 flex items-center justify-center transition-transform group-hover:scale-110">
            <Image
              src="/images/ic_launcher_foreground.webp"
              alt="Pinvoke Logo"
              width={44}
              height={44}
              className="object-contain scale-150"
            />
          </div>
          <span className="text-xl font-bold tracking-tight text-white group-hover:text-primary transition-colors">
            Pinvoke
          </span>
        </Link>
        
        <div className="hidden md:flex items-center gap-8 text-sm font-medium text-on-surface-variant">
          <Link href="#features" className="hover:text-primary transition-colors">Features</Link>
          <Link href="#gallery" className="hover:text-primary transition-colors">Gallery</Link>
          <Link href="#about" className="hover:text-primary transition-colors">About</Link>
          <Link href="#tech" className="hover:text-primary transition-colors">Tech</Link>
        </div>

        <Link href="#features">
          <button className="glass px-5 py-2 rounded-lg text-sm font-medium hover:bg-white/5 transition-all">
            Get Started
          </button>
        </Link>
      </div>
    </motion.nav>
  );
}
