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
    'project.family-house-kochani.title': 'Семејна куќа Кочани',
    'project.family-house-kochani.short': 'Модерна семејна куќа со елегантна игра на волумени и материјали',
    'project.family-house-kochani.description': 'Современ концепт на семејна куќа. Преку игра на волумени, форми и материјали создаден е еден префинет, елегантен изглед на пространа семејна куќа што комбинира модерна естетика со функционални простори за живеење.',

    'project.winery.title': 'Винарија',
    'project.winery.short': 'Компактна винарија што ги спојува традицијата и модерниот дизајн',
    'project.winery.description': 'Преку симбиоза на ново и старо и користење на локален материјал дефиниран е мал и компактен објект кој по својата форма е дијаметрално спротивен од околината но со материјализацијата е целосно вклопен во целокупната слика на пејзажот.',

    'project.hotel-rooms.title': 'Хотелски ентериер',
    'project.hotel-rooms.short': 'Модерни хотелски соби со топла, елегантна атмосфера',
    'project.hotel-rooms.description': 'Модерен и топол амбиент преку едноставни форми и текстури. Чист и елегантен изглед што создава удобна и привлечна атмосфера за гостите, балансирајќи функционалност со софистицирани дизајнерски елементи.',

    'project.residential-karpos.title': 'Станбена зграда Карпош',
    'project.residential-karpos.short': 'Современа мала станбена зграда со удобни станови',
    'project.residential-karpos.description': 'Мала станбена зграда со современ концепт наменета за удобно живеење. Проектот вклучува комотни станови со подземен паркинг, комбинирајќи модерен архитектонски јазик со практични решенија за живеење.',

    'project.residential-shtip-2.title': 'Станбен комплекс Штип',
    'project.residential-shtip-2.short': 'Модерен станбен комплекс со комерцијални простори',
    'project.residential-shtip-2.description': 'Станбен комплекс со комерцијални станови и модерен изглед. Дизајнот вклучува деловен простор на приземје и подземен паркинг, создавајќи мешовит развој што служи и за станбени и за комерцијални потреби.',

    'project.facade-renovation.title': 'Фасадно решение',
    'project.facade-renovation.short': 'Модерна трансформација на постоечка семејна куќа',
    'project.facade-renovation.description': 'Со реструктуирање на постојните форми и волумени преку современа материјализација дизајниран е нов и современ изглед на постоечка семејна куќа. Покрај модернизацијата добиен е и енергетски ефикасен објект.',

    'project.family-house-gevgelija.title': 'Семејна куќа Гевгелија',
    'project.family-house-gevgelija.short': 'Симбиоза на класичен и модерен архитектонски израз',
    'project.family-house-gevgelija.description': 'Семејна куќа - фасадно решение што постигнува симбиоза на класичен и модерен изглед. Чисти форми и едноставен израз го дефинираат овој проект, создавајќи безвременска естетика што ги поврзува традиционалниот и современиот архитектонски јазик.',

    'project.residential-kochani.title': 'Станбена зграда Кочани',
    'project.residential-kochani.short': 'Модерен станбен комплекс со функционални станови',
    'project.residential-kochani.description': 'Станбен комплекс со модерен изглед, функционални и компактни станбени единици. Проектот вклучува подземно паркирање и деловен простор на приземје, создавајќи комплетна животна средина.',

    'project.hospital-vasilevo.title': 'Специјална болница Василево',
    'project.hospital-vasilevo.short': 'Модерна специјализирана болница со две фасадни варијанти',
    'project.hospital-vasilevo.description': 'Модерно и современо концептуално решение на специјализирана болница со две фасадни решенија. Едноставен концепт и чисти форми прилагодени на функцијата на објектот, создавајќи средина погодна за лекување.',

    'project.hospital-shtip.title': 'Специјална болница Штип',
    'project.hospital-shtip.short': 'Современ дизајн на специјализирана медицинска установа',
    'project.hospital-shtip.description': 'Модерно и современо концептуално решение на специјализирана болница. Едноставен концепт и чисти форми прилагодени на функцијата на објектот, давајќи приоритет на грижата за пациентите и медицинската ефикасност.',

    'project.industrial-building.title': 'Индустриски објект',
    'project.industrial-building.short': 'Функционален индустриски објект во постоечки комплекс',
    'project.industrial-building.description': 'Индустриски објект во склоп на постоечки комплекс дефиниран врз основа на функционалните и локациските барања. Проектот одговара на специфичните индустриски потреби додека се интегрира со околната изградена средина.',

    'project.family-house-shtip.title': 'Семејна куќа Штип',
    'project.family-house-shtip.short': 'Модерна семејна куќа со четири станбени единици',
    'project.family-house-shtip.description': 'Современ концепт на семејна куќа со 4 станбени единици во духот на модерната архитектура. Дизајнот ги прифаќа чистите линии и функционалните простори додека создава различни животни средини во рамките на унифицирана архитектонска визија.',

    'project.residential-shtip.title': 'Станбен комплекс Сењак',
    'project.residential-shtip.short': 'Современ станбен комплекс со две згради',
    'project.residential-shtip.description': 'Современ станбен комплекс формиран од две ламели. Проектот вклучува влезови и пристапи на повеќе нивоа, заедно со паркинг простор и деловни содржини, создавајќи комплетна урбана животна средина.',

    'project.bedroom-interior.title': 'Ентериер на спална',
    'project.bedroom-interior.short': 'Модерен и топол дизајн на спална соба',
    'project.bedroom-interior.description': 'Модерен и едноставен топол изглед на спална соба. Проектот демонстрира внимание кон деталите во создавањето удобни, естетски пријатни простори за живеење.',

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
    'project.family-house-kochani.title': 'Family House Kochani',
    'project.family-house-kochani.short': 'Modern family home with elegant play of volumes and materials',
    'project.family-house-kochani.description': 'A contemporary family house concept that achieves a refined, elegant appearance through the interplay of volumes, forms, and materials. The spacious design combines modern aesthetics with functional living spaces, creating a harmonious blend of style and comfort.',

    'project.winery.title': 'Winery',
    'project.winery.short': 'Compact winery blending tradition with modern design',
    'project.winery.description': 'Through a symbiosis of old and new, utilizing local materials, this compact winery achieves a form that contrasts with its surroundings while seamlessly integrating into the landscape through its materialization. The design respects the winemaking tradition while introducing contemporary architectural elements.',

    'project.hotel-rooms.title': 'Hotel Interior Design',
    'project.hotel-rooms.short': 'Modern hotel rooms with warm, elegant atmosphere',
    'project.hotel-rooms.description': 'A hotel interior design project featuring modern and warm ambiance achieved through simple forms and textures. The clean, elegant aesthetic creates a comfortable and inviting atmosphere for guests, balancing functionality with sophisticated design elements.',

    'project.residential-karpos.title': 'Residential Building Karpos',
    'project.residential-karpos.short': 'Contemporary small residential building with comfortable apartments',
    'project.residential-karpos.description': 'A small residential building featuring a contemporary concept designed for comfortable living. The project includes spacious apartments with underground parking, combining modern architectural language with practical living solutions.',

    'project.residential-shtip-2.title': 'Residential Complex Shtip',
    'project.residential-shtip-2.short': 'Modern residential complex with commercial spaces',
    'project.residential-shtip-2.description': 'A residential complex featuring commercial apartments with a modern appearance. The design includes business premises on the ground floor and underground parking, creating a mixed-use development that serves both residential and commercial needs.',

    'project.facade-renovation.title': 'Facade Renovation',
    'project.facade-renovation.short': 'Modern transformation of existing family house',
    'project.facade-renovation.description': 'Through restructuring existing forms and volumes with contemporary materialization, a new modern appearance was designed for an existing family house. Beyond modernization, the project achieved improved energy efficiency, combining aesthetic renewal with sustainable building practices.',

    'project.family-house-gevgelija.title': 'Family House Gevgelija',
    'project.family-house-gevgelija.short': 'Symbiosis of classic and modern architectural expression',
    'project.family-house-gevgelija.description': 'A family house facade design that achieves a symbiosis of classic and modern appearance. Clean forms and simple expression define this project, creating a timeless aesthetic that bridges traditional and contemporary architectural language.',

    'project.residential-kochani.title': 'Residential Building Kochani',
    'project.residential-kochani.short': 'Modern residential complex with functional apartments',
    'project.residential-kochani.description': 'A residential complex with modern appearance featuring functional and compact residential units. The project includes underground parking and business premises on the ground floor, creating a comprehensive living environment.',

    'project.hospital-vasilevo.title': 'Special Hospital Vasilevo',
    'project.hospital-vasilevo.short': 'Modern specialized hospital with two facade variants',
    'project.hospital-vasilevo.description': 'A modern and contemporary conceptual design for a specialized hospital featuring two facade solutions. The simple concept and clean forms are adapted to the functional requirements of the medical facility, creating an environment conducive to healing.',

    'project.hospital-shtip.title': 'Special Hospital Shtip',
    'project.hospital-shtip.short': 'Contemporary specialized medical facility design',
    'project.hospital-shtip.description': 'A modern and contemporary conceptual solution for a specialized hospital. The simple concept and clean forms are tailored to the function of the building, prioritizing patient care and medical efficiency while maintaining architectural excellence.',

    'project.industrial-building.title': 'Industrial Building',
    'project.industrial-building.short': 'Functional industrial facility within existing complex',
    'project.industrial-building.description': 'An industrial building designed as part of an existing complex, defined by functional and locational requirements. The project responds to specific industrial needs while integrating with the surrounding built environment.',

    'project.family-house-shtip.title': 'Family House Shtip',
    'project.family-house-shtip.short': 'Modern family house with four residential units',
    'project.family-house-shtip.description': 'A contemporary family house concept featuring four residential units in the spirit of modern architecture. The design embraces clean lines and functional spaces while creating distinct living environments within a unified architectural vision.',

    'project.residential-shtip.title': 'Residential Complex Senjak',
    'project.residential-shtip.short': 'Contemporary residential complex with two buildings',
    'project.residential-shtip.description': 'A contemporary residential complex formed by two building blocks. The project features entrances and access points on multiple levels, along with parking space and business facilities, creating a comprehensive urban living environment.',

    'project.bedroom-interior.title': 'Bedroom Interior',
    'project.bedroom-interior.short': 'Modern and warm bedroom design',
    'project.bedroom-interior.description': 'A modern and simple bedroom interior design featuring a warm, inviting atmosphere. The project demonstrates attention to detail in creating comfortable, aesthetically pleasing living spaces.',

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
