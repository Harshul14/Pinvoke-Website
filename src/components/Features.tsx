'use client';

import { motion } from 'framer-motion';
import { BellRing, LayoutGrid, Shield, Zap } from 'lucide-react';

const features = [
  {
    icon: <LayoutGrid className="w-6 h-6 text-primary" />,
    title: 'Interactive Home Widgets',
    description: 'Keep track of all your due dates right from your home screen. Visual urgency indicators let you know what needs attention at a glance.'
  },
  {
    icon: <BellRing className="w-6 h-6 text-primary" />,
    title: 'Persistent Lock Screen Alarms',
    description: 'Highly reliable alarm system that bypasses doze mode and works directly on your lock screen to ensure you never miss a payment.'
  },
  {
    icon: <Shield className="w-6 h-6 text-primary" />,
    title: 'Privacy First & Local Storage',
    description: 'Your financial data is completely secure. Everything is stored locally on your device using encrypted Room database.'
  },
  {
    icon: <Zap className="w-6 h-6 text-primary" />,
    title: 'Lightning Fast Performance',
    description: 'Optimized background processes and custom executors guarantee immediate updates to widgets without draining your battery.'
  }
];

export default function Features() {
  return (
    <section className="py-24 relative" id="features">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-bold mb-6"
          >
            Powerful Features for <br />
            <span className="text-gradient">Total Control</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-on-surface-variant text-lg"
          >
            Designed with reliability in mind, Pinvoke ensures that tracking your finances is frictionless and foolproof.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 max-w-6xl mx-auto">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="glass p-8 rounded-2xl hover:bg-surface/40 transition-colors group"
            >
              <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
              <p className="text-on-surface-variant leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
