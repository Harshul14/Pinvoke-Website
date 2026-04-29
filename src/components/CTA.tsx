'use client';

import { motion } from 'framer-motion';
import { Download } from 'lucide-react';

export default function CTA() {
  return (
    <section className="py-24 relative overflow-hidden" id="download">
      <div className="container mx-auto px-6 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="rounded-3xl p-1 md:p-[2px] bg-gradient-to-r from-primary via-secondary to-primary max-w-4xl mx-auto"
        >
          <div className="bg-background rounded-[22px] md:rounded-[22px] p-10 md:p-16 text-center relative overflow-hidden h-full w-full">
            {/* Background glowing effect inside the card */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-1/2 bg-primary/10 blur-[50px] rounded-full"></div>
            
            <div className="relative z-10">
              <h2 className="text-3xl md:text-5xl font-bold mb-6">
                Ready to take control?
              </h2>
              <p className="text-lg text-on-surface-variant mb-10 max-w-2xl mx-auto">
                Join thousands of users who never miss a payment. Download Pinvoke today and experience the peace of mind.
              </p>
              
              <a href="/Pinvoke.apk" download>
                <button className="flex items-center justify-center gap-2 bg-primary hover:bg-secondary text-white px-10 py-5 rounded-xl font-bold text-lg transition-all mx-auto shadow-[0_0_30px_rgba(122,112,231,0.5)] hover:shadow-[0_0_40px_rgba(157,149,233,0.7)] hover:scale-105">
                  <Download size={24} />
                  Download APK Now
                </button>
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
