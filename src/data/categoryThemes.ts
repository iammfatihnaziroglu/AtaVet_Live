type Category = 'kedi' | 'kopek' | 'kus' | 'balik' | 'kemirgen' | 'egzotik' | 'hepsi';

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
  kus: {
    label: 'Kuş Hikayeleri',
    icon: '🦜',
    color: 'text-blue-600',
    gradient: 'from-blue-500 to-blue-600',
    headerBg: 'bg-blue-100',
    accentColor: 'border-blue-300',
    heroGradient: 'from-blue-100/90 to-background',
    darkHeroGradient: 'from-blue-800/30 to-background',
    iconBg: 'bg-blue-100'
  },
  balik: {
    label: 'Akvaryum Hikayeleri',
    icon: '🐠',
    color: 'text-cyan-600',
    gradient: 'from-cyan-500 to-cyan-600',
    headerBg: 'bg-cyan-100',
    accentColor: 'border-cyan-300',
    heroGradient: 'from-cyan-100/90 to-background',
    darkHeroGradient: 'from-cyan-800/30 to-background',
    iconBg: 'bg-cyan-100'
  },
  kemirgen: {
    label: 'Kemirgen Hikayeleri',
    icon: '🐹',
    color: 'text-orange-600',
    gradient: 'from-orange-500 to-orange-600',
    headerBg: 'bg-orange-100',
    accentColor: 'border-orange-300',
    heroGradient: 'from-orange-100/90 to-background',
    darkHeroGradient: 'from-orange-800/30 to-background',
    iconBg: 'bg-orange-100'
  },
  egzotik: {
    label: 'Egzotik Hikayeleri',
    icon: '🦎',
    color: 'text-green-600',
    gradient: 'from-green-500 to-green-600',
    headerBg: 'bg-green-100',
    accentColor: 'border-green-300',
    heroGradient: 'from-green-100/90 to-background',
    darkHeroGradient: 'from-green-800/30 to-background',
    iconBg: 'bg-green-100'
  }
}; 