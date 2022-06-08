import { IconName } from "@blueprintjs/icons";

interface Link {
  id: number;
  url: string;
  title: string;
}

interface Icon {
  id: number;
  url: string;
  icon: IconName;
  title: string;
}

export const LINKS: Link[] = [
  {
    id: 0,
    url: '/',
    title: 'Dashboard',
  },
  {
    id: 1,
    url: '/stats',
    title: 'Stats',
  },
  {
    id: 2,
    url: '/rank',
    title: 'Rank',
  },
];

export const ICONS: Icon[] = [
  {
    id: 3,
    url: '/privacy-policy',
    icon: 'shield',
    title: 'Privacy Policy',
  },
  {
    id: 4,
    url: '/terms-and-conditions',
    icon: 'document',
    title: 'Terms & Conditions',
  },
  {
    id: 5,
    url: '/faq',
    icon: 'lightbulb',
    title: 'FAQ',
  },
];