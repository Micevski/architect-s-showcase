// Mock data for the architect portfolio
// This will be replaced with database content when backend is connected

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
    id: 'modern-family-residence',
    title: 'Modern Family Residence',
    shortDescription: 'Contemporary family home with open-plan living spaces',
    description: 'A modern residential project featuring clean lines and functional spaces. The design maximizes natural light through strategic window placement while providing comfortable living areas for a growing family. Complete technical documentation was developed from concept through building permit.',
    category: 'residential',
    year: 2024,
    location: 'Shtip, North Macedonia',
    images: [
      'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=1200&q=80',
      'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=1200&q=80',
      'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=1200&q=80',
    ],
    featured: true,
  },
  {
    id: 'weekend-retreat',
    title: 'Weekend Retreat',
    shortDescription: 'A peaceful weekend house designed for relaxation',
    description: 'This weekend house project provides an escape from urban life. The design features open terraces, connection to nature, and efficient use of space. Developed from initial concept through detailed furniture designs and 3D visualizations.',
    category: 'residential',
    year: 2023,
    location: 'Kochani Region, North Macedonia',
    images: [
      'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1200&q=80',
      'https://images.unsplash.com/photo-1600573472550-8090b5e0745e?w=1200&q=80',
    ],
    featured: true,
  },
  {
    id: 'commercial-complex',
    title: 'Commercial Complex',
    shortDescription: 'Multi-purpose commercial building with modern amenities',
    description: 'A commercial development project including retail and office spaces. The design prioritizes functionality and accessibility while meeting all regulatory requirements. Full coordination of architectural phases and building permit documentation.',
    category: 'commercial',
    year: 2023,
    location: 'Shtip, North Macedonia',
    images: [
      'https://images.unsplash.com/photo-1497366216548-37526070297c?w=1200&q=80',
      'https://images.unsplash.com/photo-1497366754035-f200968a6e72?w=1200&q=80',
    ],
    featured: false,
  },
  {
    id: 'residential-extension',
    title: 'Residential Extension',
    shortDescription: 'Thoughtful addition to an existing family home',
    description: 'This renovation project involved extending an existing residence to accommodate growing family needs. The new addition seamlessly integrates with the original structure while providing modern amenities and improved spatial flow.',
    category: 'renovation',
    year: 2022,
    location: 'Kochani, North Macedonia',
    images: [
      'https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?w=1200&q=80',
      'https://images.unsplash.com/photo-1600210492493-0946911123ea?w=1200&q=80',
    ],
    featured: true,
  },
  {
    id: 'apartment-interior',
    title: 'Apartment Interior',
    shortDescription: 'Complete interior design with custom furniture details',
    description: 'A comprehensive interior architecture project featuring 2D and 3D drawings with detailed furniture designs. The design creates functional and aesthetically pleasing living spaces with attention to material selection and spatial efficiency.',
    category: 'interior',
    year: 2022,
    location: 'Skopje, North Macedonia',
    images: [
      'https://images.unsplash.com/photo-1600607687644-c7171b42498f?w=1200&q=80',
      'https://images.unsplash.com/photo-1600566752355-35792bedcfea?w=1200&q=80',
    ],
    featured: false,
  },
  {
    id: 'hillside-villa',
    title: 'Hillside Villa',
    shortDescription: 'Elegant villa taking advantage of natural terrain',
    description: 'A residential project that works with the natural slope of the land to create dramatic living spaces with panoramic views. The design includes terraced outdoor areas and careful consideration of orientation for optimal solar exposure.',
    category: 'residential',
    year: 2021,
    location: 'Eastern Macedonia',
    images: [
      'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=1200&q=80',
      'https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=1200&q=80',
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
