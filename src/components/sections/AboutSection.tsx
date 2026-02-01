import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { useLanguage } from '@/lib/i18n';
import { siteContent } from '@/data/mockData';

export function AboutSection() {
  const { t } = useLanguage();
  const { about } = siteContent;
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const stats = [
    { value: about.yearsExperience, labelKey: 'about.stats.experience' },
    { value: about.projectsCompleted, labelKey: 'about.stats.projects' },
    { value: about.awards, labelKey: 'about.stats.licenses' },
  ];

  const bioKeys = ['about.bio.1', 'about.bio.2'];

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
                alt={t('about.name')}
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
              {t('about.label')}
            </p>
            <h2 className="font-serif text-heading-lg mb-6">{t('about.name')}</h2>
            <p className="text-muted-foreground mb-8">{t('about.title')}</p>

            <div className="space-y-6 text-foreground/80 leading-relaxed">
              {bioKeys.map((key) => (
                <p key={key}>{t(key)}</p>
              ))}
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-8 mt-12 pt-8 border-t border-border">
              {stats.map((stat) => (
                <div key={stat.labelKey}>
                  <p className="font-serif text-heading-md text-foreground">
                    {stat.value}+
                  </p>
                  <p className="text-xs uppercase tracking-wider text-muted-foreground mt-1">
                    {t(stat.labelKey)}
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
