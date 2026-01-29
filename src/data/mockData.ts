// Project data for the architect portfolio

export interface Project {
  id: string;
  title: string;
  description: string;
  shortDescription: string;
  category: 'residential' | 'commercial' | 'interior' | 'renovation';
  year: number;
  location: string;
  images: string[];
  featured: boolean;
}

export interface Service {
  id: string;
  title: string;
  description: string;
  icon: string;
}

export interface SiteContent {
  hero: {
    tagline: string;
    subtitle: string;
  };
  about: {
    name: string;
    title: string;
    bio: string[];
    yearsExperience: number;
    projectsCompleted: number;
    awards: number;
    image: string;
  };
  contact: {
    email: string;
    phone: string;
    address: string;
    socialLinks: {
      instagram?: string;
      linkedin?: string;
      pinterest?: string;
    };
  };
}

export const projects: Project[] = [
  {
    id: 'family-house-kochani',
    title: 'Family House Kochani',
    shortDescription: 'Modern family home with elegant play of volumes and materials',
    description: 'A contemporary family house concept that achieves a refined, elegant appearance through the interplay of volumes, forms, and materials. The spacious design combines modern aesthetics with functional living spaces, creating a harmonious blend of style and comfort.',
    category: 'residential',
    year: 2026,
    location: 'Kochani Municipality, North Macedonia',
    images: [
      '/projects/family-house-kochani/kuka aleks 1.jpg',
      '/projects/family-house-kochani/kuka aleks 2.jpg',
      '/projects/family-house-kochani/kuka aleks 3.jpg',
      '/projects/family-house-kochani/kuka aleks 4.jpg',
      '/projects/family-house-kochani/kuka aleks 5.jpg',
      '/projects/family-house-kochani/kuka aleks 6.jpg',
      '/projects/family-house-kochani/kuka aleks 8.jpg',
    ],
    featured: true,
  },
  {
    id: 'winery',
    title: 'Winery',
    shortDescription: 'Compact winery blending tradition with modern design',
    description: 'Through a symbiosis of old and new, utilizing local materials, this compact winery achieves a form that contrasts with its surroundings while seamlessly integrating into the landscape through its materialization. The design respects the winemaking tradition while introducing contemporary architectural elements.',
    category: 'commercial',
    year: 2025,
    location: 'Zrnovci Municipality, North Macedonia',
    images: [
      '/projects/winery/vinarija 1.jpg',
      '/projects/winery/vinarija 2.jpg',
      '/projects/winery/vinarija 3.jpg',
      '/projects/winery/vinarija 4.jpg',
      '/projects/winery/vinarija 5.jpg',
      '/projects/winery/vinarija 6.jpg',
    ],
    featured: true,
  },
  {
    id: 'hotel-rooms',
    title: 'Hotel Interior Design',
    shortDescription: 'Modern hotel rooms with warm, elegant atmosphere',
    description: 'A hotel interior design project featuring modern and warm ambiance achieved through simple forms and textures. The clean, elegant aesthetic creates a comfortable and inviting atmosphere for guests, balancing functionality with sophisticated design elements.',
    category: 'interior',
    year: 2025,
    location: 'Kochani Municipality, North Macedonia',
    images: [
      '/projects/hotel-rooms/hotelska soba 1.jpg',
      '/projects/hotel-rooms/hotelska soba 2.jpg',
      '/projects/hotel-rooms/hotelska soba 3.jpg',
      '/projects/hotel-rooms/hotelska soba 4.jpg',
      '/projects/hotel-rooms/hotelska soba 5.jpg',
      '/projects/hotel-rooms/hotelska soba 6.jpg',
    ],
    featured: true,
  },
  {
    id: 'residential-karpos',
    title: 'Residential Building Karpos',
    shortDescription: 'Contemporary small residential building with comfortable apartments',
    description: 'A small residential building featuring a contemporary concept designed for comfortable living. The project includes spacious apartments with underground parking, combining modern architectural language with practical living solutions.',
    category: 'residential',
    year: 2025,
    location: 'Karpos Municipality, Skopje, North Macedonia',
    images: [
      '/projects/residential-karpos/zgrada karpos.jpg',
      '/projects/residential-karpos/zgrada karpos 2.jpg',
      '/projects/residential-karpos/zgrada karpos 3.jpg',
    ],
    featured: true,
  },
  {
    id: 'residential-shtip-2',
    title: 'Residential Complex Shtip',
    shortDescription: 'Modern residential complex with commercial spaces',
    description: 'A residential complex featuring commercial apartments with a modern appearance. The design includes business premises on the ground floor and underground parking, creating a mixed-use development that serves both residential and commercial needs.',
    category: 'residential',
    year: 2024,
    location: 'Shtip Municipality, North Macedonia',
    images: [
      '/projects/residential-shtip-2/pregeg 1.jpg',
      '/projects/residential-shtip-2/prebeg 2.jpg',
      '/projects/residential-shtip-2/prebeg 3.jpg',
    ],
    featured: false,
  },
  {
    id: 'facade-renovation',
    title: 'Facade Renovation',
    shortDescription: 'Modern transformation of existing family house',
    description: 'Through restructuring existing forms and volumes with contemporary materialization, a new modern appearance was designed for an existing family house. Beyond modernization, the project achieved improved energy efficiency, combining aesthetic renewal with sustainable building practices.',
    category: 'renovation',
    year: 2024,
    location: 'Shtip Municipality, North Macedonia',
    images: [
      '/projects/facade-renovation/darko kuka 1.jpg',
      '/projects/facade-renovation/darko kuka 2.jpg',
      '/projects/facade-renovation/darko kuka 3.jpg',
    ],
    featured: true,
  },
  {
    id: 'family-house-gevgelija',
    title: 'Family House Gevgelija',
    shortDescription: 'Symbiosis of classic and modern architectural expression',
    description: 'A family house facade design that achieves a symbiosis of classic and modern appearance. Clean forms and simple expression define this project, creating a timeless aesthetic that bridges traditional and contemporary architectural language.',
    category: 'residential',
    year: 2023,
    location: 'Gevgelija Municipality, North Macedonia',
    images: [
      '/projects/family-house-gevgelija/kuka istatova 1.jpg',
      '/projects/family-house-gevgelija/kuka istatova 2.jpg',
      '/projects/family-house-gevgelija/kuka istatova 3.jpg',
      '/projects/family-house-gevgelija/kuka istatova 4.jpg',
      '/projects/family-house-gevgelija/kuka istatova 5.jpg',
      '/projects/family-house-gevgelija/kuka istatova 6.jpg',
    ],
    featured: false,
  },
  {
    id: 'residential-kochani',
    title: 'Residential Building Kochani',
    shortDescription: 'Modern residential complex with functional apartments',
    description: 'A residential complex with modern appearance featuring functional and compact residential units. The project includes underground parking and business premises on the ground floor, creating a comprehensive living environment.',
    category: 'residential',
    year: 2023,
    location: 'Kochani Municipality, North Macedonia',
    images: [
      '/projects/residential-kochani/zgrada kocani 1.jpg',
      '/projects/residential-kochani/zgrada kocani 2.jpg',
      '/projects/residential-kochani/zgrada kocani 3.jpg',
      '/projects/residential-kochani/zgrada kocani 4.jpg',
    ],
    featured: false,
  },
  {
    id: 'hospital-vasilevo',
    title: 'Special Hospital Vasilevo',
    shortDescription: 'Modern specialized hospital with two facade variants',
    description: 'A modern and contemporary conceptual design for a specialized hospital featuring two facade solutions. The simple concept and clean forms are adapted to the functional requirements of the medical facility, creating an environment conducive to healing.',
    category: 'commercial',
    year: 2022,
    location: 'Vasilevo Municipality, North Macedonia',
    images: [
      '/projects/hospital-vasilevo/klinika strumica 1.jpg',
      '/projects/hospital-vasilevo/klinika strumica 2.jpg',
      '/projects/hospital-vasilevo/klinika strumica var 2.jpg',
      '/projects/hospital-vasilevo/klinika strumica var 2-1.jpg',
    ],
    featured: false,
  },
  {
    id: 'hospital-shtip',
    title: 'Special Hospital Shtip',
    shortDescription: 'Contemporary specialized medical facility design',
    description: 'A modern and contemporary conceptual solution for a specialized hospital. The simple concept and clean forms are tailored to the function of the building, prioritizing patient care and medical efficiency while maintaining architectural excellence.',
    category: 'commercial',
    year: 2022,
    location: 'Shtip Municipality, North Macedonia',
    images: [
      '/projects/hospital-shtip/organziski 1.jpg',
      '/projects/hospital-shtip/organziski 2.jpg',
      '/projects/hospital-shtip/organziski 3.jpg',
      '/projects/hospital-shtip/organizski 4.jpg',
      '/projects/hospital-shtip/organizksi 5.jpg',
    ],
    featured: false,
  },
  {
    id: 'industrial-building',
    title: 'Industrial Building',
    shortDescription: 'Functional industrial facility within existing complex',
    description: 'An industrial building designed as part of an existing complex, defined by functional and locational requirements. The project responds to specific industrial needs while integrating with the surrounding built environment.',
    category: 'commercial',
    year: 2022,
    location: 'Vizbegovo, North Macedonia',
    images: [
      '/projects/industrial-building/poliesterdej.jpg',
    ],
    featured: false,
  },
  {
    id: 'family-house-shtip',
    title: 'Family House Shtip',
    shortDescription: 'Modern family house with four residential units',
    description: 'A contemporary family house concept featuring four residential units in the spirit of modern architecture. The design embraces clean lines and functional spaces while creating distinct living environments within a unified architectural vision.',
    category: 'residential',
    year: 2020,
    location: 'Shtip Municipality, North Macedonia',
    images: [
      '/projects/family-house-shtip/atlantik 1.jpg',
      '/projects/family-house-shtip/atlantik 2.jpg',
      '/projects/family-house-shtip/atlantik 3.jpg',
      '/projects/family-house-shtip/atlantik 4.jpg',
      '/projects/family-house-shtip/atlantik 5.jpg',
      '/projects/family-house-shtip/atlantik 6.jpg',
      '/projects/family-house-shtip/atlantik 7.jpg',
      '/projects/family-house-shtip/atlantik 8.jpg',
    ],
    featured: false,
  },
  {
    id: 'residential-shtip',
    title: 'Residential Complex Senjak',
    shortDescription: 'Contemporary residential complex with two buildings',
    description: 'A contemporary residential complex formed by two building blocks. The project features entrances and access points on multiple levels, along with parking space and business facilities, creating a comprehensive urban living environment.',
    category: 'residential',
    year: 2020,
    location: 'Shtip Municipality, North Macedonia',
    images: [
      '/projects/residential-shtip/senjak 1.jpg',
      '/projects/residential-shtip/senjak 2.jpg',
      '/projects/residential-shtip/senjak 3.jpg',
    ],
    featured: false,
  },
  {
    id: 'bedroom-interior',
    title: 'Bedroom Interior',
    shortDescription: 'Modern and warm bedroom design',
    description: 'A modern and simple bedroom interior design featuring a warm, inviting atmosphere. The project demonstrates attention to detail in creating comfortable, aesthetically pleasing living spaces.',
    category: 'interior',
    year: 2023,
    location: 'North Macedonia',
    images: [
      '/projects/bedroom-interior/spalna 1.jpg',
      '/projects/bedroom-interior/spalna 2.jpg',
    ],
    featured: false,
  },
];

export const services: Service[] = [
  {
    id: 'architectural-design',
    title: 'Architectural Design',
    description: 'Complete architectural documentation including conceptual and main projects. 2D and 3D projections, technical drawings, and full preparation for building permits.',
    icon: 'Home',
  },
  {
    id: 'urban-planning',
    title: 'Urban Planning',
    description: 'Development of urban planning documentation including detailed urban plans and urban projects. Full management of procedures through the E-Urbanism system.',
    icon: 'Building2',
  },
  {
    id: 'supervision',
    title: 'Construction Supervision',
    description: 'Professional supervision of construction projects ensuring compliance with approved documentation, quality standards, and building regulations.',
    icon: 'Palette',
  },
  {
    id: 'safety-design',
    title: 'Fire Safety & Protection',
    description: 'Design documentation for fire protection, explosion safety, and occupational health and safety for first category buildings.',
    icon: 'Hammer',
  },
];

export const siteContent: SiteContent = {
  hero: {
    tagline: 'Designing Spaces, Building Dreams',
    subtitle: 'Licensed architect delivering complete architectural solutions from concept to construction',
  },
  about: {
    name: 'Ljubica Micevska',
    title: 'Licensed Architect',
    bio: [
      'As a licensed architect with comprehensive authorizations in architectural design, revision, supervision, and urban planning, I bring a complete range of professional services to every project. My education at the Faculty of Architecture in Skopje provided a strong foundation that I continue to build upon.',
      'With experience spanning residential, commercial, and interior projects, I specialize in developing technical documentation from conceptual designs through main projects. I coordinate all phases of project documentation and manage the entire building permit process.',
      'Currently based in Shtip, Macedonia, I work at Studio Atrium where I handle projects of all scales—from weekend houses to capital construction projects—ensuring each receives meticulous attention to detail and professional execution.',
    ],
    yearsExperience: 10,
    projectsCompleted: 50,
    awards: 6,
    image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=800&q=80',
  },
  contact: {
    email: 'micevska.ljubica@yahoo.com',
    phone: '+389 78 275 016',
    address: 'Studio Atrium DOO\nShtip, North Macedonia',
    socialLinks: {
      linkedin: 'https://linkedin.com',
    },
  },
};
