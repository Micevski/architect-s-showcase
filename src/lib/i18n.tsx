import { createContext, useContext, useState, useEffect, ReactNode } from 'react';

export type Language = 'mk' | 'en';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const translations = {
  mk: {
    // Navigation
    'nav.about': 'За мене',
    'nav.services': 'Услуги',
    'nav.projects': 'Проекти',
    'nav.contact': 'Контакт',

    // Hero
    'hero.tagline': 'Дизајнирање простори, градење соништа',
    'hero.subtitle': 'Овластен архитект со комплетни архитектонски решенија од концепт до реализација',

    // About
    'about.label': 'За мене',
    'about.name': 'Љубица Мицевска',
    'about.title': 'Овластен архитект',
    'about.bio.1': 'Како овластен архитект со комплетни овластувања за проектирање, ревизија, надзор и урбанистичко планирање, нудам целосен спектар на професионални услуги за секој проект. Моето образование на Архитектонскиот факултет во Скопје обезбеди силна основа врз која продолжувам да градам.',
    'about.bio.2': 'Со искуство во станбени, комерцијални и ентериерни проекти, се специјализирам за изработка на техничка документација од идејни решенија до основни проекти. Ја координирам целокупната проектна документација и го водам целиот процес за добивање одобрение за градење.',
    'about.bio.3': 'Моментално работам во Студио Атриум во Штип, каде се справувам со проекти од сите размери - од викенд куќи до капитални градежни проекти - обезбедувајќи прецизно внимание на детали и професионална реализација.',
    'about.stats.experience': 'Години искуство',
    'about.stats.projects': 'Завршени проекти',
    'about.stats.licenses': 'Професионални лиценци',

    // Services
    'services.label': 'Услуги',
    'services.title': 'Како можам да помогнам',
    'services.architectural.title': 'Архитектонско проектирање',
    'services.architectural.description': 'Комплетна архитектонска документација вклучувајќи идејни и основни проекти. 2Д и 3Д проекции, технички цртежи и целосна подготовка за градежна дозвола.',
    'services.urban.title': 'Урбанистичко планирање',
    'services.urban.description': 'Изработка на урбанистичка документација вклучувајќи детални урбанистички планови и урбанистички проекти. Целосно водење на постапките преку системот Е-урбанизам.',
    'services.supervision.title': 'Стручен надзор',
    'services.supervision.description': 'Професионален надзор на градежни проекти обезбедувајќи усогласеност со одобрената документација, стандарди за квалитет и градежни прописи.',
    'services.safety.title': 'Заштита од пожари и БЗР',
    'services.safety.description': 'Проектна документација за заштита од пожари, експлозии и безбедност и здравје при работа за објекти од прва категорија.',

    // Projects
    'projects.label': 'Проекти',
    'projects.title': 'Избрани работи',
    'projects.viewAll': 'Погледни ги сите проекти',
    'projects.viewProject': 'Погледни проект',
    'projects.category.residential': 'Станбен',
    'projects.category.commercial': 'Комерцијален',
    'projects.category.interior': 'Ентериер',
    'projects.category.renovation': 'Реновирање',

    // Project items
    'project.modern-family-residence.title': 'Современа семејна куќа',
    'project.modern-family-residence.short': 'Современа семејна куќа со отворен план на живеење',
    'project.modern-family-residence.description': 'Модерен станбен проект со чисти линии и функционални простори. Дизајнот максимизира природна светлина преку стратешко поставување на прозорци додека обезбедува удобни простори за живеење за растечко семејство.',

    'project.weekend-retreat.title': 'Викенд куќа',
    'project.weekend-retreat.short': 'Мирна викенд куќа дизајнирана за релаксација',
    'project.weekend-retreat.description': 'Овој проект за викенд куќа обезбедува бегство од урбаниот живот. Дизајнот вклучува отворени тераси, поврзаност со природата и ефикасно користење на просторот.',

    'project.commercial-complex.title': 'Комерцијален комплекс',
    'project.commercial-complex.short': 'Повеќенаменски комерцијален објект со современи удобности',
    'project.commercial-complex.description': 'Комерцијален развоен проект вклучувајќи малопродажни и канцелариски простори. Дизајнот приоритизира функционалност и пристапност.',

    'project.residential-extension.title': 'Доградба на куќа',
    'project.residential-extension.short': 'Промислена доградба на постоечка семејна куќа',
    'project.residential-extension.description': 'Овој проект за реновирање вклучуваше проширување на постоечка резиденција за да се задоволат растечките потреби на семејството.',

    'project.apartment-interior.title': 'Ентериер на стан',
    'project.apartment-interior.short': 'Комплетен дизајн на ентериер со детали за мебел',
    'project.apartment-interior.description': 'Сеопфатен проект за внатрешна архитектура со 2Д и 3Д цртежи со детални дизајни на мебел.',

    'project.hillside-villa.title': 'Вила на падина',
    'project.hillside-villa.short': 'Елегантна вила која го искористува природниот терен',
    'project.hillside-villa.description': 'Станбен проект кој работи со природниот наклон на теренот за да создаде драматични простори за живеење со панорамски погледи.',

    // Contact
    'contact.label': 'Контакт',
    'contact.title': 'Да разговараме за вашиот проект',
    'contact.description': 'Секој одличен проект започнува со разговор. Без разлика дали сонувате за нов дом, преуредување на постоечки простор или планирате комерцијална инвестиција, би сакала да слушнам за вашата визија.',
    'contact.email': 'Е-пошта',
    'contact.phone': 'Телефон',
    'contact.studio': 'Студио',
    'contact.form.name': 'Име',
    'contact.form.email': 'Е-пошта',
    'contact.form.message': 'Опишете го вашиот проект',
    'contact.form.submit': 'Испрати порака',
    'contact.form.sending': 'Се испраќа...',
    'contact.form.success.title': 'Пораката е испратена',
    'contact.form.success.description': 'Ви благодарам што се јавивте. Ќе ви одговорам наскоро.',

    // Footer
    'footer.since': 'Создавање промислени простори од',
    'footer.contact': 'Контакт',
    'footer.follow': 'Следете',
    'footer.rights': 'Сите права задржани.',

    // Common
    'common.learnMore': 'Дознај повеќе',
    'common.back': 'Назад',

    // Project Detail
    'projectDetail.backToProjects': 'Назад кон проекти',
    'projectDetail.location': 'Локација',
    'projectDetail.year': 'Година',
    'projectDetail.category': 'Категорија',
    'projectDetail.prevProject': 'Претходен проект',
    'projectDetail.nextProject': 'Следен проект',
    'projectDetail.notFound': 'Проектот не е пронајден',
    'projectDetail.returnHome': 'Врати се на почетна',
  },
  en: {
    // Navigation
    'nav.about': 'About',
    'nav.services': 'Services',
    'nav.projects': 'Projects',
    'nav.contact': 'Contact',

    // Hero
    'hero.tagline': 'Designing Spaces, Building Dreams',
    'hero.subtitle': 'Licensed architect delivering complete architectural solutions from concept to construction',

    // About
    'about.label': 'About',
    'about.name': 'Ljubica Micevska',
    'about.title': 'Licensed Architect',
    'about.bio.1': 'As a licensed architect with comprehensive authorizations in architectural design, revision, supervision, and urban planning, I bring a complete range of professional services to every project. My education at the Faculty of Architecture in Skopje provided a strong foundation that I continue to build upon.',
    'about.bio.2': 'With experience spanning residential, commercial, and interior projects, I specialize in developing technical documentation from conceptual designs through main projects. I coordinate all phases of project documentation and manage the entire building permit process.',
    'about.bio.3': 'Currently based in Shtip, Macedonia, I work at Studio Atrium where I handle projects of all scales—from weekend houses to capital construction projects—ensuring each receives meticulous attention to detail and professional execution.',
    'about.stats.experience': 'Years Experience',
    'about.stats.projects': 'Projects Completed',
    'about.stats.licenses': 'Professional Licenses',

    // Services
    'services.label': 'Services',
    'services.title': 'How I Can Help',
    'services.architectural.title': 'Architectural Design',
    'services.architectural.description': 'Complete architectural documentation including conceptual and main projects. 2D and 3D projections, technical drawings, and full preparation for building permits.',
    'services.urban.title': 'Urban Planning',
    'services.urban.description': 'Development of urban planning documentation including detailed urban plans and urban projects. Full management of procedures through the E-Urbanism system.',
    'services.supervision.title': 'Construction Supervision',
    'services.supervision.description': 'Professional supervision of construction projects ensuring compliance with approved documentation, quality standards, and building regulations.',
    'services.safety.title': 'Fire Safety & Protection',
    'services.safety.description': 'Design documentation for fire protection, explosion safety, and occupational health and safety for first category buildings.',

    // Projects
    'projects.label': 'Projects',
    'projects.title': 'Selected Work',
    'projects.viewAll': 'View All Projects',
    'projects.viewProject': 'View Project',
    'projects.category.residential': 'Residential',
    'projects.category.commercial': 'Commercial',
    'projects.category.interior': 'Interior',
    'projects.category.renovation': 'Renovation',

    // Project items
    'project.modern-family-residence.title': 'Modern Family Residence',
    'project.modern-family-residence.short': 'Contemporary family home with open-plan living spaces',
    'project.modern-family-residence.description': 'A modern residential project featuring clean lines and functional spaces. The design maximizes natural light through strategic window placement while providing comfortable living areas for a growing family.',

    'project.weekend-retreat.title': 'Weekend Retreat',
    'project.weekend-retreat.short': 'A peaceful weekend house designed for relaxation',
    'project.weekend-retreat.description': 'This weekend house project provides an escape from urban life. The design features open terraces, connection to nature, and efficient use of space.',

    'project.commercial-complex.title': 'Commercial Complex',
    'project.commercial-complex.short': 'Multi-purpose commercial building with modern amenities',
    'project.commercial-complex.description': 'A commercial development project including retail and office spaces. The design prioritizes functionality and accessibility.',

    'project.residential-extension.title': 'Residential Extension',
    'project.residential-extension.short': 'Thoughtful addition to an existing family home',
    'project.residential-extension.description': 'This renovation project involved extending an existing residence to accommodate growing family needs.',

    'project.apartment-interior.title': 'Apartment Interior',
    'project.apartment-interior.short': 'Complete interior design with custom furniture details',
    'project.apartment-interior.description': 'A comprehensive interior architecture project featuring 2D and 3D drawings with detailed furniture designs.',

    'project.hillside-villa.title': 'Hillside Villa',
    'project.hillside-villa.short': 'Elegant villa taking advantage of natural terrain',
    'project.hillside-villa.description': 'A residential project that works with the natural slope of the land to create dramatic living spaces with panoramic views.',

    // Contact
    'contact.label': 'Contact',
    'contact.title': "Let's Discuss Your Project",
    'contact.description': "Every great project begins with a conversation. Whether you're dreaming of a new home, reimagining an existing space, or planning a commercial venture, I'd love to hear about your vision.",
    'contact.email': 'Email',
    'contact.phone': 'Phone',
    'contact.studio': 'Studio',
    'contact.form.name': 'Name',
    'contact.form.email': 'Email',
    'contact.form.message': 'Tell me about your project',
    'contact.form.submit': 'Send Message',
    'contact.form.sending': 'Sending...',
    'contact.form.success.title': 'Message sent',
    'contact.form.success.description': "Thank you for reaching out. I'll be in touch soon.",

    // Footer
    'footer.since': 'Creating thoughtful spaces since',
    'footer.contact': 'Contact',
    'footer.follow': 'Follow',
    'footer.rights': 'All rights reserved.',

    // Common
    'common.learnMore': 'Learn More',
    'common.back': 'Back',

    // Project Detail
    'projectDetail.backToProjects': 'Back to Projects',
    'projectDetail.location': 'Location',
    'projectDetail.year': 'Year',
    'projectDetail.category': 'Category',
    'projectDetail.prevProject': 'Previous Project',
    'projectDetail.nextProject': 'Next Project',
    'projectDetail.notFound': 'Project Not Found',
    'projectDetail.returnHome': 'Return to Home',
  },
};

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>(() => {
    const saved = localStorage.getItem('language');
    return (saved as Language) || 'mk';
  });

  useEffect(() => {
    localStorage.setItem('language', language);
    document.documentElement.lang = language;
  }, [language]);

  const t = (key: string): string => {
    return translations[language][key as keyof typeof translations['mk']] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}
