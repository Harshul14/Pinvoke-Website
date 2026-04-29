'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

const screenshots = [
  "/newImages/Screenshot_2026-04-28-16-04-22-96_9dde93052b44d022942cee4115744933.jpg",
  "/newImages/Screenshot_2026-04-28-16-04-29-06_9dde93052b44d022942cee4115744933.jpg",
  "/newImages/Screenshot_2026-04-28-16-05-19-98_9dde93052b44d022942cee4115744933.jpg"
];

export default function Gallery() {
  return (
    <section className="py-24 relative overflow-hidden" id="gallery">
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-primary/10 rounded-full blur-[100px] -translate-y-1/2 -translate-x-1/2"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-bold mb-6"
          >
            See It In <span className="text-gradient">Action</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-on-surface-variant text-lg"
          >
            A clean, modern interface that makes managing your due dates effortless and visually pleasing.
          </motion.p>
        </div>

        <div className="flex justify-center overflow-x-auto gap-6 pb-8 snap-x snap-mandatory hide-scrollbar pt-10">
          {screenshots.map((src, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ 
                opacity: { duration: 0.5, delay: index * 0.1 },
                x: { duration: 0.5, delay: index * 0.1 },
                scale: { type: "spring", stiffness: 300, damping: 20 }
              }}
              whileHover={{ scale: 1.05, zIndex: 50 }}
              whileTap={{ scale: 0.98 }}
              className="min-w-[280px] md:min-w-[320px] shrink-0 snap-center cursor-pointer"
            >
              <div className="relative glass p-2 rounded-[2.5rem] border border-outline/30 aspect-[9/19] transition-all duration-300 hover:border-primary/50 hover:bg-surface/40 group">
                <div className="relative w-full h-full rounded-[2rem] overflow-hidden bg-surface shadow-2xl">
                  <Image
                    src={src}
                    alt={`App Screenshot ${index + 1}`}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                    sizes="(max-width: 768px) 280px, 320px"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
      
      {/* CSS to hide scrollbar but keep functionality */}
      <style dangerouslySetInnerHTML={{__html: `
        .hide-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .hide-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}} />
    </section>
  );
}
