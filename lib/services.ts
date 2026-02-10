export interface Service {
  id: string;
  title: string;
  description: string;
  longDescription: string;
  icon: string;
  category: 'hair' | 'color' | 'extensions' | 'cosmetics';
  featured: boolean;
}

export const SERVICES: Service[] = [
  {
    id: 'haircuts',
    title: 'Haarschnitte & Styling',
    description: 'Individuelle Schnitte für jeden Typ',
    longDescription: 'Vom klassischen Schnitt bis zum modernen Style - wir beraten Sie ausführlich und setzen Ihre Wünsche professionell um. Jeder Haarschnitt wird individuell auf Ihre Gesichtsform, Haarstruktur und persönlichen Vorlieben abgestimmt.',
    icon: 'scissors',
    category: 'hair',
    featured: true,
  },
  {
    id: 'color',
    title: 'Farben & Strähnen',
    description: 'Professionelle Färbetechniken',
    longDescription: 'Ob natürliche Töne oder kreative Farbakzente - mit hochwertigen Produkten bringen wir Farbe in Ihr Leben. Von sanften Strähnen bis zur kompletten Coloration, wir finden die perfekte Farbe für Sie.',
    icon: 'palette',
    category: 'color',
    featured: true,
  },
  {
    id: 'great-lengths',
    title: 'Great Lengths Extensions',
    description: 'Keratin-Bonding für natürliche Haarverlängerung',
    longDescription: 'Mit der Original Great Lengths Technologie und der einzigartigen PIANO Farbpalette schaffen wir natürliche, lang anhaltende Haarverlängerungen. Die Keratin-Bonding-Methode sorgt für unsichtbare Verbindungen und ein natürliches Tragegefühl.',
    icon: 'sparkles',
    category: 'extensions',
    featured: true,
  },
  {
    id: 'cosmetics',
    title: 'Kosmetik & Pflege',
    description: 'Gesichtsbehandlungen und Make-up',
    longDescription: 'Gönnen Sie sich eine professionelle Gesichtsbehandlung oder ein perfektes Make-up für besondere Anlässe. Unsere Kosmetikbehandlungen kombinieren Entspannung mit sichtbaren Ergebnissen.',
    icon: 'heart',
    category: 'cosmetics',
    featured: true,
  },
];

export const SERVICE_CATEGORIES = [
  { id: 'hair', label: 'Haarschnitte' },
  { id: 'color', label: 'Färbungen' },
  { id: 'extensions', label: 'Extensions' },
  { id: 'cosmetics', label: 'Kosmetik' },
];
