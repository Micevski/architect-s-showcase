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
    'nav.about': 'За нас',
    'nav.services': 'Услуги',
    'nav.projects': 'Проекти',
    'nav.contact': 'Контакт',

    // Hero
    'hero.tagline': 'Дизајнирање простори, градење соништа',
    'hero.subtitle': 'Архитектонско студио со комплетни решенија од концепт до реализација',

    // About
    'about.label': 'За нас',
    'about.name': 'Abakus Art',
    'about.title': 'Архитектонско студио',
    'about.bio.1': 'Абакус Арт е архитектонско студио кое нуди целосен спектар на услуги во проектирањето — од идејно решение, преку основен проект, до добивање одобрение за градење. Со овластувања за проектирање, ревизија, надзор и урбанистичко планирање, ја покриваме секоја фаза од проектот.',
    'about.bio.2': 'Работиме на станбени, комерцијални и ентериерни проекти од различни размери. Секој проект го водиме со внимание кон деталите, функционалното планирање и квалитетот на изведбата.',
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
    'project.family-house-kochani.title': 'Семејна куќа Кочани',
    'project.family-house-kochani.short': 'Модерна семејна куќа со елегантна игра на волумени и материјали',
    'project.family-house-kochani.description': 'Современ концепт на семејна куќа. Преку игра на волумени, форми и материјали создаден е еден префинет, елегантен изглед на пространа семејна куќа што комбинира модерна естетика со функционални простори за живеење.',

    'project.winery.title': 'Винарија',
    'project.winery.short': 'Компактна винарија што ги спојува традицијата и модерниот дизајн',
    'project.winery.description': 'Преку симбиоза на ново и старо и користење на локален материјал дефиниран е мал и компактен објект кој по својата форма е дијаметрално спротивен од околината но со материјализацијата е целосно вклопен во целокупната слика на пејзажот.',

    'project.hotel-rooms.title': 'Хотелски ентериер',
    'project.hotel-rooms.short': 'Модерни хотелски соби со топла, елегантна атмосфера',
    'project.hotel-rooms.description': 'Модерен и топол амбиент преку едноставни форми и текстури. Чист и елегантен изглед што создава удобна и привлечна атмосфера за гостите, балансирајќи функционалност со софистицирани дизајнерски елементи.',

    'project.facade-renovation.title': 'Фасадно решение',
    'project.facade-renovation.short': 'Модерна трансформација на постоечка семејна куќа',
    'project.facade-renovation.description': 'Со реструктуирање на постојните форми и волумени преку современа материјализација дизајниран е нов и современ изглед на постоечка семејна куќа. Покрај модернизацијата добиен е и енергетски ефикасен објект.',

    'project.family-house-gevgelija.title': 'Семејна куќа Гевгелија',
    'project.family-house-gevgelija.short': 'Симбиоза на класичен и модерен архитектонски израз',
    'project.family-house-gevgelija.description': 'Семејна куќа - фасадно решение што постигнува симбиоза на класичен и модерен изглед. Чисти форми и едноставен израз го дефинираат овој проект, создавајќи безвременска естетика што ги поврзува традиционалниот и современиот архитектонски јазик.',

    'project.bedroom-interior.title': 'Ентериер на спална',
    'project.bedroom-interior.short': 'Модерен и топол дизајн на спална соба',
    'project.bedroom-interior.description': 'Модерен и едноставен топол изглед на спална соба. Проектот демонстрира внимание кон деталите во создавањето удобни, естетски пријатни простори за живеење.',

    // Contact
    'contact.label': 'Контакт',
    'contact.title': 'Да разговараме за вашиот проект',
    'contact.description': 'Секој одличен проект започнува со разговор. Без разлика дали сонувате за нов дом, преуредување на постоечки простор или планирате комерцијална инвестиција, би сакале да слушнеме за вашата визија.',
    'contact.email': 'Е-пошта',
    'contact.phone': 'Телефон',
    'contact.studio': 'Студио',
    'contact.form.name': 'Име',
    'contact.form.email': 'Е-пошта',
    'contact.form.message': 'Опишете го вашиот проект',
    'contact.form.submit': 'Испрати порака',
    'contact.form.sending': 'Се испраќа...',
    'contact.form.success.title': 'Пораката е испратена',
    'contact.form.success.description': 'Ви благодариме што се јавивте. Ќе ви одговориме наскоро.',
    'contact.form.error.title': 'Грешка при испраќање',
    'contact.form.error.description': 'Пораката не можеше да се испрати. Ве молиме обидете се повторно или контактирајте нè директно.',

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
    'hero.subtitle': 'An architecture studio delivering complete solutions from concept to construction',

    // About
    'about.label': 'About',
    'about.name': 'Abakus Art',
    'about.title': 'Architecture Studio',
    'about.bio.1': 'Abakus Art is an architecture studio offering a complete range of design services, from the initial concept through main project documentation and building permit approval. With authorizations covering architectural design, revision, supervision, and urban planning, we handle every stage of a project in house.',
    'about.bio.2': 'We work across residential, commercial, and interior projects at a range of scales. Each commission receives close attention to detail, functional planning, and careful follow-through from drawing to built work.',
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
    'project.family-house-kochani.title': 'Family House Kochani',
    'project.family-house-kochani.short': 'Modern family home with elegant play of volumes and materials',
    'project.family-house-kochani.description': 'A contemporary family house concept that achieves a refined, elegant appearance through the interplay of volumes, forms, and materials. The spacious design combines modern aesthetics with functional living spaces, creating a harmonious blend of style and comfort.',

    'project.winery.title': 'Winery',
    'project.winery.short': 'Compact winery blending tradition with modern design',
    'project.winery.description': 'Through a symbiosis of old and new, utilizing local materials, this compact winery achieves a form that contrasts with its surroundings while seamlessly integrating into the landscape through its materialization. The design respects the winemaking tradition while introducing contemporary architectural elements.',

    'project.hotel-rooms.title': 'Hotel Interior Design',
    'project.hotel-rooms.short': 'Modern hotel rooms with warm, elegant atmosphere',
    'project.hotel-rooms.description': 'A hotel interior design project featuring modern and warm ambiance achieved through simple forms and textures. The clean, elegant aesthetic creates a comfortable and inviting atmosphere for guests, balancing functionality with sophisticated design elements.',

    'project.facade-renovation.title': 'Facade Renovation',
    'project.facade-renovation.short': 'Modern transformation of existing family house',
    'project.facade-renovation.description': 'Through restructuring existing forms and volumes with contemporary materialization, a new modern appearance was designed for an existing family house. Beyond modernization, the project achieved improved energy efficiency, combining aesthetic renewal with sustainable building practices.',

    'project.family-house-gevgelija.title': 'Family House Gevgelija',
    'project.family-house-gevgelija.short': 'Symbiosis of classic and modern architectural expression',
    'project.family-house-gevgelija.description': 'A family house facade design that achieves a symbiosis of classic and modern appearance. Clean forms and simple expression define this project, creating a timeless aesthetic that bridges traditional and contemporary architectural language.',

    'project.bedroom-interior.title': 'Bedroom Interior',
    'project.bedroom-interior.short': 'Modern and warm bedroom design',
    'project.bedroom-interior.description': 'A modern and simple bedroom interior design featuring a warm, inviting atmosphere. The project demonstrates attention to detail in creating comfortable, aesthetically pleasing living spaces.',

    // Contact
    'contact.label': 'Contact',
    'contact.title': "Let's Discuss Your Project",
    'contact.description': "Every great project begins with a conversation. Whether you're dreaming of a new home, reimagining an existing space, or planning a commercial venture, we'd love to hear about your vision.",
    'contact.email': 'Email',
    'contact.phone': 'Phone',
    'contact.studio': 'Studio',
    'contact.form.name': 'Name',
    'contact.form.email': 'Email',
    'contact.form.message': 'Tell us about your project',
    'contact.form.submit': 'Send Message',
    'contact.form.sending': 'Sending...',
    'contact.form.success.title': 'Message sent',
    'contact.form.success.description': "Thank you for reaching out. We'll be in touch soon.",
    'contact.form.error.title': 'Failed to send',
    'contact.form.error.description': 'Your message could not be sent. Please try again or contact us directly.',

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
