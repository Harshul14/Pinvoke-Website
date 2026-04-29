'use client';

import { motion } from 'framer-motion';
import { Database, Code, Smartphone, Clock } from 'lucide-react';

const technologies = [
  {
    icon: <Code className="w-8 h-8 text-primary" />,
    name: 'Java Native',
    description: 'Built natively for Android ensuring maximum performance and deep OS integration.'
  },
  {
    icon: <Database className="w-8 h-8 text-primary" />,
    name: 'Room Database',
    description: 'Robust local data persistence using SQLite abstraction for secure on-device storage.'
  },
  {
    icon: <Smartphone className="w-8 h-8 text-primary" />,
    name: 'App Widgets',
    description: 'Modern Android AppWidgetProvider APIs for rich, interactive home screen components.'
  },
  {
    icon: <Clock className="w-8 h-8 text-primary" />,
    name: 'AlarmManager',
    description: 'Exact alarm scheduling with wake locks to ensure alerts trigger precisely on time.'
  }
];

export default function TechStack() {
  return (
    <section className="py-24 relative" id="tech">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-bold mb-6"
          >
            Built With <span className="text-gradient">Precision</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-on-surface-variant text-lg"
          >
            Leveraging native Android technologies for an uncompromised experience.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {technologies.map((tech, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="glass p-8 rounded-2xl flex flex-col items-center text-center hover:border-primary/50 transition-colors"
            >
              <div className="w-16 h-16 rounded-full bg-surface border border-outline flex items-center justify-center mb-6 shadow-[0_0_15px_rgba(122,112,231,0.15)]">
                {tech.icon}
              </div>
              <h3 className="text-xl font-bold mb-3">{tech.name}</h3>
              <p className="text-sm text-on-surface-variant">
                {tech.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
