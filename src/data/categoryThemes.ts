type Category = 'kedi' | 'kopek' | 'egzotik' | 'hepsi';

export interface CategoryTheme {
  label: string;
  icon: string;
  color: string;
  gradient: string;
  headerBg: string;
  accentColor: string;
  heroGradient: string;
  darkHeroGradient: string;
  iconBg: string;
}

export const categoryThemes: Record<Category, CategoryTheme> = {
  hepsi: {
    label: 'Tüm Hikayeler',
    icon: '🐾',
    color: 'text-primary',
    gradient: 'from-primary to-primary/80',
    headerBg: 'bg-primary/10',
    accentColor: 'border-primary/30',
    heroGradient: 'from-secondary/90 to-background',
    darkHeroGradient: 'from-secondary/30 to-background',
    iconBg: 'bg-primary/10'
  },
  kedi: {
    label: 'Kedi Hikayeleri',
    icon: '🐱',
    color: 'text-pink-600',
    gradient: 'from-pink-500 to-pink-600',
    headerBg: 'bg-pink-100',
    accentColor: 'border-pink-300',
    heroGradient: 'from-pink-100/90 to-background',
    darkHeroGradient: 'from-pink-800/30 to-background',
    iconBg: 'bg-pink-100'
  },
  kopek: {
    label: 'Köpek Hikayeleri',
    icon: '🐶',
    color: 'text-amber-600',
    gradient: 'from-amber-500 to-amber-600',
    headerBg: 'bg-amber-100',
    accentColor: 'border-amber-300',
    heroGradient: 'from-amber-100/90 to-background',
    darkHeroGradient: 'from-amber-800/30 to-background',
    iconBg: 'bg-amber-100'
  },
  egzotik: {
    label: 'Egzotik Hikayeleri',
    icon: '🦜',
    color: 'text-green-600',
    gradient: 'from-green-500 to-green-600',
    headerBg: 'bg-green-100',
    accentColor: 'border-green-300',
    heroGradient: 'from-green-100/90 to-background',
    darkHeroGradient: 'from-green-800/30 to-background',
    iconBg: 'bg-green-100'
  }
}; 