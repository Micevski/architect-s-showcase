import { useParams, Link } from 'react-router-dom';
import { useEffect } from 'react';
import { motion } from 'framer-motion';
import { projects } from '@/data/mockData';
import { useLanguage } from '@/lib/i18n';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { ArrowLeft, ArrowRight } from 'lucide-react';

const ProjectDetail = () => {
  const { t } = useLanguage();
  const { id } = useParams<{ id: string }>();
  const project = projects.find((p) => p.id === id);

  // Scroll to top when component mounts or project changes
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  const getProjectTitle = (projectId: string) => {
    const key = `project.${projectId}.title`;
    const translated = t(key);
    return translated !== key ? translated : projects.find(p => p.id === projectId)?.title || '';
  };

  const getProjectDescription = (projectId: string) => {
    const key = `project.${projectId}.description`;
    const translated = t(key);
    return translated !== key ? translated : projects.find(p => p.id === projectId)?.description || '';
  };

  const getCategoryLabel = (category: string) => {
    return t(`projects.category.${category}`);
  };

  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="font-serif text-heading-lg mb-4">{t('projectDetail.notFound')}</h1>
          <Link to="/" className="text-muted-foreground hover:text-foreground transition-colors">
            {t('projectDetail.returnHome')}
          </Link>
        </div>
      </div>
    );
  }

  // Find adjacent projects for navigation
  const currentIndex = projects.findIndex((p) => p.id === id);
  const prevProject = currentIndex > 0 ? projects[currentIndex - 1] : null;
  const nextProject = currentIndex < projects.length - 1 ? projects[currentIndex + 1] : null;

  return (
    <div className="min-h-screen bg-background">
      <Header />

      <main>
        {/* Hero Image */}
        <motion.section
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="relative h-[70vh] overflow-hidden"
        >
          <img
            src={project.images[0]}
            alt={getProjectTitle(project.id)}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-hero-overlay/30" />
        </motion.section>

        {/* Project Info */}
        <section className="section-padding">
          <div className="container-narrow">
            <div className="grid lg:grid-cols-3 gap-16">
              {/* Main Content */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="lg:col-span-2"
              >
                <Link
                  to="/#projects"
                  className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors mb-8"
                >
                  <ArrowLeft size={16} />
                  {t('projectDetail.backToProjects')}
                </Link>

                <h1 className="font-serif text-heading-lg mb-6">{getProjectTitle(project.id)}</h1>
                <p className="text-body-lg text-muted-foreground leading-relaxed mb-8">
                  {getProjectDescription(project.id)}
                </p>
              </motion.div>

              {/* Project Details Sidebar */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="space-y-8"
              >
                <div>
                  <p className="text-xs uppercase tracking-widest text-muted-foreground mb-2">
                    {t('projectDetail.location')}
                  </p>
                  <p className="text-foreground">{project.location}</p>
                </div>
                <div>
                  <p className="text-xs uppercase tracking-widest text-muted-foreground mb-2">
                    {t('projectDetail.year')}
                  </p>
                  <p className="text-foreground">{project.year}</p>
                </div>
                <div>
                  <p className="text-xs uppercase tracking-widest text-muted-foreground mb-2">
                    {t('projectDetail.category')}
                  </p>
                  <p className="text-foreground capitalize">{getCategoryLabel(project.category)}</p>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Image Gallery */}
        {project.images.length > 1 && (
          <section className="pb-section">
            <div className="container-narrow">
              <div className="grid md:grid-cols-2 gap-6">
                {project.images.slice(1).map((image, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
                    className="aspect-[4/3] overflow-hidden"
                  >
                    <img
                      src={image}
                      alt={`${getProjectTitle(project.id)} - ${index + 2}`}
                      className="w-full h-full object-cover"
                    />
                  </motion.div>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* Project Navigation */}
        <section className="border-t border-border">
          <div className="container-narrow">
            <div className="grid md:grid-cols-2">
              {prevProject ? (
                <Link
                  to={`/project/${prevProject.id}`}
                  className="group py-12 pr-8 border-r border-border"
                >
                  <p className="text-xs uppercase tracking-widest text-muted-foreground mb-2 flex items-center gap-2">
                    <ArrowLeft size={14} />
                    {t('projectDetail.prevProject')}
                  </p>
                  <p className="font-serif text-xl group-hover:text-muted-foreground transition-colors">
                    {getProjectTitle(prevProject.id)}
                  </p>
                </Link>
              ) : (
                <div className="py-12 pr-8 border-r border-border" />
              )}

              {nextProject ? (
                <Link
                  to={`/project/${nextProject.id}`}
                  className="group py-12 pl-8 text-right"
                >
                  <p className="text-xs uppercase tracking-widest text-muted-foreground mb-2 flex items-center justify-end gap-2">
                    {t('projectDetail.nextProject')}
                    <ArrowRight size={14} />
                  </p>
                  <p className="font-serif text-xl group-hover:text-muted-foreground transition-colors">
                    {getProjectTitle(nextProject.id)}
                  </p>
                </Link>
              ) : (
                <div className="py-12 pl-8" />
              )}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default ProjectDetail;
