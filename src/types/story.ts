export type Category = 'kedi' | 'kopek' | 'kus' | 'balik' | 'kemirgen' | 'egzotik' | 'hepsi';

export interface Story {
  id: number;
  title: string;
  description: string;
  fullContent: string;
  image: string;
  heroImage: string;
  author: string;
  authorImage?: string;
  slug: string;
  categories: string[];
  primaryCategory: string;
  relatedStories: string[];
  galleryImages?: string[];
  beforeAfterImages?: { before: string; after: string; caption: string }[];
  testimonial?: { text: string; petOwner: string; petName: string; ownerImage?: string };
  treatmentDuration?: string;
  treatmentLocation?: string;
  diagnosis?: string;
  tags?: string[];
} 