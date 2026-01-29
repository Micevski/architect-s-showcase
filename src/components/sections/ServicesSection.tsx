import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { services } from '@/data/mockData';
import { Home, Building2, Palette, Hammer, LucideIcon } from 'lucide-react';

const iconMap: Record<string, LucideIcon> = {
  Home,
  Building2,
  Palette,
  Hammer,
};

export function ServicesSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="services" className="section-padding bg-secondary" ref={ref}>
      <div className="container-narrow">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-sm uppercase tracking-widest text-muted-foreground mb-4">
            Services
          </p>
          <h2 className="font-serif text-heading-lg text-balance">
            How We Can Help
          </h2>
        </motion.div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {services.map((service, index) => {
            const IconComponent = iconMap[service.icon] || Home;
            return (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-background p-8 md:p-10 group hover:shadow-lg transition-shadow duration-500"
              >
                <div className="flex items-start gap-6">
                  <div className="flex-shrink-0 w-12 h-12 flex items-center justify-center border border-border group-hover:border-foreground transition-colors">
                    <IconComponent size={24} className="text-foreground" />
                  </div>
                  <div>
                    <h3 className="font-serif text-xl mb-3">{service.title}</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {service.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
