// Project data for the architect portfolio

// Images are served from this site's own /public directory.
const IMAGE_BASE_URL = '';

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
      `${IMAGE_BASE_URL}/projects/family-house-kochani/kuka-aleks-1.jpg`,
      `${IMAGE_BASE_URL}/projects/family-house-kochani/kuka-aleks-2.jpg`,
      `${IMAGE_BASE_URL}/projects/family-house-kochani/kuka-aleks-3.jpg`,
      `${IMAGE_BASE_URL}/projects/family-house-kochani/kuka-aleks-4.jpg`,
      `${IMAGE_BASE_URL}/projects/family-house-kochani/kuka-aleks-5.jpg`,
      `${IMAGE_BASE_URL}/projects/family-house-kochani/kuka-aleks-6.jpg`,
      `${IMAGE_BASE_URL}/projects/family-house-kochani/kuka-aleks-8.jpg`,
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
      `${IMAGE_BASE_URL}/projects/winery/vinarija-1.jpg`,
      `${IMAGE_BASE_URL}/projects/winery/vinarija-2.jpg`,
      `${IMAGE_BASE_URL}/projects/winery/vinarija-3.jpg`,
      `${IMAGE_BASE_URL}/projects/winery/vinarija-4.jpg`,
      `${IMAGE_BASE_URL}/projects/winery/vinarija-5.jpg`,
      `${IMAGE_BASE_URL}/projects/winery/vinarija-6.jpg`,
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
      `${IMAGE_BASE_URL}/projects/hotel-rooms/hotelska-soba-1.jpg`,
      `${IMAGE_BASE_URL}/projects/hotel-rooms/hotelska-soba-2.jpg`,
      `${IMAGE_BASE_URL}/projects/hotel-rooms/hotelska-soba-3.jpg`,
      `${IMAGE_BASE_URL}/projects/hotel-rooms/hotelska-soba-4.jpg`,
      `${IMAGE_BASE_URL}/projects/hotel-rooms/hotelska-soba-5.jpg`,
      `${IMAGE_BASE_URL}/projects/hotel-rooms/hotelska-soba-6.jpg`,
    ],
    featured: true,
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
      `${IMAGE_BASE_URL}/projects/facade-renovation/darko-kuka-1.jpg`,
      `${IMAGE_BASE_URL}/projects/facade-renovation/darko-kuka-2.jpg`,
      `${IMAGE_BASE_URL}/projects/facade-renovation/darko-kuka-3.jpg`,
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
      `${IMAGE_BASE_URL}/projects/family-house-gevgelija/kuka-istatova-1.jpg`,
      `${IMAGE_BASE_URL}/projects/family-house-gevgelija/kuka-istatova-2.jpg`,
      `${IMAGE_BASE_URL}/projects/family-house-gevgelija/kuka-istatova-3.jpg`,
      `${IMAGE_BASE_URL}/projects/family-house-gevgelija/kuka-istatova-4.jpg`,
      `${IMAGE_BASE_URL}/projects/family-house-gevgelija/kuka-istatova-5.jpg`,
      `${IMAGE_BASE_URL}/projects/family-house-gevgelija/kuka-istatova-6.jpg`,
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
      `${IMAGE_BASE_URL}/projects/bedroom-interior/spalna-1.jpg`,
      `${IMAGE_BASE_URL}/projects/bedroom-interior/spalna-2.jpg`,
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
    subtitle: 'An architecture studio delivering complete solutions from concept to construction',
  },
  about: {
    name: 'Abakus Art',
    title: 'Architecture Studio',
    bio: [
      'Abakus Art is an architecture studio offering a complete range of design services, from the initial concept through main project documentation and building permit approval. With authorizations covering architectural design, revision, supervision, and urban planning, we handle every stage of a project in house.',
      'We work across residential, commercial, and interior projects at a range of scales. Each commission receives close attention to detail, functional planning, and careful follow-through from drawing to built work.',
    ],
    yearsExperience: 10,
    projectsCompleted: 50,
    awards: 6,
    image: '/abakus-logo.png',
  },
  contact: {
    email: 'info@abakusart.mk',
    // Leave blank to hide the field on the site.
    phone: '',
    address: '',
    socialLinks: {},
  },
};
