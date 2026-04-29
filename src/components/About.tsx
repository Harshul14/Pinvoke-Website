'use client';

import { motion } from 'framer-motion';

export default function About() {
  return (
    <section className="py-24 relative" id="about">
      <div className="container mx-auto px-6">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="glass rounded-3xl p-8 md:p-16 max-w-5xl mx-auto relative overflow-hidden"
        >
          {/* Decorative elements */}
          <div className="absolute -top-24 -right-24 w-64 h-64 bg-secondary/20 rounded-full blur-[80px]"></div>
          <div className="absolute -bottom-24 -left-24 w-64 h-64 bg-primary/20 rounded-full blur-[80px]"></div>
          
          <div className="relative z-10 md:w-2/3">
            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              Our <span className="text-gradient">Mission</span>
            </h2>
            <p className="text-lg text-on-surface-variant leading-relaxed mb-6">
              Pinvoke was born out of a simple frustration: missing payment due dates despite having calendar reminders. Traditional alarms are easily dismissed, and calendar events lack the persistent urgency required for financial deadlines.
            </p>
            <p className="text-lg text-on-surface-variant leading-relaxed">
              We built an Android utility that places interactive visual widgets on your home screen and utilizes highly reliable lock-screen alarms. Our goal is to ensure you never miss another payment, without compromising your privacy or draining your battery.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
