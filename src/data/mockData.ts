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
    id: 'harbor-residence',
    title: 'Harbor Residence',
    shortDescription: 'A contemporary waterfront home embracing its coastal setting',
    description: 'This modern residence celebrates its waterfront location through expansive glazing and flowing indoor-outdoor spaces. The design prioritizes natural light and views while maintaining privacy and shelter from the elements. Local materials ground the architecture in its context.',
    category: 'residential',
    year: 2023,
    location: 'Newport Beach, CA',
    images: [
      'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=1200&q=80',
      'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=1200&q=80',
      'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=1200&q=80',
    ],
    featured: true,
  },
  {
    id: 'oak-pavilion',
    title: 'Oak Pavilion',
    shortDescription: 'A serene forest retreat connecting architecture and nature',
    description: 'Nestled among ancient oaks, this pavilion-style home dissolves the boundaries between interior and exterior. The design features a series of interconnected volumes that step gently down the hillside, preserving existing trees and maximizing connection to the landscape.',
    category: 'residential',
    year: 2023,
    location: 'Sonoma, CA',
    images: [
      'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1200&q=80',
      'https://images.unsplash.com/photo-1600573472550-8090b5e0745e?w=1200&q=80',
    ],
    featured: true,
  },
  {
    id: 'meridian-office',
    title: 'Meridian Office',
    shortDescription: 'A forward-thinking workspace promoting collaboration',
    description: 'This commercial project reimagines the contemporary office environment. Open floor plates, abundant natural light, and a variety of work settings support both focused work and spontaneous collaboration. Sustainable strategies are woven throughout the design.',
    category: 'commercial',
    year: 2022,
    location: 'San Francisco, CA',
    images: [
      'https://images.unsplash.com/photo-1497366216548-37526070297c?w=1200&q=80',
      'https://images.unsplash.com/photo-1497366754035-f200968a6e72?w=1200&q=80',
    ],
    featured: false,
  },
  {
    id: 'gallery-loft',
    title: 'Gallery Loft',
    shortDescription: 'Industrial space transformed into an art-filled residence',
    description: 'A former warehouse reimagined as a sophisticated urban residence. The design preserves the raw character of the original structure while introducing refined interventions that create intimate living spaces within the grand volume.',
    category: 'renovation',
    year: 2022,
    location: 'Los Angeles, CA',
    images: [
      'https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?w=1200&q=80',
      'https://images.unsplash.com/photo-1600210492493-0946911123ea?w=1200&q=80',
    ],
    featured: true,
  },
  {
    id: 'zen-interior',
    title: 'Zen Interior',
    shortDescription: 'Minimalist interior design inspired by Japanese aesthetics',
    description: 'This interior project brings principles of Japanese design to a modern apartment. Clean lines, natural materials, and carefully curated moments of beauty create a sense of calm and order. Every element serves a purpose.',
    category: 'interior',
    year: 2021,
    location: 'Seattle, WA',
    images: [
      'https://images.unsplash.com/photo-1600607687644-c7171b42498f?w=1200&q=80',
      'https://images.unsplash.com/photo-1600566752355-35792bedcfea?w=1200&q=80',
    ],
    featured: false,
  },
  {
    id: 'coastal-retreat',
    title: 'Coastal Retreat',
    shortDescription: 'A holiday home designed for relaxation and contemplation',
    description: 'Perched on a coastal bluff, this retreat captures panoramic ocean views while providing shelter from prevailing winds. The architecture is restrained, allowing the dramatic landscape to take center stage.',
    category: 'residential',
    year: 2021,
    location: 'Carmel, CA',
    images: [
      'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=1200&q=80',
      'https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=1200&q=80',
    ],
    featured: false,
  },
];

export const services: Service[] = [
  {
    id: 'residential',
    title: 'Residential Design',
    description: 'Custom homes that reflect your lifestyle and aspirations. From initial concept through construction, we guide you through every step of creating your ideal living environment.',
    icon: 'Home',
  },
  {
    id: 'commercial',
    title: 'Commercial Projects',
    description: 'Thoughtful workplaces and commercial spaces that enhance productivity and embody your brand. We create environments where businesses thrive.',
    icon: 'Building2',
  },
  {
    id: 'interior',
    title: 'Interior Architecture',
    description: 'Refined interior spaces that balance aesthetics with functionality. We consider every detail to create cohesive, harmonious environments.',
    icon: 'Palette',
  },
  {
    id: 'renovation',
    title: 'Renovations',
    description: 'Sensitive transformations of existing structures that honor their heritage while meeting contemporary needs. We breathe new life into beloved spaces.',
    icon: 'Hammer',
  },
];

export const siteContent: SiteContent = {
  hero: {
    tagline: 'Architecture of Intention',
    subtitle: 'Creating thoughtful spaces that elevate everyday living',
  },
  about: {
    name: 'Elena Vasquez',
    title: 'Principal Architect',
    bio: [
      'With over two decades of practice, I believe architecture should be a dialogue between people and place. Each project begins with deep listening—understanding not just what clients need, but how they want to feel in their spaces.',
      'My approach draws from modernist principles while remaining grounded in context and craft. I work with natural materials, celebrate natural light, and design spaces that will age gracefully over time.',
      'Based in California, the studio takes on a limited number of projects each year, ensuring every client receives dedicated attention and every design is realized with care.',
    ],
    yearsExperience: 22,
    projectsCompleted: 85,
    awards: 12,
    image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=800&q=80',
  },
  contact: {
    email: 'studio@elenavasquez.com',
    phone: '+1 (415) 555-0123',
    address: '450 Pacific Avenue, Suite 300\nSan Francisco, CA 94133',
    socialLinks: {
      instagram: 'https://instagram.com',
      linkedin: 'https://linkedin.com',
      pinterest: 'https://pinterest.com',
    },
  },
};
