import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Link } from 'react-router-dom';
import { projects } from '@/data/mockData';
import { ArrowUpRight } from 'lucide-react';

export function ProjectsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="projects" className="section-padding bg-background" ref={ref}>
      <div className="container-narrow">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-sm uppercase tracking-widest text-muted-foreground mb-4">
            Portfolio
          </p>
          <h2 className="font-serif text-heading-lg text-balance">
            Selected Projects
          </h2>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <Link
                to={`/project/${project.id}`}
                className="group block"
              >
                <div className="relative aspect-[4/3] overflow-hidden mb-4">
                  <img
                    src={project.images[0]}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-foreground/0 group-hover:bg-foreground/10 transition-colors duration-300" />
                  <div className="absolute top-4 right-4 w-10 h-10 flex items-center justify-center bg-background/90 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <ArrowUpRight size={18} className="text-foreground" />
                  </div>
                </div>
                <div>
                  <p className="text-xs uppercase tracking-wider text-muted-foreground mb-2">
                    {project.category} · {project.year}
                  </p>
                  <h3 className="font-serif text-xl mb-2 group-hover:text-muted-foreground transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    {project.location}
                  </p>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
