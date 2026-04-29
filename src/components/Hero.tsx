"use client";

import { motion } from "framer-motion";
import { Download, ChevronRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col items-center text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full glass mb-8 text-sm text-emerald-600"
          >
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
            Now Available for Android
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-5xl md:text-7xl font-bold mb-6 tracking-tight"
          >
            Stay Ahead With <br />
            <span className="text-gradient">Pinvoke</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-lg md:text-xl text-on-surface-variant max-w-2xl mb-10"
          >
            Never miss a due date again. Pinvoke provides smart interactive
            widgets, persistent lock-screen alarms, and reliable tracking for
            your credit cards and bills.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex flex-col sm:flex-row gap-4"
          >
            <button className="flex items-center justify-center gap-2 bg-primary hover:bg-secondary text-white px-8 py-4 rounded-xl font-medium transition-all shadow-[0_0_20px_rgba(122,112,231,0.4)] hover:shadow-[0_0_30px_rgba(122,112,231,0.6)]">
              <Download size={20} />
              Download APK
            </button>
            <Link href="#features">
              <button className="flex items-center justify-center gap-2 glass hover:bg-white/5 text-on-surface px-8 py-4 rounded-xl font-medium transition-all w-full sm:w-auto">
                Learn More
                <ChevronRight size={20} />
              </button>
            </Link>
          </motion.div>
        </div>


      </div>
    </section>
  );
}
