import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { siteContent } from '@/data/mockData';

export function AboutSection() {
  const { about } = siteContent;
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const stats = [
    { value: about.yearsExperience, label: 'Years Experience' },
    { value: about.projectsCompleted, label: 'Projects Completed' },
    { value: about.awards, label: 'Design Awards' },
  ];

  return (
    <section id="about" className="section-padding bg-background" ref={ref}>
      <div className="container-narrow">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="aspect-[4/5] overflow-hidden">
              <img
                src={about.image}
                alt={about.name}
                className="w-full h-full object-cover"
              />
            </div>
            {/* Decorative element */}
            <div className="absolute -bottom-6 -right-6 w-32 h-32 border border-border -z-10" />
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <p className="text-sm uppercase tracking-widest text-muted-foreground mb-4">
              About
            </p>
            <h2 className="font-serif text-heading-lg mb-6">{about.name}</h2>
            <p className="text-muted-foreground mb-8">{about.title}</p>

            <div className="space-y-6 text-foreground/80 leading-relaxed">
              {about.bio.map((paragraph, index) => (
                <p key={index}>{paragraph}</p>
              ))}
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-8 mt-12 pt-8 border-t border-border">
              {stats.map((stat) => (
                <div key={stat.label}>
                  <p className="font-serif text-heading-md text-foreground">
                    {stat.value}+
                  </p>
                  <p className="text-xs uppercase tracking-wider text-muted-foreground mt-1">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
