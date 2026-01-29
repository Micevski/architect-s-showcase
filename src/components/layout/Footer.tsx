import { siteContent } from '@/data/mockData';
import { useLanguage } from '@/lib/i18n';
import { Instagram, Linkedin, ArrowUp } from 'lucide-react';

export function Footer() {
  const { t } = useLanguage();
  const { contact, about } = siteContent;

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-primary text-primary-foreground py-16">
      <div className="container-narrow">
        <div className="grid md:grid-cols-3 gap-12 mb-12">
          {/* Brand */}
          <div>
            <h3 className="font-serif text-2xl mb-4">{t('about.name')}</h3>
            <p className="text-primary-foreground/70 text-sm leading-relaxed">
              {t('about.title')}<br />
              {t('footer.since')} {new Date().getFullYear() - about.yearsExperience}.
            </p>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-sm uppercase tracking-wider mb-4 text-primary-foreground/50">
              {t('footer.contact')}
            </h4>
            <div className="space-y-2 text-sm text-primary-foreground/70">
              <p>{contact.email}</p>
              <p>{contact.phone}</p>
              <p className="whitespace-pre-line">{contact.address}</p>
            </div>
          </div>

          {/* Social */}
          <div>
            <h4 className="text-sm uppercase tracking-wider mb-4 text-primary-foreground/50">
              {t('footer.follow')}
            </h4>
            <div className="flex gap-4">
              {contact.socialLinks.instagram && (
                <a
                  href={contact.socialLinks.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary-foreground/70 hover:text-primary-foreground transition-colors"
                  aria-label="Instagram"
                >
                  <Instagram size={20} />
                </a>
              )}
              {contact.socialLinks.linkedin && (
                <a
                  href={contact.socialLinks.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary-foreground/70 hover:text-primary-foreground transition-colors"
                  aria-label="LinkedIn"
                >
                  <Linkedin size={20} />
                </a>
              )}
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="flex items-center justify-between pt-8 border-t border-primary-foreground/10">
          <p className="text-xs text-primary-foreground/50">
            © {new Date().getFullYear()} {t('about.name')}. {t('footer.rights')}
          </p>
          <button
            onClick={scrollToTop}
            className="p-2 text-primary-foreground/50 hover:text-primary-foreground transition-colors"
            aria-label="Scroll to top"
          >
            <ArrowUp size={20} />
          </button>
        </div>
      </div>
    </footer>
  );
}
