export const BUSINESS_INFO = {
  name: 'Kamm In',
  fullName: 'Kamm In - Ihr Friseursalon & Kosmetikstudio',
  owner: 'Nicole Rückel',
  mission: 'Ihr Wohlbefinden ist meine Mission',

  address: {
    street: 'Weiherstraße 21',
    postalCode: '53359',
    city: 'Rheinbach',
    country: 'Deutschland',
    mapUrl: 'https://maps.google.com/?q=Weiherstraße+21,+53359+Rheinbach',
    coordinates: {
      lat: 50.6247,
      lng: 6.9484,
    },
  },

  contact: {
    phone: '0 22 26 - 900 488',
    mobile: '0 163 30 51 467',
    phoneLink: 'tel:+492226900488',
    mobileLink: 'tel:+4916330514467',
    email: 'info@kammin.net',
  },

  hours: {
    type: 'Termine nach Vereinbarung',
    note: 'Wir sind für Sie da - vereinbaren Sie Ihren persönlichen Termin',
  },

  social: {
    facebook: '',
    instagram: '',
  },
};

export const CORE_VALUES = [
  {
    title: 'Qualität',
    description: 'Höchste Standards in Handwerk und Produkten für perfekte Ergebnisse',
    icon: 'award',
  },
  {
    title: 'Erholsam',
    description: 'Eine Oase der Entspannung und Ruhe in angenehmer Atmosphäre',
    icon: 'sparkles',
  },
  {
    title: 'Gut für die Seele',
    description: 'Ihr emotionales Wohlbefinden steht bei uns im Mittelpunkt',
    icon: 'heart',
  },
];

export const NAV_LINKS = [
  { href: '/', label: 'Home' },
  { href: '/dienstleistungen', label: 'Dienstleistungen' },
  { href: '/galerie', label: 'Galerie' },
  { href: '/preise', label: 'Preise' },
  { href: '/kontakt', label: 'Kontakt' },
];
